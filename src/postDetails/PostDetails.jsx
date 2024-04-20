import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  console.log(post);
  const { id, title, body } = post;
  return (
    <div>
      <h3>post details about:{id}</h3>
      <p>title:{title}</p>
      <p>
        <small>body:{body}</small>
      </p>
      <Link to={`/post/${id}`}>post details</Link>
    </div>
  );
};

export default PostDetails;
