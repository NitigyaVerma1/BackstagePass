import PostCard from "./PostCard";
const Feed = ({ posts }) => {
  const pinnedPost = {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/40?img=9",
    time: "2 hours ago",
    text: "Just completed the 20-minute workout! Feeling great and energized. 💪🔥 #FitnessJourney #WorkoutComplete"
  };
  return (
    <div className="feed-card">

      {/* HEADER */}
      <div className="feed-header">

        <h2>
          See what others
          <span className="avatars img">
            <img src="https://i.pravatar.cc/30?img=1" />
            <img src="https://i.pravatar.cc/30?img=2" />
            <img src="https://i.pravatar.cc/30?img=3" />
          </span>
          shared
        </h2>

        <p>85+ participants already completed</p>
      </div>

      {/* PINNED POST */}
      <div className="post pinned">

        <div className="pinned-label">📌 This is a pinned post</div>

        <PostCard post={pinnedPost} isPinned />

      </div>

      {/* USER POSTS */}
      {posts.map((post, i) => (
        <div key={i} className="post">
          <PostCard post={post} />
        </div>
      ))}

    </div>
  );
}
export default Feed