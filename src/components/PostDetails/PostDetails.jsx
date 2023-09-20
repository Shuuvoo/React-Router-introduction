import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const { id, title, body } = post;

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>id:{id}</h2>
      <h3>Title:{title}</h3>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
