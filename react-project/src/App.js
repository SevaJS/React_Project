import React, { useState} from "react"
import PostForm from "./components/PostForm";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyModal from "./UI/Modal/MyModal";
import MyButton from "./UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";



function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: "", query: ""})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

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
