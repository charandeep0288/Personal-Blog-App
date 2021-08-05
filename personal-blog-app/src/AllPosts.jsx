import { auth } from "./Firebase"

let AllPosts = () => {

    return (
        <button onClick={() => {
            auth.signOut()
        } }>Logout</button>
    );
}

export default AllPosts;
