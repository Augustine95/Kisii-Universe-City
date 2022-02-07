import React from "react";
import CreatePost from "./createPost";
import Post from "./post";
import avatar from "../images/augustine.png";

const Home = () => {
  const posts = [
    {
      id: 1,
      avatar,
      username: "@augustineawuori",
      name: "Augustine Awuori",
      postMessage: "This is me man",
      time: "20h",
      isAdmin: true,
    },
    {
      id: 2,
      avatar,
      username: "@awuoriaugustine",
      name: "Augustine Aramba",
      postMessage:
        "I thank God for everything he Has done for me even though I am a sinner",
      time: "20h",
    },
  ];

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
        />
      ))}
    </section>
  );
};

export default Home;
