export default function CardFilme({ filme }) {

    const estiloImagem = {
        width: "300px"
    };

    return (
        <li>
            <p>Título: { filme.titulo }</p>
            <p>Ano: { filme.ano }</p>
            <p>Gênero: { filme.genero }</p>
            <p>Nota: { filme.nota }</p>

            <img style={ estiloImagem } src={ filme.poster }/>
        </li>
    );
}