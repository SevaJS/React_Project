import React, {useState} from 'react';
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: "", body: ""});

    const createPost = (e) => {
        e.preventDefault();
        const newPost = {...post, id: Date.now()};
        create(newPost);
        setPost({title: "", body: ""});

    }
    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type={'text'}
                placeholder={"Название поста"}/>
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type={'text'}
                placeholder={"Описание поста"}/>
            <MyButton onClick={createPost}>Создать</MyButton>
        </form>
    );
};

export default PostForm;