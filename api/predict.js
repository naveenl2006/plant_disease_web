import { Client } from '@gradio/client';

export const config = {
  maxDuration: 60,
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { image } = req.body || {};
    if (!image || typeof image !== 'string' || !image.includes(',')) {
      return res.status(400).json({ error: 'No image received' });
    }

    // image is a data URL: "data:image/jpeg;base64,xxxx"
    const base64 = image.split(',')[1];
    const blob = new Blob([Buffer.from(base64, 'base64')], { type: 'image/jpeg' });

    const client = await Client.connect('Naveen2916/plantdisease');
    const result = await client.predict('/predict', { image: blob });

    return res.status(200).json(result.data);
  } catch (e) {
    return res.status(500).json({ error: e?.message || 'Prediction failed' });
  }
}