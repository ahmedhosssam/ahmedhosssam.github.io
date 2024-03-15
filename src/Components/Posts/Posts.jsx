import { Link } from 'react-router-dom'
import Test from './Posts/Test.jsx'
import PostLink from './PostLink.jsx'

const Posts = () => {
    return (
        <div>
            <h2>Posts</h2>
            <PostLink path="/test" title="Test" date="Mar 15 2024"/>
            <br/>
        </div>
    )
}

export default Posts
