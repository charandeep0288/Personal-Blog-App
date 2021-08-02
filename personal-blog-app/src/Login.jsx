import { auth, signInWithGoogle } from "./Firebase";
import { useEffect } from "react";

let Login = (props) => {

    useEffect(() => {
        // if login -> user info
        // if logout -> user = null
        auth.onAuthStateChanged((user) => {
            if (user) {
                let { displayName, email, uid } = user;
                console.log(user);

                props.handleUser({ displayName, email, uid });
            } else {
                props.handleUser(user);
            }
        });
    }, []);

    return (
        <div>
            <button
                onClick={signInWithGoogle}
                type="button"
                class="btn btn-primary">Login With Google</button>
            <h1>Login With Google</h1>
        </div>
    );
}

export default Login;