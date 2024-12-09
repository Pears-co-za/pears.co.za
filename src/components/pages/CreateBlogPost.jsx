// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";
// import { toast } from "react-toastify";

function createBlogPost() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCreatepost = async (e) => {
        e.preventDefault();
        try {
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
        <form onSubmit={handleCreatepost}>
            <h3>Create Blog Post</h3>

            <div className="mb-3">
                <label>Title</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label>Post</label>
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
                    Create post
                </button>
            </div>
        </form>
    );
}
export default Login;