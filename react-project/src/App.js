import React, {useState} from "react"
import PostForm from "./components/PostForm";
import "./styles/App.css"
import PostList from "./components/PostList";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Js", body: "ABout JS"},
        {id: 2, title: "Js", body: "ABout JS"},
        {id: 3, title: "Js", body: "ABout JS"},
        {id: 4, title: "Js", body: "ABout JS"},


    ]);
    const newPost = (newPostData) => {
        setPosts([...posts, newPostData])

    }
    return (
        <div className="App">
            <PostForm create={newPost}/>
            <PostList posts={posts} title="News"/>
        </div>
    );
}

export default App;
