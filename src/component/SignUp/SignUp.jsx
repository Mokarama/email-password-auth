import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const SignUp = () => {
    const [errorMessage, setErrorMessage] =useState('');
    const [success, setSuccess] =useState(false);
    const [showPassword, setshowPassword] =useState(false);
    const handleFormSubmit=(event)=>{
        console.log("Log In Form Submit");
        event.preventDefault();
        const email =event.target.email.value;
        const password =event.target.password.value;
        const terms =event.target.terms.checked;
        console.log(terms);

        
        //reset error and status
          setErrorMessage('');
        //console.log(typeof password);
        console.log(typeof password);
      
        if (!terms) {
          setErrorMessage('please except your terms and conditions')
          return;
        }

        if(password.length <6){
          setErrorMessage('Password should be 6 charecter');
          return setErrorMessage;
        }

        const passwordRegEx =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
        if(!passwordRegEx.test(password)){
          setErrorMessage('At last on uppercase, one lowercase');
          return;
        }
        console.log(email,password);
        createUserWithEmailAndPassword(auth,email, password)
        .then((result)=>{
            console.log(result.user);
            setSuccess(true);
        })
        .catch((error)=>{
            console.log("ERROR",error.message);
            setErrorMessage(error.message);
        })
    }
    return (
    <div>
    <form onSubmit={handleFormSubmit}>
    <div className="hero bg-base-200 min-h-screen">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <div className="card-body">
     <fieldset className="fieldset">
       <label className="fieldset-label">Email</label>
       <input name="email" type="email" className="input" placeholder="Email" />
       <label className="fieldset-label">Password</label>
       <input name="password"
       type={showPassword ? 'text' : 'password'}
       className="input" 
       placeholder="Password" required/>
       <button onClick={() => setshowPassword(!showPassword)} className="btn btn-xs absolute right-11 top-32">

       {showPassword ?<FaEyeSlash></FaEyeSlash> : <FaEye></FaEye> }
       </button>

       <div><a className="link link-hover">Forgot password?</a></div>

            <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
            <legend className="fieldset-legend">Login options</legend>
            <label className="fieldset-label">
              <input type="checkbox" name="terms" defaultChecked className="checkbox" />
              Remember me
            </label>
          </fieldset>
       <button 
       
       className="btn btn-neutral mt-4">Sign Up</button>
      </fieldset>
     </div>
    </div>
   </div>
  </form>
  {
    errorMessage && <p>{errorMessage}</p>
  }

  {
    success && <p className="text-green-700">Sign up in Successfull</p>
  }
  </div>
    );
};

export default SignUp;