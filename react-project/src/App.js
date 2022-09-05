import React, {useMemo, useState} from "react"
import PostForm from "./components/PostForm";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyModal from "./UI/Modal/MyModal";
import MyButton from "./UI/button/MyButton";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Js", body: "ABout JS"},
        {id: 2, title: "Js", body: "ABout JS"},
        {id: 3, title: "Js", body: "ABout JS"},
        {id: 4, title: "Js", body: "ABout JS"},


    ]);

    const [filter, setFilter] = useState({sort: "", query: ""})

    const [modal, setModal] = useState(false)


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
        setModal(false)

    };
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))

    };
    return (
        <div className="App">
            <MyButton style={{marginTop: "25px"}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <PostForm
                    create={newPost}
                />
            </MyModal>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title="News"
            />
        </div>
    );
}

export default App;
