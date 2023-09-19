import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id,title} = post
    const navigate = useNavigate()
    const postStyle = {
        padding: '10px',
        border: '1px solid pink',
        borderRadius: '15px',


    }
    const handleShowdeatail = () => {
        navigate(`/post/${id}/`)
    }

    return (
        <div style={postStyle}>
            <h4>Post Of Id : {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Deatails</Link>
            <Link to={`/post/${id}`}><button>Show details</button></Link>
            <button onClick={handleShowdeatail} >Click to show Details</button>
        </div>
    );
};

export default Post;