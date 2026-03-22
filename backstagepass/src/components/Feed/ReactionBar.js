const ReactionBar = () => {

  return (
    <div className="post-actions">

  {/* LEFT REACTIONS GROUP */}
  <div className="reactions-pill">
    <span className="emoji">🙏</span>
    <span className="emoji">😍</span>
    <span className="count">18</span>
  </div>

  {/* RIGHT ACTIONS */}
  <div className="action-icons">
    <div className="icon">😊</div>
    <div className="icon">💬</div>
  </div>

</div>
  );
}

export default ReactionBar