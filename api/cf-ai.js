export const config = {
    maxDuration: 60,
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

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
}
