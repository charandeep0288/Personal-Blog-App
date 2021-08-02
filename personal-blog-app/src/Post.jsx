import { auth } from "./Firebase"

let Post = (props) => {
    return (
        // <h1>Post</h1>
        <div>
            <h1>{props.user.displayName}</h1>
            <p>Email: {props.user.email}</p>
            <p>uid: {props.user.uid}</p>
            <button onClick={() => {
                auth.signOut()
            } }>Logout</button>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
        </div>
    );
};

export default Post;