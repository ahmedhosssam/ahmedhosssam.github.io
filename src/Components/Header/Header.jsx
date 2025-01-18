import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1><Link to="/" style={{color:'black', textDecoration:'none', 
                    ':hover': { textDecoration: 'underline' }}}>
                Ahmed Hossam
            </Link></h1>
            <div>Hi, I'm Ahmed Hossam, a programmer, computer science student, and aspiring engineer.</div>
            <div>I also make <a href="https://www.youtube.com/@ahmedhossam6060">youtube videos</a>.</div>

            Links: <a href="https://github.com/ahmedhosssam">github</a> - <a href="https://twitter.com/ahmedhossvm">twitter(X)</a> - <a href="https://linkedin.com/in/ahmedhossamm">linkedin</a> - <a href="https://www.youtube.com/@ahmedhossam6060">youtube</a>

        </div>
    )
}

export default Header
