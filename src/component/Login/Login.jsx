import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase.init';
import { useState } from 'react';

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        // reset status
        setSuccessMessage('');
        setLoginError('');

        // login user
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log('Login successful:', result.user);
                setSuccessMessage('Login successful!');
                
            })
            .catch(error => {
                console.error('ERROR:', error.message);
                setLoginError(error.message);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" required />
                                <label className="fieldset-label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" required />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                            {
                                successMessage && <p className="text-green-500">login successfully </p>
                            }
                            {
                                loginError && <p className="text-red-500">{loginError}</p>
                            }

                            <p>New to this website please signUp <Link to="/">Sign Up </Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;