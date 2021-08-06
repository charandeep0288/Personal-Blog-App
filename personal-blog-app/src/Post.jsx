import { Redirect, Link } from "react-router-dom";
import { auth, firestore } from "./Firebase"
import { useState } from "react";

import "./Post.css";

let Post = (props) => {

    console.log(props.user ? "true" : "false");

    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");
    
    const handleTitleInput = event1 => {
        setTitle(event1.target.value);
    };

    const handleBodyInput = event2 =>{
        setBody(event2.target.value);
    };

   
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


                    <input onChange={handleTitleInput} value={title} id="title" placeholder="Enter Title . . . . . . . ." type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>

                    <textarea  onChange={handleBodyInput} value={body} class="form-control is-invalid" id="validationTextarea" placeholder="Enter Body . . . . . . " required></textarea>

                    <button 
                        id="post-btn" type="button" 
                        class="btn btn-primary"
                        onClick={() =>{

                            console.log(title);
                            firestore.collection("posts").add({
                                Title: title,
                                Body: body,
                                uid: props.user.uid,
                            });
                            setBody("");
                            setTitle("");
                        }}>Post</button>
                        

                    <Link to="/allposts"><button id="allpost-btn" type="button" class="btn btn-primary">All Posts</button>
                    </Link>
                </>
            ) : (
                <Redirect to="/login" />
            )}
        </div>
    );
};

export default Post;