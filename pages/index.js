import { filmes } from "../data/filmes.js"

function Home () {
    console.log(filmes)

    const primeiroFilme = filmes[0]

    const estiloImagem = {
        width: "300px"
    }

    return <>
        <h1>Filmes</h1>

        <ul>
            <li>
                <p>Título: { primeiroFilme.titulo }</p>
                <p>Ano: { primeiroFilme.ano }</p>
                <p>Gênero: { primeiroFilme.genero }</p>
                <p>Nota: { primeiroFilme.nota }</p>

                <img style={estiloImagem} src={ primeiroFilme.poster }/>
            </li>
        </ul>
    </>
}

export default Home;