import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";


const Register = () => {
    const handleRegister =(event)=>{
        event.preventDefault();
        console.log('Register me please');
        const email =event.target.email.value;
        const password =event.target.password.value;
        console.log(email,password);
        //create a user with email and password
        createUserWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            console.log(result)
        })
        .catch((error)=>{
            console.log('ERROR:',error)
        })
    }
    return (
        <div className="max-w-5xl  border-2 mx-auto">
            <h2 className="text-4xl my-8">Register</h2>
            <div className=" gap-3 text-center">
            <form onSubmit={handleRegister}>
                 
                    <label className="input validator my-3">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                    <input type="email" name="email" placeholder="mail@site.com" required/>
                    </label>
                    <div className="validator-hint hidden">Enter valid email address</div>
            <br/>
            <label>
                <input className="border-1  w-[330px] py-2 pl-2" type="password" placeholder="Password" name="password"  required/>
            </label>
                <br/>
                <button className="btn btn-accent my-3 w-[350px]">Accent</button>
            </form>
            </div>
        </div>
    );
};

export default Register;