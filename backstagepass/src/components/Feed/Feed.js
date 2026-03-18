import PostCard from "./PostCard";

const Feed = ({posts}) => {
  return (
    <div className="feed">
      <div className="feed-header">

        <h2>
          See what others 
          <span className="avatars">
            <img src="https://i.pravatar.cc/30?img=1" alt="" />
            <img src="https://i.pravatar.cc/30?img=2" alt=""/>
            <img src="https://i.pravatar.cc/30?img=3" alt=""/>
          </span>
          shared
        </h2>

        <p className="participants">
          85+ participants already completed
        </p>

      </div>

      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
