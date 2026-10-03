import express from 'express';
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());

// Serve the Vite build output
app.use(express.static(path.join(__dirname, 'dist')));

// Cloudflare AI proxy endpoint
app.post('/api/cf-ai', async (req, res) => {
    const accountId = process.env.CF_ACCOUNT_ID;
    const apiToken = process.env.CF_API_TOKEN;

    if (!accountId || !apiToken) {
        return res.status(500).json({ error: 'Cloudflare credentials not configured' });
    }

    try {
        const { model, messages, prompt } = req.body || {};
        const modelName = model || '@cf/meta/llama-3.1-8b-instruct';

        const cfRes = await fetch(
            `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${modelName}`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${apiToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(messages ? { messages } : { prompt }),
            }
        );

        const data = await cfRes.json();

        if (!cfRes.ok) {
            return res.status(cfRes.status).json({ error: data });
        }

        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({ error: e?.message || 'Cloudflare AI request failed' });
    }
});

// All other routes → serve the React app (client-side routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
