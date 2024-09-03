import './Cards.scss';


export default function Cards( {corPrimaria, corSegundaria, 
    corTerceria, corQuarta, 
    corQuinta, corSexta,
    corSetima, corOitava, 
    temData, titulo, subtitulo, text, data} ) {


    return(
        <div className='cards'>

            <div className='card' style={{ backgroundColor: corSegundaria }}>
                <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
                    <h2>{titulo}</h2>
                </div>

                <div className='card-conteudo'>
                    <h3>{subtitulo}</h3>
                    <pre>
                        - {text} <br />
                    </pre>
                </div>

                <p className='tag'>{data}</p>
            </div>
        
        </div>
    );
}