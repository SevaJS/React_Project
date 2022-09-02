import React from 'react';
import MyButton from "../UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div>
            <div className={"post"}>
                <div className="post_content">
                    <strong>{props.number}.{props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
                <MyButton>Удалить</MyButton>
            </div>

        </div>

    );
};

export default PostItem;