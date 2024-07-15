import jsonServer from 'json-server';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, '../db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser); // Middleware para analisar o corpo da requisição

// Rota personalizada para responder ao método OPTIONS (preflight) usado por navegadores
server.options('*', (req, res) => {
  res.sendStatus(200);
});

// Rotas para operações CRUD com "videos"
server.post('/api/videos', (req, res) => {
  // Implemente lógica para criar um novo vídeo
  const { titulo, url } = req.body; // Exemplo de como acessar dados do corpo da requisição
  // Aqui você pode adicionar lógica para adicionar o vídeo ao seu banco de dados (db.json)
  res.status(201).json({ message: 'Vídeo criado com sucesso' });
});

server.put('/api/videos/:id', (req, res) => {
  // Implemente lógica para atualizar o vídeo com o ID especificado
  const { id } = req.params; // ID do vídeo a ser atualizado
  // Aqui você pode adicionar lógica para atualizar o vídeo no seu banco de dados (db.json)
  res.status(200).json({ message: `Vídeo ${id} atualizado com sucesso` });
});

server.delete('/api/videos/:id', (req, res) => {
  // Implemente lógica para excluir o vídeo com o ID especificado
  const { id } = req.params; // ID do vídeo a ser excluído
  // Aqui você pode adicionar lógica para excluir o vídeo do seu banco de dados (db.json)
  res.status(204).json({ message: `Vídeo ${id} excluído com sucesso` });
});

// Usar o roteador para todas as outras operações CRUD
server.use('/api', router);

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

export default server;
