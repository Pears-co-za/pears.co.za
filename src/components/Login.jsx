// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";
// import { toast } from "react-toastify";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            //console.log(fname);
            await signInWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if (user) {
                console.log(user);
                //await getDoc(doc(db, "Users", user.uid));
            }
            console.log('Userlogged in!');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h3>Login</h3>

            <div className="mb-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </div>
            <p className="forgot-password text-right">
                Need a account? <a href="/register">Register</a>
            </p>
        </form>
    );
}
export default Login;