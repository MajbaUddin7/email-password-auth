import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import app from '../Firebase/firebase.init';

const auth = getAuth(app);

const LoginBootstrap = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const handleLogin = event => {
        event.preventDefault();
        setSuccess(false);

        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
            })
            .catch(error => {
                console.error('error', error)
            })

    }

    const handleEmailBlur = event => {
        const email = event.target.email.value;
        setUserEmail(email);
        console.log(email);
    }

    const handleForgetPassword = () => {
        if (!userEmail) {
            alert('Please enter your email address');
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password Reset email sent. Please check your email.')
            })
            .catch(error => {
                console.error(error);
            })

    }


    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please Login!!</h3>
            <Form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="formGroupExampleInput2" placeholder="Enter Your Password" required />
                </div>
                <button className="btn btn-primary" type="submit">Login</button>

            </Form>
            {success && <p>Successfully login to the account.</p>}
            <p><small>New to this website? Please<Link to='/register'>Register</Link></small></p>
            <p><small>Forget password??  <button type="button" onClick={handleForgetPassword} class="btn btn-link">Reset Password</button></small></p>
        </div >
    );
};

export default LoginBootstrap;