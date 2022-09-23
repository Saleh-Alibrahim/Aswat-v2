import React from 'react';

const About = () => {
  return (
    <div id='about' className='basic-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2>فريق العمل</h2>
            <p className='p-heading p-large'>تم إنشاء هذا الموقع من قبل</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='team-member'>
              <div className='image-wrapper'>
                <img className='img-fluid' src='images/team-member-2.svg' alt='alternative' />
              </div>
              <p className='p-large'>
                <strong>صالح البراهيم</strong>
              </p>
              <p className='job-title'>Software Developer</p>
              <span className='social-icons'>
                <span className='fa-stack'>
                  <a href='https://github.com/Saleh-Albrahim' target='_blank'>
                    <i className='fas fa-circle fa-stack-2x github'></i>
                    <i className='fab fa-github fa-stack-1x'></i>
                  </a>
                </span>
                <span className='fa-stack'>
                  <a href='https://www.linkedin.com/in/saleh--alibrahim' target='_blank'>
                    <i className='fas fa-circle fa-stack-2x linkedin'></i>
                    <i className='fab fa-linkedin fa-stack-1x'></i>
                  </a>
                </span>
                <span className='fa-stack'>
                  <a href='https://twitter.com/aswat_Live' target='_blank'>
                    <i className='fas fa-circle fa-stack-2x twitter'></i>
                    <i className='fab fa-twitter fa-stack-1x'></i>
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
