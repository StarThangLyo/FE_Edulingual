import React, { useState } from 'react';
import styles from './LoginSignupPage.module.css';
import { LockOutlined, MailOutlined, UserOutlined, GoogleOutlined } from '@ant-design/icons';

export const LoginSignupPage = () => {
  const [action, setAction] = useState('Đăng nhập');

  return (
    <div className={styles['page-container']}>
      <div className={styles['image-container']}>
        <img src="/image/logoLogin.png" alt="" />
      </div>
      <div className={styles['form-container']}>
        <div style={{ marginLeft: '80px' }}>
          <div style={{ marginRight: '500px' }}>
            <img src="/image/logo.png" style={{ width: '50px', marginTop: '20px', background: 'black' }} alt="" />
          </div>
          <p className={styles['welcome-text']}>Chào mừng bạn đến với</p>
          <p className={styles['brand-name']}>Edu Lingual</p>
          <p className={styles['tagline']}>Where the best begin your journey</p>
        </div>
        <div className={styles['header']}>
          <div className={styles['text']}>{action}</div>
        </div>
        <div className={styles['inputs']}>
          {action === 'Đăng nhập' && (
            <>
              <button className={styles['google-login-button']}>
                <GoogleOutlined className={styles['google-icon']} />
                Đăng nhập với Google
              </button>
              <div className={styles['or-container']}>
                <hr className={styles['divider']} />
                <span className={styles['or-text']}>or</span>
                <hr className={styles['divider']} />
              </div>
            </>
          )}
          {action === 'Đăng kí' && (
            <div className={styles['input']}>
              <div className={styles['icon']}>
                <UserOutlined />
              </div>
              <input type='name' placeholder='Name' />
            </div>
          )}
          {action !== 'Quên mật khẩu' && (
            <div className={styles['input']}>
              <div className={styles['icon']}>
                <MailOutlined />
              </div>
              <input type='email' placeholder='Email' />
            </div>
          )}
          {action === 'Đăng nhập' && (
            <div className={styles['forgot-password']} onClick={() => setAction('Quên mật khẩu')}>
              <span>Quên mật khẩu?</span>
            </div>
          )}
          {action !== 'Quên mật khẩu' && (
            <div className={styles['input']}>
              <div className={styles['icon']}>
                <LockOutlined />
              </div>
              <input type='password' placeholder='Mật khẩu' />
            </div>
          )}
          {action === 'Quên mật khẩu' && (
            <div className={styles['input']}>
              <div className={styles['icon']}>
                <MailOutlined />
              </div>
              <input type='email' placeholder='Email' />
            </div>
          )}
        </div>

        {action === 'Đăng nhập' ? (
          <button className={styles['submit-login']}>
            Đăng nhập
          </button>
        ) : action === 'Đăng kí' ? (
          <button className={styles['submit-signup']}>
            Đăng kí
          </button>
        ) : (
          <button className={styles['submit-forgot-password']}>
            Đặt lại mật khẩu
          </button>
        )}

        {action === 'Đăng nhập' ? (
          <div className={styles['submit']} onClick={() => setAction('Đăng kí')}>
            Chưa có tài khoản? <span>Đăng kí</span>
          </div>
        ) : action === 'Đăng kí' ? (
          <div className={styles['submit']} onClick={() => setAction('Đăng nhập')}>
            Đã có tài khoản <span>Đăng nhập</span>
          </div>
        ) : (
          <div className={styles['submit']} onClick={() => setAction('Đăng nhập')}>
            Trở về <span className={styles['underline-text']}>Đăng nhập</span>
          </div>
        )}
      </div>
    </div>
  );
};

