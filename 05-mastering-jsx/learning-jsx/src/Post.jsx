import { Fragment } from "react";

const posts = [
    {
        id: 1,
        title: "What is React?",
        description: "A Beautiful Library to create....",
    },
    {
        id: 2,
        title: "What is Web Development?",
        description: "A development process through which...",
    },
];

const Post = () => {
    return posts.map((post) => (
        <Fragment key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
        </Fragment>
    ));
};

export default Post;
