import React, { useContext, useState } from 'react';
import bgImg from '../../Assets/img/signup-bg.jpg';
import google from '../../Assets/Icons/google.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
  const { userSignUp, auth, googleLogin } = useContext(AuthContext);

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    userSignUp(email, password).then(result => {
      const user = result.user;
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
      });
      console.log(user);
    }).then(error => console.error('error', error))
    form.reset()
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(err => console.error(err))
  }
  return (
    <div className='pt-20'>
      <div className="hero h-[95vh] flex" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className='w-1/2'></div>
        <div className="card w-1/3 left-20">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className='text-4xl font-bold text-info'>Please Sign Up</h1>
            <hr></hr>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Your Name</span>
              </label>
              <input name='name' type="text" placeholder="Your name" className="input input-bordered bg-blue-100" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Photo URL</span>
              </label>
              <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered bg-blue-100" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Your Email</span>
              </label>
              <input name='email' type="email" placeholder="Your email" className="input input-bordered bg-blue-100" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Password</span>
              </label>
              <input name='password' type="password" placeholder="Password" className="input input-bordered bg-blue-100" required />
            </div>
            <div className="form-control mt-5">
              <button type='submit' className="btn btn-info font-bold text-white text-lg">Sign Up</button>
            </div>
          </form>
          <button onClick={handleGoogleLogin} className="btn-ghost px-3 py-2 rounded-lg font-bold text-info text-lg flex items-center mx-auto"><img className='h-8' src={google} alt="google" />Sign Up with Google</button>
          <div className="mx-auto flex items-center mt-3">
            <h4 className='font-semibold'>Have an account?</h4>
            <Link to="/login" ><button className="font-bold text-info text-lg ml-2">Log in</button></Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignUp;