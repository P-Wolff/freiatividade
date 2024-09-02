import './App.scss';
import Cabecalho from '../../cabecalho/Navbar';


export default function App() {
  let corPrimaria = '#A3E5BA';
  let corSegundaria = '#EFFBE2';
  let temData = true;

  return (
    <div className="pagina-App">
      <Cabecalho />

      <div className='main'>
        <p className='text-main'>Conteudos</p>
      </div>

      <Cards 
        corPrimaria={ corPrimaria }
        corSegundaria={ corSegundaria }
        titulo='Componentes'
        text={`Objetos e Listas de Objetos
- Componentes`}
        data='26/agosto'
      />
      <Cards 
        corPrimaria={ corPrimaria }
        corSegundaria={ corSegundaria }
        titulo='Renderizaçao e Efeito'
        data='2/setembro'

      />
      <Cards 
        corPrimaria={ corPrimaria }
        corSegundaria={ corSegundaria }
        titulo='Consumindo APIs - Parte 1'
        data='2/setembro'

      />
      <Cards 
        corPrimaria={ corPrimaria }
        corSegundaria={ corSegundaria }
        titulo='Prova Pratica e Teorica'
        data='16/setembro'

      />
      <Cards 
        corPrimaria={ corPrimaria }
        corSegundaria={ corSegundaria }
        titulo='Componentes'

      />

    </div>
  );
}

function Cards( {corPrimaria, corSegundaria, temData, titulo, text, data} ) {

  return(
    <div className='cards'>

      <div className='card' style={{ backgroundColor: corSegundaria }}>
        <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
          <h2>{titulo}</h2>
        </div>
        
        <div className='card-conteudo'>
          <h3>Assuntos</h3>
            <pre>
              - {text} <br />
            </pre>
        </div>
        
        <p className='tag'>{data}</p>
      </div>
      
    </div>
  );
}