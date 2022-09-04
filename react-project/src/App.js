import React, {useMemo, useState} from "react"
import PostForm from "./components/PostForm";
import "./styles/App.css"
import PostList from "./components/PostList";
import MySelect from "./UI/Select/MySelect";
import MyInput from "./UI/Input/MyInput";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Js", body: "ABout JS"},
        {id: 2, title: "Js", body: "ABout JS"},
        {id: 3, title: "Js", body: "ABout JS"},
        {id: 4, title: "Js", body: "ABout JS"},


    ]);

    const [selectedSort, setSelectedSort] = useState("");
    const [searchQuery, setSearchQuery] = useState("");


    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        } else
            return posts;
    }, [selectedSort, posts]);


    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))

    }, [searchQuery, sortedPosts]);

    const newPost = (newPostData) => {
        setPosts([...posts, newPostData])

    };
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))

    };
    const sortPosts = (sort) => {

        setSelectedSort(sort)
    };
    return (
        <div className="App">
            <PostForm create={newPost}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder={"Поииск.."}
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue={"Сортировка по:"}
                    options={[
                        {value: "title", name: "По загаловку"},
                        {value: "body", name: "По описанию"}
                    ]}
                />
                {sortedAndSearchedPosts.length !== 0
                    ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="News"/>
                    : <h1 style={{textAlign: "center"}}>No posts!</h1>
                }
            </div>
        </div>
    );
}

export default App;
