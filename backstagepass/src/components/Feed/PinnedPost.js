export default function PinnedPost({ post }) {
  return (
    <div className="post-card pinned">

      <div className="pinned-label">📌 This is a pinned post</div>

      <div className="post-header">
        <img src={post.avatar} className="avatar" />

        <div className="post-info">
          <div className="name">{post.name}</div>
          <div className="time">{post.time}</div>
        </div>

        <div className="more">⋯</div>
      </div>

      <p className="post-text">{post.text}</p>

      <ul className="task-list">
        <li>Minimum 20 minutes of sit-up</li>
        <li>Mention Intensity</li>
        <li>Upload Media (Optional)</li>
      </ul>

      <div className="post-actions">

        <div className="reactions-pill">
          <span>🙏</span>
          <span>😍</span>
          <span className="count">18</span>
        </div>

        <div className="actions-right">
          <div className="icon">😊</div>
          <div className="icon">💬</div>
        </div>

      </div>

      <div className="comments">
        10 Comments
      </div>

    </div>
  );
}