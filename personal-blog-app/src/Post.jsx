import { Redirect, Link } from "react-router-dom";
import { auth } from "./Firebase"

import "./Post.css";

let Post = (props) => {

    console.log(props.user ? "true" : "false");

    return (
        // <h1>Post</h1>
        <div>
            {props.user ? (
                <>
                    <div className="row">
                        <div className="col-5 p4">
                            <h1>Hello!!! {props.user.displayName}</h1>
                        </div>

                        <div className="col-4 p4">
                            <p>Email: {props.user.email}</p>
                            {/* <p>uid: {props.user.uid}</p> */}
                        </div>

                        <div className="col-1 p4">
                            <button id="logout" onClick={() => {
                                auth.signOut()
                            }} type="button" class="btn btn-danger">Logout</button>
                        </div>
                    </div>


                    <input placeholder="Enter Title . . . . . . . ." type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>

                    <textarea  id="body" class="form-control is-invalid" id="validationTextarea" placeholder="Enter Body . . . . . . " required></textarea>

                    <button id="post-btn" type="button" class="btn btn-primary">Post</button>

                    <Link to="/allPost"><button id="allpost-btn" type="button" class="btn btn-primary">All Post </button>
                    </Link>
                </>
            ) : (
                <Redirect to="/Login" />
            )}
        </div>
    );
};

export default Post;