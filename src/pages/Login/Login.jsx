import { useLottie } from "lottie-react";
import loitte from '../../../public/Animation - 1714122537617.json'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from 'sweetalert2'

const Login = () => {
    const options = {
        animationData: loitte,
        loop: true
      };
      const { View } = useLottie(options);
     
      const {signIn,googleLogin,gitHubLogin} = useContext(AuthContext);
       const navigate = useNavigate();
       const location = useLocation()
      const handleLogin = e =>{
         e.preventDefault();
         const form = e.target;
         const email = form.email.value;
         const password = form.password.value;
         const user ={email,password}
         console.log(user);
         signIn(email,password)
         .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Login successfully",
                showConfirmButton: false,
                timer: 1500
              });
              setTimeout(()=>{
                  navigate(location?.state ? location.state : '/')
              }, 1000)
         })
         .catch(error=>{
            console.error(error)
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: error,
              showConfirmButton: false,
              timer: 1500
            });
         })


      }
           
      const handleGoogleLogin=() =>{
           googleLogin()
           .then(result=>{
              console.log(result.user)
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Google Login successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(location?.state ? location.state : '/')
           })
           .catch(error=>{
            console.error(error)
           })
      }

      const handleGitHubLogin = () =>{
        gitHubLogin()
        .then(result=>{
            console.log(result)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "GitHub Login successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
             console.error(error)
             Swal.fire({
              position: "top-end",
              icon: "success",
              title: error,
              showConfirmButton: false,
              timer: 1500
            });
        })
      }
      
    return (
        <>
              <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:w-1/2 lg:mr-12  lg:text-left">
      
            {View}
    </div>
    <div className="card shrink-0 w-full lg:max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="lg:text-5xl text-3xl text-center font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
       
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="text-sm -ml-1">New to this site please <Link to='/register' className="btn btn-link">Register</Link> </p>
     
      </form>
      <div className="space-x-12 text-center -mt-5 mb-5">
              <button onClick={handleGoogleLogin} className="btn btn-outline">Google</button>
              <button onClick={handleGitHubLogin} className="btn btn-outline">GitHub</button>
        </div>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;