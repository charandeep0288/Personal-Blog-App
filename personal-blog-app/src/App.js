import { useState } from "react";
import Login from "./Login";
import Post from "./Post";
import AllPosts from "./AllPosts";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { firestore } from "./Firebase";

function App() {




  let [user, setUser] = useState(null);

  // useEffect(() => {
  //   let f = async () => {
  //     let querySnapshot = await firestore
  //     .collection("posts")
  //     .limit(5)
  //     .orderBy("index", "asc")
  //     .get();

  //     querySnapshot.forEach( (doc) => console.log(doc.data()));
  //   }
  //   f();
  // }, []);

  return (
    // <div> {user ? <Post user={user} /> : <Login handleUser={setUser} />}
    // </div>

    <>
      <Router>
        <Switch>

          <Route path="/login">
            <Login handleUser={setUser} user={user} />
          </Route>

          <Route path="/post">
            <Post user={user} />
          </Route>

          <Route path="/allposts" user={user}>
            <AllPosts />
          </Route>

          <Route path="/">
            <Login handleUser={setUser} user={user} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

