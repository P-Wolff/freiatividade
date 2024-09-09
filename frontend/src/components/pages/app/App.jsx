import './App.scss';
import Cabecalho from '../../cabecalho/Navbar';
import Cards from '../../cards/Cards';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
  const [cards, setCards] = useState([]);
  
  async function listarCards() {
    const resposta = await axios.get( 'http://localhost:3001/cards' )
    console.log(resposta.data);

    setCards(resposta.data)
  }

  useEffect (() => {
    listarCards()
  }, [])
  
  return (
    <div className="pagina-App">
      <Cabecalho />

      <div className='main'>
        <p className='text-main'>Conteúdos</p>
      </div>

      <div className='cards'>
        
        {
          cards.map( c => 
            <Cards 
              titulo = {c.titulo}
              assuntos = {c.assuntos}
              data = {c.data}
              status = {c.status}
              entregaTrab = {c.entregaTrab}
            />
          )
        }
      </div>

      <div className="cards">
          <div className='card' style={{ backgroundColor: '#F2F2F2' }}>
            <div className='card-conteudo'>
              <pre>
                {`Fim do Terceiro bimestre`}
              </pre>
            </div>
          </div>
      </div>


    </div>
  );
}