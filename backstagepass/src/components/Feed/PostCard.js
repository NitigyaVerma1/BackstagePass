import ReactionBar from "./ReactionBar";

export default function PostCard({ post }) {

  return (
    <div className="post">

      <div className="post-header">

        <img
          src={post.avatar}
          className="avatar"
          alt=""
        />

        <div>

          <div className="name">
            {post.name}
          </div>

          <div className="time">
            {post.time}
          </div>

        </div>

      </div>

      <p>{post.text}</p>

      {post.image && (
        <img
          className="post-image"
          src={post.image}
          alt=""
        />
      )}

      <ReactionBar />

    </div>
  );
}