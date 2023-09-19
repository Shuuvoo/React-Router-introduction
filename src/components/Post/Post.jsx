import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id,title} = post
    const postStyle = {
        padding: '10px',
        border: '1px solid pink',
        borderRadius: '15px',


    }

    return (
        <div style={postStyle}>
            <h4>Post Of Id : {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Deatails</Link>
            <Link to={`/post/${id}`}><button>Show details</button></Link>
        </div>
    );
};

export default Post;