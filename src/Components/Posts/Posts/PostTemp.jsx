import { Link } from 'react-router-dom'

const PostTemp = () => {
    const st = {
        'fontFamily': 'Lucida Console, monospace',
        'color': 'black'
    }
    const title = "test"
    const date = "Mar 15 2024"
    document.title = title
    return (
        <div style={st}>
            <h2><Link to="/" style={{color:'black', textDecoration:'none', 
                    ':hover': { textDecoration: 'underline' }}}>
                Ahmed Hossam
            </Link></h2>
                        <hr/>
            <p style={{color: '#828282', padding:0}}>{date}</p>
            <h1>{title}</h1>
            <p>write here</p>
        </div>
    )
}

export default PostTemp
