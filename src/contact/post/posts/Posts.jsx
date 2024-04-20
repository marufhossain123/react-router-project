import { Link } from "react-router-dom";

const Posts = ({post}) => {
    const {id, title} = post;
    const postStyle = {
        border: '2px solid purple',
        padding: '20px',
        borderRadius: '20px'
            }
    return (
        <div style={postStyle}>
           <h4>post of id:{id}</h4>
           <p>{title}</p> 
           <Link to={`/post/${id}`}>post details</Link>
        </div>
    );
};

export default Posts;