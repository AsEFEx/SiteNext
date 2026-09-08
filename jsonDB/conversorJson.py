import pandas as pd
import json

# 1. Ler o arquivo Excel
nome_arquivo_excel = "usuarioCalcaoPreto.xlsx"
df = pd.read_excel(nome_arquivo_excel)

# 🔥 CORREÇÃO: Substitui todas as células vazias (NaN) por uma string vazia ""
df = df.fillna("")

# 2. Converter as linhas do Excel em uma lista de dicionários
lista_usuarios = df.to_dict(orient='records')

# 3. Estruturar o objeto final para o json-server
dados_finais = {
    "usuarios_validos": lista_usuarios,
    "usuarios_cadastrados": []
}

# 4. Salvar o arquivo .json corrigido
with open('db.json', 'w', encoding='utf-8') as f:
    json.dump(dados_finais, f, ensure_ascii=False, indent=2)

print("Sucesso! O arquivo 'db.json' foi corrigido e gerado.")
