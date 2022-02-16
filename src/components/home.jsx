import React, { useEffect, useState } from "react";

import avatar from "../images/augustine.png";
import CreatePost from "./createPost";
import ListGroup from "./listGroup";
import Post from "./post";
import PostStatus from "./postStatus";

const initialPosts = [
  {
    id: "vmghnfcgmfx,jk",
    author: {
      avatar,
      username: "@augustineawuori",
      name: "Augustine Awuori",
    },
    postMessage: "This is me man",
    time: "20h",
    isAdmin: true,
    likes: [],
    liked: false,
    isCommentActive: false,
    comments: [{ id: 1, username: "", commentMessage: "" }],
  },
  {
    id: "cmnghckguk,",
    author: {
      avatar,
      username: "@awuoriaugustine",
      name: "Augustine Aramba",
    },
    postMessage:
      "I thank God for everything he Has done for me even though I am a sinner",
    time: "20h",
    likes: [],
    isCommentActive: false,
    comments: [],
  },
];

const user = {
  name: "Augustine Awuori",
  username: "@augustine",
  id: 1,
  avatar,
};

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [replyMessage, setReplyMessage] = useState("");

  useEffect(() => {
    setPosts(initialPosts);
    setCurrentUser(user);
  }, []);

  const handleLike = (post) => {
    const newPosts = [...posts];
    const index = newPosts.findIndex((p) => p.id === post.id);
    newPosts[index] = { ...post };
    newPosts[index].liked = !newPosts[index].liked;

    if (newPosts[index].liked) newPosts[index].likes.push(currentUser.id);
    else
      newPosts[index].likes = newPosts[index].likes.filter(
        (id) => id !== currentUser.id
      );

    setPosts(newPosts);
  };

  const switchCommentActive = (post) => {
    const newPosts = [...posts];
    const index = newPosts.findIndex((p) => p.id === post.id);
    newPosts[index] = { ...post };
    newPosts[index].isCommentActive = !newPosts[index].isCommentActive;
    setPosts(newPosts);
  };

  const handleReplyChange = ({ currentTarget: input }) =>
    setReplyMessage(input.value);

  const handleReplyPost = (post) => {
    setReplyMessage("");

    const newPosts = [...posts];
    const index = newPosts.findIndex((p) => p.id === post.id);
    const newComment = { author: currentUser.id, commentMessage: replyMessage };
    newPosts[index].comments.push(newComment);
    newPosts[index].isCommentActive = false;
    setPosts(newPosts);
  };

  return (
    <section>
      <CreatePost />
      {posts.map((post) => (
        <>
          <Post
            isAdmin={post.isAdmin}
            key={post.id}
            liked={post.liked}
            likesCount={post.likes.length}
            name={post.author.name}
            onLike={() => handleLike(post)}
            onPost={() => console.log(post)}
            postContent={post.postMessage}
            timestamp={post.time}
            username={post.author.username}
            onReply={() => handleReplyPost(post)}
            onReplyChange={handleReplyChange}
            replyMessage={replyMessage}
            avatar={post.avatar}
            isCommentActive={post.isCommentActive}
            onCommentActiveSwitch={() => switchCommentActive(post)}
          />
        </>
      ))}
      {/* <PostStatus post={posts[0]} /> */}
    </section>
  );
};

export default Home;
