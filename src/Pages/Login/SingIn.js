import React from "react";
import Login from "./index";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from "../../functions/firebaseAuth";
import { useHistory } from "react-router-dom";

function SignIn() {
  const history = useHistory();
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <section>
    
        {user ? (history.push("/home")) : (<Login signInWithGoogle={signInWithGoogle} />)}
      </section>
    </div>
  );
}

export default SignIn;
