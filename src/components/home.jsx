import React, { useEffect, useState } from "react";

import avatar from "../images/augustine.png";
import CreatePost from "./createPost";
import Post from "./post";
import PostStatus from "./postStatus";

const initialPosts = [
  {
    id: "vmghnfcgmfx,jk",
    avatar,
    username: "@augustineawuori",
    name: "Augustine Awuori",
    postMessage: "This is me man",
    time: "20h",
    isAdmin: true,
    comments: [{ id: 1, username: "", commentMessage: "" }],
    likes: [],
    liked: false,
  },
  {
    id: "cmnghckguk,",
    avatar,
    username: "@awuoriaugustine",
    name: "Augustine Aramba",
    postMessage:
      "I thank God for everything he Has done for me even though I am a sinner",
    time: "20h",
    likes: [],
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

  return (
    <section>
      <CreatePost />
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          name={post.name}
          postContent={post.postMessage}
          timestamp={post.time}
          isAdmin={post.isAdmin}
          onPost={() => console.log("Posted")}
          liked={post.liked}
          onLike={() => handleLike(post)}
          likesCount={post.likes.length}
        />
      ))}
      {/* <PostStatus post={post[0]} /> */}
    </section>
  );
};

export default Home;
