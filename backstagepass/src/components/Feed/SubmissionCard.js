import ReactionBar from "./ReactionBar";

export default function SubmissionCard({ post }) {
  return (
    <div className="submission-card">

      {/* Header */}
      <div className="submission-header">
        🎉 Your Submission
      </div>

      <div className="post-card">

        {/* Post Header */}
        <div className="post-header">

          <img
            src={post.avatar}
            className="avatar"
            alt=""
          />

          <div className="post-info">
            <div className="name">{post.name}</div>
            <div className="time">{post.time}</div>
          </div>

          <div className="more">•••</div>

        </div>

        {/* Post text */}
        <p className="post-text">{post.text}</p>

        {/* Image */}
        {post.image && (
          <div className="post-media">
            <img src={post.image} alt="" />
          </div>
        )}

        {/* Footer */}
        <div className="post-footer">

          <ReactionBar />

          <div className="comments">
            {post.comments || 0} Comments
          </div>

        </div>

      </div>

    </div>
  );
}