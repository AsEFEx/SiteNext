import {promises} from 'fs'
import path from 'path';

export default async function handler(req, res){
    const { ano } = req.query
    const jsonContents = await promises.readFile(path.join(process.cwd(), 'assets/TabelasCalcoesPretos', ano + '.json'), 'utf8');
    res.status(200).json(jsonContents);
}