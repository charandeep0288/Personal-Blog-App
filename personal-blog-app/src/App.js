import { useState, useEffect } from "react";
import Login from "./Login";
import Post from "./Post";
import AllPosts from "./AllPosts";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { firebase, auth } from "./Firebase";

function App() {

  let [user, setUser] = useState(null);

  useEffect(() => {
      // onAuthStateChanged -> 
      auth.onAuthStateChanged((user) => {
        setUser(user);
      });
  }, []);

  return (
    // <div> {user ? <Post user={user} /> : <Login handleUser={setUser} />}
    // </div>

    <>
      <Router>
        <Switch>

          <Route path="/" exact>
            <Login handleUser={setUser} user={user} />
          </Route>

          <Route path="/login" exact>
            <Login handleUser={setUser} user={user} />
          </Route>

          <Route path="/post">
            <Post user={user} />
          </Route>

          <Route path="/allposts">
            <AllPosts user={user} />
          </Route>


        </Switch>
      </Router>
    </>
  );
}

export default App;

