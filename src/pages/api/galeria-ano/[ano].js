import {promises} from 'fs'

export default async function handler(req, res){
    const { ano } = req.query
    const jsonContents = await promises.readFile('./assets/TabelasCalcoesPretos/' + ano + '.json', 'utf8');
    res.status(200).json(jsonContents);
}