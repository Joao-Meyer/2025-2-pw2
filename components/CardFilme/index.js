export default function CardFilme ({ filme }) {
    const estiloCardFilme = {
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative'
    }

    const estiloImagem = {
        width: "100%",
        height: '100%',
        objectFit: 'cover',
        opacity: 1,
    };

    const estiloConteinerInfoFilme = {
        color: '#ffffff',
        position: 'absolute',
        bottom: 0,
        background: 'linear-gradient( rgba( 0, 0, 0, 0.1 ), rgba( 0, 0, 0, 0.9 ) )',
        height: '200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        padding: '10px'
    }

    return (    
        <li style={ estiloCardFilme }>
            <img style={estiloImagem} src={ filme.poster }/>
            
            <div style={ estiloConteinerInfoFilme }>
                <p>Título: { filme.titulo }</p>
                <p>Ano: { filme.ano }</p>
                <p>Gênero: { filme.genero }</p>
                <p>Nota: { filme.nota }</p>
            </div>
        </li>
    )
}