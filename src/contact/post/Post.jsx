import { useLoaderData } from "react-router-dom";
import Posts from "./posts/Posts";

const Post = () => {
    const posts = useLoaderData(); 
    return (
        <div className="users">
            <h2>posts:{posts.length}</h2>
            {
                posts.map(post => <Posts key={post.id} post={post}></Posts>)
            }
        </div>
    );
};

export default Post;