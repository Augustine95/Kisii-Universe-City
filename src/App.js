import React from "react";
import { Route, Routes } from "react-router-dom";

import Business from "./components/business";
import Gadget from "./components/gadget";
import Groups from "./components/groups";
import Home from "./components/home";
import Login from "./components/login";
import Logout from "./components/logout";
import Members from "./components/members";
import Memes from "./components/memes";
import NavBar from "./components/navBar";
import Notification from "./components/notification";
import Profile from "./components/profile";
import QuestionAnswer from "./components/questionAnswer";
import Register from "./components/register";

const App = () => {
  return (
    <section>
      <NavBar />
      <main className="container grid grid--1x2">
        <Routes className="routes">
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/question-answer" element={<QuestionAnswer />} />
          <Route path="/memes" element={<Memes />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/business" element={<Business />} />
          <Route path="/members" element={<Members />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Gadget heading="Who to follow" />
      </main>
    </section>
  );
};

export default App;
