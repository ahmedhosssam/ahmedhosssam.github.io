import { Link } from 'react-router-dom'

const PostLink = ({path, title, date}) => {
    return (
        <div>
            <div style={{color: '#828282'}}>{date}</div>
            <div style={{fontSize:24}}><Link to={path}>{title}</Link></div>
            <br/>
        </div>
    )
}

export default PostLink
