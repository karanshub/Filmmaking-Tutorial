import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import styles from "./home.module.css";
import Navbar from "../navbar/Navbar";
import Login from "../Login/Login";
function Home(props) {
  const navigate = useNavigate();
  const logout = useCallback(async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  const Login = useCallback(async () => {
   
    navigate("/login");
  }, []);
  const Signup = useCallback(async () => {
   
    navigate("/signup");
  }, []);
  

  return (
    <div className={styles.container}>
    <div className={styles.innerBox}>
    <div className={styles.footer}>
    <div>
      {!props.name && (
        <>
          <div>
            <h1>
                <button onClick={Login} >Login</button>

            </h1>
            <br />
            <h1>
              <button onClick={Signup} >Signup</button>
            </h1>

          </div>

          <br />
          <br />
          <br />
        </>
      )}
      <h2>{props.name ? `Thank you for visiting our website - ${props.name}` : "Login please"}</h2>
      {props.name && <button onClick={logout}>logout</button>}
    </div>
    </div>
</div>
</div>
  );
}


export default Home;
