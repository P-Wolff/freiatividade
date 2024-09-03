import './App.scss';
import Cabecalho from '../../cabecalho/Navbar';
import Cards from '../../cards/Cards';

export default function App() {
  let corPrimaria = '#A3E5BA';
  let corSegundaria = '#EFFBE2';
  let corTerceria = '#DCA3E5';
  let corQuarta = '##EDE2FB';
  let corQuinta = '#C3C3C3';
  let corSexta = '#F2F2F2';
  let corSetima = '#F6E448';
  let corOitava = '#FAF4C1';
  let temData = true;

  return (
    <div className="pagina-App">
      <Cabecalho />

      <div className='main'>
        <p className='text-main'>Conteúdos</p>
      </div>

      <div className='cards-container'>
        
        <Cards 
          corPrimaria={ corPrimaria }
          corSegundaria={ corSegundaria }
          titulo='Componentes'
          subtitulo='Assuntos'
          text={`Objetos e Listas de Objetos
- Componentes`}
          data='26/agosto'
        />

        <Cards 
          corPrimaria={ corTerceria }
          corSegundaria={ corQuarta }
          titulo='Renderização e Efeito'
          subtitulo='Assuntos'
          text={`Componentes na renderizacao.`}
          data='2/setembro'
        />

        <Cards 
          corPrimaria={ corQuinta }
          corSegundaria={ corSexta }
          titulo='Consumindo APIs - Parte 1'
          subtitulo='Assuntos'
          text={`Componentes na renderizacao.`}
          data='2/setembro'
        />

        <Cards 
          corPrimaria={ corSetima }
          corSegundaria={ corOitava }
          titulo='Prova Pratica e Teorica'
          subtitulo='Assuntos'
          text={`Criando um projeto React.
- Estilizacao com SCSS.
- Navegacao entre telas.
- Variaveis de estado.
- Renderizacao de lista.
- Componentes.`}
          data='16/setembro'
        />

        <Cards 
          corPrimaria={ corSexta }
          text={`              
            
            
            
                  Fim do
            terceiro bimestre`}
        />
      </div>
    </div>
  );
}