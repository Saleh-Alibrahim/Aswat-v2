import React from 'react';

const Login = () => {
  return (
    <div className='body-background'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-9 col-lg-12 col-xl-10'>
            <div className='card shadow-lg o-hidden border-0 my-5'>
              <div className='card-body p-0'>
                <div className='row'>
                  <div className='col-lg-6 d-none d-lg-flex'>
                    <div
                      className='text-center flex-grow-1 bg-register-image'
                      style={{
                        height: '100%',
                        width: '100%',
                        minWidth: 'auto',
                        background: 'url(/images/testimonials-2-men-talking.svg) center / auto no-repeat',
                      }}
                    />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='p-5'>
                    <div className='text-center'>
                      <h3 className='text-dark mb-4' data-bs-hover-animate='tada'>
                        مرحبا بعودتك
                        <br />
                      </h3>
                    </div>
                    <form id='login-form' className='user'>
                      <div className='form-group'>
                        <input
                          className='form-control form-control-user'
                          type='email'
                          id='email'
                          aria-describedby='emailHelp'
                          placeholder='الإيميل'
                          name='email'
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          className='form-control form-control-user'
                          type='password'
                          id='password'
                          placeholder='كلمة المرور'
                          name='password'
                        />
                      </div>
                      <div className='form-group'>
                        <div className='text-right text-sm-right text-md-right text-lg-right text-xl-right custom-control custom-checkbox small'>
                          <div className='form-check'>
                            <input className='form-check-input custom-control-input' type='checkbox' id='formCheck' />
                            <label className='form-check-label custom-control-label' id='remeber-me' htmlFor='formCheck'>
                              تذكرني
                            </label>
                          </div>
                        </div>
                      </div>
                      <button className='btn btn-primary btn-block text-white btn-user' id='login-btn' type='submit'>
                        تسجيل الدخول
                      </button>

                      <hr className='rem-hr' />
                    </form>
                    <div className='text-center'>
                      <a className='small redirect-password' href='/auth/forgotpassword'>
                        نسيت كلمة المرور ؟
                      </a>
                    </div>
                    <div className='text-center'>
                      <a href='/auth/register' className='small redirect-password'>
                        ما عندك حساب ؟ تفضل من هنا
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
  );
};

export default Login;
