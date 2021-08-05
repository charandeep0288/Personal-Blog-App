import { Redirect, Link } from "react-router-dom";
import { auth } from "./Firebase"

let Post = (props) => {

    console.log(props.user ? "true" : "false");

    return (
        // <h1>Post</h1>
        <div>
            {props.user ? (
                <>
                    <h1>Hello!!! {props.user.displayName}</h1>
                    <p>Email: {props.user.email}</p>
                    {/* <p>uid: {props.user.uid}</p> */}
                    <button onClick={() => {
                        auth.signOut()
                    }}>Logout</button>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
                    <button type="button" class="btn btn-primary">Post</button>

                    <Link to="/allPost"><button type="button" class="btn btn-primary">All Post </button>
                    </Link>
                </>
            ) : (
                <Redirect to="/login" />

            )}
        </div>
    );
};

export default Post;