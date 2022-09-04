import React, {useMemo, useState} from "react"
import PostForm from "./components/PostForm";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Js", body: "ABout JS"},
        {id: 2, title: "Js", body: "ABout JS"},
        {id: 3, title: "Js", body: "ABout JS"},
        {id: 4, title: "Js", body: "ABout JS"},


    ]);

    const [filter, setFilter] = useState({sort: "", query: ""})


    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        } else
            return posts;
    }, [filter.sort, posts]);


    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))

    }, [filter.query, sortedPosts]);

    const newPost = (newPostData) => {
        setPosts([...posts, newPostData])

    };
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))

    };
    return (
        <div className="App">
            <PostForm create={newPost}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {sortedAndSearchedPosts.length !== 0
                ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="News"/>
                : <h1 style={{textAlign: "center"}}>No posts!</h1>
            }
        </div>
    );
}

export default App;
