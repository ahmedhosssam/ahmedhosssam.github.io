import Header from '../Header/Header.jsx'
import Posts from '../Posts/Posts.jsx'

const App = () => {
    const st = {
        'fontFamily': 'Lucida Console, monospace'
    }
    return (
        <div style={st}>
            <Header/>
            <hr/>
            <Posts/>
        </div>
    )
}

export default App
