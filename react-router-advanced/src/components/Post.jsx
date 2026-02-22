import { useParams } from "react-router-dom";

function Post() {
  const { postId } = useParams();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Post Page</h1>
      <p className="text-lg">Dynamic Post ID: {postId}</p>
    </div>
  );
}

export default Post;