import { auth } from "./Firebase"

import "./AllPost.css";

let AllPosts = () => {

    return (
        <>
        <h1>All Posts</h1>
        <button onClick={() => {
            auth.signOut()
        } }>Logout</button>
        </>
    );
}

export default AllPosts;
