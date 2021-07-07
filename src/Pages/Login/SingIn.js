import React from "react";
import Login from "../../Pages/Login/index";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from '../../Images/Header';
import Home from "../../Pages/Home/home";
import { auth, signInWithGoogle } from "../../functions/firebaseAuth";
import { useHistory } from "react-router-dom";
//import { environment} from '../../environment/backendurl'

function SignIn() {
  const history = useHistory();
  const [user] = useAuthState(auth);

 /* const createUser = () => {
    const HOST_API = environment.apiRegisterUser;

    const user = {
      id: auth.currentUser.uid,
      name: auth.currentUser.displayName,
      email: auth.currentUser.email,
    };

    fetch(HOST_API, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => console.log("hola"));
  };

  if (user) {    
    createUser();
  }*/
  return (
    <div className="App">
      <section>
    
        {user ? (history.push("/home")) : (<Login signInWithGoogle={signInWithGoogle} />)}
      </section>
    </div>
  );
}

export default SignIn;
