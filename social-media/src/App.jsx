import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import PostList from "./Components/PostList";
import CreatPost from "./Components/CreatPost";
import PostListProvider from "./Store/PostListStore";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <PostListProvider>
      <div className="app-container">
        <div>
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>

        <div className="content">
          <Header />
          {selectedTab === "home" ? <PostList /> : <CreatPost />}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
