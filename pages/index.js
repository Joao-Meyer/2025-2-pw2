import { filmes } from '../data/filmes';

function Home () {
    console.log(filmes);

    const primeiroFilme = filmes[0];

    const estiloImagem = {
        width: "300px"
    };

    return (
        <>
            <h1>Filmes</h1>

            <ul>
                {
                    filmes.map((filme) => {
                        return (
                            <li>
                                <p>Título: {filme.titulo}</p>
                                <p>Ano: {filme.ano}</p>
                                <p>Gênero: {filme.genero}</p>
                                <p>Nota: {filme.nota}</p>

                                <img style={estiloImagem} src={filme.poster}/>
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default Home;