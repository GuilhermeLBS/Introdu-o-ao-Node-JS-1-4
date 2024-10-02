const http = require('http');
const url = require('url');
const gerarNumeroAleatorio = require('./utils');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  // Rota principal "/"
  if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bem-vindo!');
  }
  // Rota "/sobre"
  else if (path === '/sobre') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Eu sou um desenvolvedor entusiasta de Node.js!');
  }
  // Rota "/contato"
  else if (path === '/contato') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Entre em contato pelo email: email@exemplo.com');
  }
  // Rota "/numero" que retorna um número aleatório
  else if (path === '/numero') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    const numero = gerarNumeroAleatorio();
    res.end(`Número aleatório: ${numero}`);
  }
  // Rota parametrizada "/saudacao/seu_nome"
  else if (path.startsWith('/saudacao/')) {
    const nome = path.split('/')[2]; // Captura o nome da URL
    if (nome) {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`Olá, ${decodeURIComponent(nome.charAt(0).toUpperCase() + nome.slice(1))}!`);
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Por favor, forneça um nome válido.');
    }
  }
  // Rota não encontrada
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Página não encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
