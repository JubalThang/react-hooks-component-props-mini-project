import React from "react";
import blogData from "../data/blog";
import ArticleLists from "./Articles";
import Header from "./Header";
import About from "./About"

// console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header text={blogData.name}/>
      <About blogData={blogData}/>
      {blogData.posts.map(post => <ArticleLists key={post.id} article={post}/>)}
    </div>
  );
}

export default App;
