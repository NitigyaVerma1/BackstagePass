import PostCard from "./PostCard";

const Feed = ({posts}) => {
  return (
    <div className="feed">
      <h3>See what others shared</h3>

      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
