import React, { useContext, useState } from 'react';
import bgImg from '../../Assets/img/bg-img.jpg';
import google from '../../Assets/Icons/google.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
  const { userLogin, setLoading, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then(() => { navigate('/') })
      .catch(err => {
        if (err.message === 'Firebase: Error (auth/wrong-password).') {
          setError('😠 wrong password !!');
        }
        else if (err.message === 'Firebase: Error (auth/user-not-found).') {
          setError('🙄 User Not Found. Please Sign Up.')
        }
        else {
          setError(err.message)
        }
        console.error(err);
      })
      .finally(() => setLoading(false))
  }
  const handleGoogleLogin = () => {
    googleLogin().then(() => { navigate('/') }).catch(err => console.error(err))
  }
  return (
    <div>
      <div className="hero h-[100vh] flex" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="card w-1/3 left-20">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className='text-4xl font-bold text-info'>Please Login</h1>
            <div className="divider"></div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Your Email</span>
              </label>
              <input name='email' type="email" placeholder="Your email" className="input input-bordered bg-blue-100" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Password <span className='text-sm text-red-600'>{error}</span></span>
              </label>
              <input name='password' type="password" placeholder="Password" className="input input-bordered bg-blue-100" />
            </div>
            <div className="my-2 flex items-center">
              <h4 className='font-semibold'>Forget password?</h4>
              <button className="font-bold text-info text-lg ml-2">Reset</button>
            </div>
            <div className="form-control">
              <button type='submit' className="btn btn-info font-bold text-white text-lg">Log in</button>
            </div>
          </form>
          <div className="divider px-8">Login with social accounts</div>
          <button onClick={handleGoogleLogin} className="btn-ghost px-3 py-2 rounded-lg mx-auto"><img className='h-8' src={google} alt="google" /></button>
          <div className="mx-auto flex items-center mt-3">
            <h4 className='font-semibold'>Don't have an account?</h4>
            <Link to="/signup" ><button className="font-bold text-info text-lg ml-2">Sign up</button></Link>
          </div>
        </div>
        <div className='w-1/2'></div>
      </div>
    </div>
  );
};

export default Login;