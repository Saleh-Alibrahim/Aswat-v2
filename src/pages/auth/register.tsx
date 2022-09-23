import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className='body-background'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-9 col-lg-12 col-xl-10'>
            <div className='card shadow-lg o-hidden border-0 my-5'>
              <div className='card-body p-0'>
                <div className='row'>
                  <div className='col-lg-6 d-none d-lg-flex'>
                    <div className='text-center flex-grow-1 bg-register-image' />
                  </div>
                  <div className='col-lg-6'>
                    <div className='p-5'>
                      <div className='text-center'>
                        <h3 className='text-dark mb-4' data-bs-hover-animate='tada'>
                          إنشاء حساب
                          <br />
                        </h3>
                      </div>
                      <form onSubmit={handleSubmit} id='login-form' className='user'>
                        <div className='form-group'>
                          <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='form-control form-control-user'
                            type='username'
                            id='username'
                            placeholder='إسم المستخدم'
                            name='username'
                          />
                        </div>
                        <div className='form-group'>
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='form-control form-control-user'
                            type='email'
                            id='email'
                            placeholder='الإيميل'
                            name='email'
                          />
                        </div>
                        <div className='form-group'>
                          <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='form-control form-control-user'
                            type='password'
                            id='password'
                            placeholder='كلمة المرور'
                            name='password'
                          />
                        </div>
                        <div className='form-group'>
                          <input
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            className='form-control form-control-user'
                            type='password'
                            id='password2'
                            placeholder='إعادة كلمة المرور'
                            name='password2'
                          />
                        </div>

                        <button className='btn btn-primary btn-block text-white btn-user' id='login-btn' type='submit'>
                          إنشاء حساب
                        </button>

                        <hr className='rem-hr' />
                      </form>
                      <div className='text-center'></div>
                      <div className='text-center'>
                        <a href='/auth/register' className='small redirect-password'>
                          عندك حساب ؟ تفضل من هنا
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
