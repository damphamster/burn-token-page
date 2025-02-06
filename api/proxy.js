export default async function handler(req, res) {
    const HELIUS_URL = 'https://mainnet.helius-rpc.com/';
    const API_KEY = process.env.HELIUS_API_KEY;

    try {
        const response = await fetch(`${HELIUS_URL}?api-key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).json({ error: 'Error proxying request' });
    }
}