import db from 'utils/db';

export default async (req, res) => {
    try {
        // const { id: Numbr } = req.query;
        // const { result } = await db.collection('2019').doc(Numbr).set(req.body)
        // res.status(200).json({ result })
        const { id: ano } = req.query;
        const entries = await db.collection(ano).get();
        const entriesData = entries.docs.map(entry => entry.data());
        res.status(200).json(entriesData)
    } catch (e) {
        res.status(400).end();
    }
}