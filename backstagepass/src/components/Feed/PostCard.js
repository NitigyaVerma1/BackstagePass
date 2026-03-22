const PostCard = ({ post , isPinned })=> {
  return (
    <>
      <div className="post-header">

        <img src={post.avatar} className="avatar" />

        <div>
          <div className="name">{post.name}</div>
          <div className="time">{post.time}</div>
        </div>
      </div>
    <div className="post-content">
      <p className="post-text">{post.text}</p>

      {/* PINNED TASK LIST */}
      {isPinned && (
        <div className="task-list">
          <div>1️⃣ Minimum 20 minutes of sit-up</div>
          <div>2️⃣ Mention Intensity</div>
          <div>3️⃣ Upload Media (Optional)</div>
          <div>4️⃣ Upload Media (Optional)</div>
          <div>5️⃣ Upload Media (Optional)</div>
        </div>
      )}

    </div>

      {/* ACTIONS */}
      <div className="post-actions">

        <div className="reactions-pill">
          <span>🙏</span>
          <span>😍</span>
          <span className="count">18</span>
        </div>

        <div className="right-actions">
          <div className="icon emoji">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          </div>
          <div className="icon">💬</div>
        </div>

      </div>

      <div className="comments">10 Comments</div>
    </>
  );
}
export default PostCard