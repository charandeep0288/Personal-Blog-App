import { useEffect, useState } from "react";
import Login from "./Login";
import Post from "./Post";
import AllPosts from "./AllPosts";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { firestore } from "./Firebase";

function App() {


  {/* <>
       <Router>
         <Switch>

           <Route to="/login">
             <Login />
           </Route>

           <Route to="/post">
             <Post />
           </Route>

           <Route to="/allposts">
             <AllPosts />
           </Route>
         </Switch>
      </Router>
     </> */}

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
    <div> {user ? <Post user={user} /> : <Login handleUser={setUser} />}
    </div>

  );
}

export default App;

