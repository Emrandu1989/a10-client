import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from 'sweetalert2';
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Register = () => {
      const {createUser} = useContext(AuthContext)

      const [showPassword, setShowPassword] = useState(false);
      console.log(showPassword)
      
    const handleRegister = e =>{
          e.preventDefault();
          const form = e.target;
          const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;
          const photoUrl = form.photoUrl.value;
          const user = {name,email,password,photoUrl};
          const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
          if(!passwordValidation.test(password)){
        
            Swal.fire( "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
            return
          }
          console.log(user)
          createUser(email,password)
          .then(result=>{
            console.log(result.user)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500
              });
          })
          .catch(error=>{
            console.error(error)
          })
    }
 
    return (
        <>
              <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
    
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
      <h1 className="text-5xl font-bold">Register Now!</h1>
        <div className="form-control">

          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? "text" : "password" } name="password" placeholder="password" className="input input-bordered" required />
          <p className="text-2xl absolute right-5 bottom-3" onClick={()=>setShowPassword(!showPassword)}> 
            {
                showPassword ?  <FaEyeSlash /> : <FaRegEye /> 
            }
          </p>
       
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input type="text" name="photoUrl" placeholder="PhotoUrl" className="input input-bordered" required />
       
        </div>
        <div className="form-control mt-6">
       
          <input className="btn btn-primary" type="submit" value="Register" />
        </div>
        <p>Already Have an Account Please <Link to='/login' className="btn btn-link">Login</Link> </p>
      </form>
    </div>
  </div>
</div>   
        </>
    );
};

export default Register;