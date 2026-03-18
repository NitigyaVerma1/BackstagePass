import Header from "../Layout/Header";
import ProgressBar from "../Layout/ProgressBar";
import CheckinBox from "../checkin/CheckinBox";
import Feed from "../Feed/Feed";
import CheckinHeader from "../checkin/CheckinHeader";
import { useState } from "react";
import posts from "../../data/posts";
import SubmissionCard from "../Feed/SubmissionCard";

export default function ChallengePage() {

  const [submission, setSubmission] = useState(null);
  const [lastPost , setLastPost] = useState(null);
  const [postsData, setPostsData] = useState(posts);
  const [completedDays, setCompletedDays] = useState([]);

      const handleNewPost = (post) => {
        const newPost = {
          ...post,
          id: Date.now(),
          name: "Ashraf Idrishi",
          avatar: "https://i.pravatar.cc/40",
          time: "Just now",
        };
    
        setSubmission(newPost);
        setCompletedDays(prev => [...prev, prev.length + 1]);
        setLastPost(newPost);
        if(lastPost){
            setPostsData(prev => [lastPost, ...prev])
        }
      };
  return (
    <div className="app">

      <Header activeDay={completedDays.length} />

      <div className="layout">
        <ProgressBar completedDays={completedDays}/>

        <div className="main">
          <CheckinHeader />
          <CheckinBox onSubmit={handleNewPost}/>
          {submission && <SubmissionCard post={submission} />}
          <Feed posts={postsData}/>
        </div>
      </div>
    </div>
  );
}
