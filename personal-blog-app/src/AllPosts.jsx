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
                    <Link to="/post"><button type="button" class="btn btn-secondary">Back</button></Link>

                    <h1>All Posts</h1>

                    <button onClick={() => {
                        auth.signOut()
                    }} type="button" class="btn btn-danger">Logout</button>

                    <ul>
                        {
                            posts.map((el) => {
                                console.log("data");
                                if (el.data.uid === props.user.uid) {
                                    return (
                                        <ul id="data">
                                            <li key={el.id}>{el.data.Body}</li>
                                            <li key={el.id}>{el.data.Title}</li>
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


