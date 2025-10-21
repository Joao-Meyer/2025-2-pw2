import { filmes } from '../data/filmes';

function CardFilme ({ filme }) {
    const estiloImagem = {
        width: "300px"
    };

    return (    
        <li>
            <p>Título: { filme.titulo }</p>
            <p>Ano: { filme.ano }</p>
            <p>Gênero: { filme.genero }</p>
            <p>Nota: { filme.nota }</p>

            <img style={estiloImagem} src={ filme.poster }/>
        </li>
    )
}

function Home () {

    return (
        <>
            <h1>Filmes</h1>

            <ul>
                {
                    filmes.map((filme) => {
                        return (
                            <CardFilme key={ `card-filme-${ filme.id }` } filme={ filme }/>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default Home;