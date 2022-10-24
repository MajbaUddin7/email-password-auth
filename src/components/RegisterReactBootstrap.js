import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../Firebase/firebase.init';


const auth = getAuth(app);


const RegisterReactBootstrap = () => {

    const [passwordError, setpasswordError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setpasswordError('Please provide at least two uppercase');
            return;

        }
        if (password.length < 6) {
            setpasswordError('Please provide at least six charecter');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setpasswordError('Please add at least one special character');
            return;
        }
        setpasswordError('');

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
                verifyEmail();
            })
            .catch(error => {
                console.log('error', error);
                setpasswordError(error.message);
            })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('Please Check your email and Verify your email address.');
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Register!!!</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{passwordError}</p>
                {success && <p className='text-success'>User Created Successfully</p>}
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p><small>Allready have an account?Please<Link to='/login'>Login</Link></small></p>
        </div>
    );
};

export default RegisterReactBootstrap;