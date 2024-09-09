import express from 'express';
import cors from 'cors';

const server = express()
const port = 3001

server.use(express.json());
server.use(cors());

server.get('/cards', (req, res) => {
    let cards = [
        {
            "titulo": "Components",
            "assuntos": `- Objetos e Listas de Objetos
            - Componentes`,  
            "data": "26/ago",
            "status": "Completo",
            "entregaTrab": false
        },
      
        {
            "titulo": "Renderização e Efeito",
            "assuntos": "- Componentes na renderizacao",  
            "data": "2/set",
            "status": "Em andamento",
            "entregaTrab": false
        },
      
        {
            "titulo": "Consumindo APIs - Parte 1",
            "assuntos": "- Componentes na renderizacao",  
            "data": "9/set",
            "status": "Criado",
            "entregaTrab": true
        },
      
        {
            "titulo": "Prova Pratica e Teorica",
            "assuntos": `- Criando um projeto React.
            - Estilizacao com SCSS.
            - Navegacao entre telas.
            - Variaveis de estado.
            - Renderizacao de lista.
            - Componentes.`,  
            "data": "16/setembro",
            "status": "Evento",
            "entregaTrab": false
        }
    ]

    res.status(200).send(cards)
});

server.listen(port, () => console.log(`Executando na porta ${port}`))