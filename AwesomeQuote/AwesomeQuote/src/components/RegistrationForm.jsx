import { useState } from "react";
import {Link,useNavigate} from "react-router";
import { toast } from "react-toastify";
import { userSignUp } from "../services/users";

const RegistrationForm = () => {
    const [info, setInfo] = useState({
    firstname:"",
    lastname:"",
    email:"",
    passwd:"",
    confirmpasswd:"",
});

const navigate = useNavigate();
const handleInputFieldChange = (e) => 
    setInfo({...info, [e.target.name]: e.target.value});

    const handleSignUpClick = async (e) =>{
        try{

            const user = await userSignUp(
                info.firstname,
                info.lastname,
                info.email,
                info.passwd,
                info.confirmpasswd
            );
            toast.success("User registered with id: " +user.id);
            navigate("/login");
        }catch (err){
            toast.error(err.message);
        }
    };


return(
    <div className="container" style={{border:"3px solid", width:"500px", height:"550px", textAlign:"center",marginTop:"30px"}}>
        <div className="mb-3 text-center">
        <h2>Register</h2>
        </div>
    
    <div className="mb-3">
        <label htmlFor="form-label">First Name</label>
        <input className="form-control"
        name="name"
        type="test"
        onChange={handleInputFieldChange}
        />
    </div>
    <div className="mb-3">
        <label htmlFor="form-label">Last Name</label>
        <input className="form-control"
        name="last name"
        type="text"
        onChange={handleInputFieldChange}
        />
    </div>
    <div className="mb-3">
        <label htmlFor="form-label">Email</label>
        <input className="form-control"
        name="email"
        type="text"
        onChange={handleInputFieldChange}
        />
    </div>
    <div className="mb-3">
        <label htmlFor="form-label">Paasword</label>
        <input className="form-control"
        name="passwd"
        type="password"
        onChange={handleInputFieldChange}
        />
    </div>
    <div className="mb-3">
        <label htmlFor="form-label">Confirm Password</label>
        <input className="form-control"
        name="confirm password"
        type="test"
        onChange={handleInputFieldChange}
        />
    </div>
    <div className="row">
        <button className="mc-3 col btn btn-primary"
        onClick={handleSignUpClick}>
            Sign Up
        </button>
        <Link className="mx-3 col btn btn-secondary" to="/login"> 
        Sign In
        </Link>
    </div>
</div>
);
};
export default RegistrationForm;