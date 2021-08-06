import { auth } from "./Firebase"

import "./AllPost.css";
import { useState, useEffect } from "react";
import firestore from "./Firebase"

let AllPosts = (props) => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        let f = async () => {
            let querySnapshot = await firestore.collection("posts").get();

            let tempArr = [];

            querySnapshot.forEach((doc) => {
                tempArr.push({
                    id: doc.id,
                    data: doc.data(),
                });
            });
            setPosts(tempArr);
            console.log(posts);

        };

        f();

    }, []);

    return (
        <>
            <h1>All Posts</h1>

            <button onClick={() => {
                auth.signOut()
            }}>Logout</button>

            <ul>
                {
                    posts.map((el) => {
                        if (el.data.uid === props.user.uid) {
                            return (
                                <ul id="data">
                                    <li key={el.id}>{el.data.Title}</li>
                                    <li key={el.id}>{el.data.body}</li>
                                </ul>
                            );
                        };
                        return (<ul></ul>);
                    })
                }
            </ul>
        </>
    );
}

export default AllPosts;
