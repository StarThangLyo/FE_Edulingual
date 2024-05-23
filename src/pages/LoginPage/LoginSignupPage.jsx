import React, { useState } from 'react';
import './LoginSignupPage.css';
import { LockOutlined, MailOutlined, UserOutlined, GoogleOutlined } from '@ant-design/icons';

export const LoginSignupPage = () => {
  const [action, setAction] = useState('Login');

  return (
    <div className='page-container'>
      <div className='image-container'>
        <img src="/image/logoLogin.png" alt="" />
      </div>
      <div className='form-container' style={{marginRight: '100px'}}>
        <div style={{marginLeft: '80px'}}>
          <div style={{marginRight: '500px'}}>
          <img src="/image/logo.png" style={{width:'50px', marginTop: '20px', background: 'black'}} alt="" />
          </div>
          <p className='welcome-text' style={{textAlign: 'left', margin: 0}}>Chào mừng bạn đến với</p>
          <p className='brand-name' style={{textAlign: 'left', margin: 0}}>Edu Lingual</p>
          <p className='tagline' style={{textAlign: 'left', margin: 0, marginBottom: '50px'}}>Where the best begin your journey</p>
        </div>
        <div className='header'>
          <div className='text'>{action}</div>
        </div>
        <div className='inputs'>
          {action === 'Login' && (
            <>
              <button className='google-login-button'>
                <GoogleOutlined className='google-icon' />
                Login with Google
              </button>
              <div className='or-container' style={{display:'flex', alignItems: 'center'}}>
                <hr className='divider' style={{width:'225px'}} />
                <span className='or-text' style={{fontWeight: 'bold'}}>or</span>
                <hr className='divider' style={{width:'225px'}} />
              </div>
            </>
          )}
          {action === 'Sign Up' && (
            <div className='input'>
              <div className='icon'>
                <UserOutlined />
              </div>
              <input type='name' placeholder='Name' />
            </div>
          )}
          {action !== 'Forgot Password' && (
            <div className='input'>
              <div className='icon'>
                <MailOutlined />
              </div>
              <input type='email' placeholder='Email' />
            </div>
          )}
          {action === 'Login' && (
            <div className='forgot-password' onClick={() => setAction('Forgot Password')}>
              <span>Forgot Password?</span>
            </div>
          )}
          {action !== 'Forgot Password' && (
            <div className='input'>
              <div className='icon'>
                <LockOutlined />
              </div>
              <input type='password' placeholder='Password' />
            </div>
          )}
          {action === 'Forgot Password' && (
            <div className='input'>
              <div className='icon'>
                <MailOutlined />
              </div>
              <input type='email' placeholder='Email' />
            </div>
          )}
        </div>

        {action === 'Login' ? (
          <button className='submit-login'>
            Login
          </button>
        ) : action === 'Sign Up' ? (
          <button className='submit-signup'>
            Sign Up
          </button>
        ) : (
          <button className='submit-forgot-password'>
            Reset Password
          </button>
        )}

        {action === 'Login' ? (
          <div className='submit' onClick={() => setAction('Sign Up')}>
            You have no account? <span>Sign Up</span>
          </div>
        ) : action === 'Sign Up' ? (
          <div className='submit' onClick={() => setAction('Login')}>
            You have account? <span>Login</span>
          </div>
        ) : (
          <div className='submit' onClick={() => setAction('Login')}>
            Back to <span className='underline-text'>Login</span>
          </div>
        )}
      </div>
    </div>
  );
};

// export default LoginSignupPage;
