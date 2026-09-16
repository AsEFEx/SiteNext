// pages/api/validar.js

export default async function handler(req, res) {
  
  
  if (req.method !== 'POST') {
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  try {
    
    // 🔒 CONFIGURAÇÃO DE PRODUÇÃO NODE.JS: Passa os headers explicitamente para liberar o tráfego local
    const opcoesFetchProducao = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', // Força o Node a simular o navegador
        'Host': '127.0.0.1:5000'
      }
    };

    
    
    const respostaServer = await fetch('http://127.0.0.1:5000/usuarios_validos', opcoesFetchProducao);
    
    if (!respostaServer.ok) {
      return res.status(500).json({ erro: 'Não foi possível ler o banco de dados local.' });
    }

    const todosUsuariosValidos = await respostaServer.json();
        
    // 🔥 Garante a leitura correta do corpo da requisição, aceitando objeto ou string convertida
    const dadosRecebidos = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const listaUsuarios = Array.isArray(todosUsuariosValidos) 
      ? todosUsuariosValidos 
      : (todosUsuariosValidos.data || []);

    const usuarioEncontrado = listaUsuarios.find(usuario => {
      const nrCpBanco = String(usuario.nr_cp ?? usuario.NR_CP ?? '').trim().toUpperCase();
      const cursoBanco = String(usuario.curso ?? usuario.CURSO ?? '').trim().toUpperCase();
      const nomeBanco = String(usuario.nome_completo ?? usuario.NOME_COMPLETO ?? usuario.nome ?? usuario.NOME ?? '').trim().toUpperCase();
      const armaBanco = String(usuario.arma ?? usuario.ARMA ?? '').trim().toUpperCase();
      
      const nrCpDigitado = String(dadosRecebidos.nr_cp ?? '').trim().toUpperCase();
      const cursoDigitado = String(dadosRecebidos.curso ?? '').trim().toUpperCase();
      const nomeDigitado = String(dadosRecebidos.nome ?? '').trim().toUpperCase();
      const armaDigitado = String(dadosRecebidos.arma ?? '').trim().toUpperCase();

      return nrCpBanco === nrCpDigitado && 
             cursoBanco === cursoDigitado && 
             nomeBanco === nomeDigitado && 
             armaBanco === armaDigitado;
    });

    if (usuarioEncontrado) {
      return res.status(200).json({ sucesso: true, usuario: usuarioEncontrado });
    } else {
      return res.status(404).json({ sucesso: false, mensagem: 'Dados não encontrados na lista pré-autorizada.' });
    }

  } catch (error) {
    console.error("Erro interno na API Route:", error);
    return res.status(500).json({ erro: 'Erro interno ao processar a validação.' });
  }
}
