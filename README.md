# Palha Weddings — Link na bio

Versão atual com identidade verde profundo e areia, logo branca, título “Histórias que ficam.” em uma linha, botões mais acima e neon animado. Responsiva para celular e computador. As imagens e fontes estão incluídas no pacote.

## Publicar no GitHub e na Vercel

1. Descompacte o ZIP no computador.
2. Crie um repositório no GitHub, escolha **Add file → Upload files** e envie o conteúdo descompactado. O arquivo `index.html` deve ficar na raiz do repositório, junto de `style.css`, `config.js`, `app.js`, `vercel.json` e da pasta `assets`.
3. Na Vercel, importe esse repositório como um novo projeto.
4. Use **Framework Preset: Other**. O arquivo `vercel.json` já define a publicação estática. Caso a tela solicite os campos manualmente, use:
   - Root Directory: raiz do repositório.
   - Build Command: vazio.
   - Install Command: vazio.
   - Output Directory: `.`
5. Clique em **Deploy**. Ao concluir, a Vercel fornecerá a URL para usar na bio.

O ZIP precisa ser descompactado antes do envio para o GitHub; envie os arquivos e a pasta `assets`, e não apenas o arquivo ZIP.

## Links já configurados

- WhatsApp: +55 (43) 99676-9373.
- Álbuns: https://palhaweddings.plify360.com.br/albuns
- Site: https://palhaweddings.plify360.com.br

Para alterar um endereço depois, edite `config.js` e o `href` correspondente em `index.html`.

## Visualizar no computador

Abra `index.html` no navegador. Para uma prévia por servidor local, execute `python3 -m http.server 8000` nesta pasta e acesse http://localhost:8000.

## Arquivos

- `index.html`: conteúdo e links.
- `style.css`: cores, fontes, adaptação para telas e animações.
- `config.js`: destinos dos três botões.
- `app.js`: aplicação da configuração dos links.
- `assets/`: logo, fotografias e fontes locais.
- `vercel.json`: configuração de publicação estática.
- `FONT-LICENSES.txt`: licenças das fontes.

Não são necessários banco de dados, variáveis de ambiente ou instalação de dependências.

## Prévia ao compartilhar (opcional)

Depois de publicar e saber o domínio definitivo, acrescente ao `<head>` de `index.html` uma meta `og:image` com a URL absoluta da imagem, usando o seu próprio domínio e o caminho `/assets/editorial.webp`. Isso permite configurar a capa da prévia de compartilhamento com a URL definitiva.

## Imagens e identidade

Logo e fotografias da Palha Weddings preservadas. Fontes da página: Outfit e Cormorant Garamond. O uso dos materiais de marca e das fotografias deve respeitar os direitos de seus titulares.

## Referências de publicação

- https://vercel.com/docs/project-configuration/vercel-json
- https://vercel.com/docs/builds/configure-a-build
