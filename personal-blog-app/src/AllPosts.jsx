import { auth } from "./Firebase"

import "./AllPost.css";
import { useState, useEffect } from "react";
import { firestore } from "./Firebase" // default export nahi kia humna firestore koo in firebase.js, tho hum destructuring use karka import kara gai 
import { Redirect, Link } from "react-router-dom";

let AllPosts = (props) => {
    // use history

    console.log(props);
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        // let f = async () => {
        firestore.collection("posts").onSnapshot((querySnapshot) => {

            let tempArr = [];

            querySnapshot.forEach((doc) => {
                tempArr.push({
                    id: doc.id,
                    uid: doc.uid,
                    data: doc.data(),
                });
                // console.log(doc.data());
            });

            setPosts(tempArr);
            console.log(posts);
        });
        // };

        // f();

    }, []);

    return (
        <>
            {props.user ? (
                <>
                    <div className="row">

                        <div className="col-5 p4">
                            <Link to="/post"><button id="back-btn" type="button" class="btn btn-secondary">Back</button></Link>
                        </div>

                        <div className="col-5 p4">
                            <h1 id="allPosts">All Posts</h1>
                        </div>

                        <div className="col-2 p4">
                            <button id="logout" onClick={() => {
                                auth.signOut()
                            }} type="button" class="btn btn-danger">Logout</button>
                        </div>

                    </div>
                    <ul>
                        {
                            posts.map((el) => {
                                console.log("data");
                                if (el.data.uid === props.user.uid) {
                                    return (
                                        <ul id="data">
                                            <li id="title-data" key={el.id}>Title: {el.data.Title}</li>
                                            <li id="body-data" key={el.id}>Body: {el.data.Body}</li>
                                        </ul>
                                    );
                                };
                                // return (<ul></ul>);
                            })
                        }
                    </ul>

                </>
            ) :
                (<Redirect to="/login" />)
            }

        </>
    );
}

export default AllPosts;


