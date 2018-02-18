import React from 'react';

const Login = () => {
  return (
    <button className="login-button">
      <div className="login-icon">
        <svg
          viewBox="0 0 14 18"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          className="login-icon-svg"
        >
          <title>Account</title>
          <defs>
            <path d="M0 0h9.333v9.6H0V0z" />
          </defs>
          <g>
            <path d="M13.992 16.56c-.017-.07-.033-.142-.052-.21-.81-2.984-3.409-5.347-6.527-5.53-.136-.007-.274-.02-.413-.02-.14 0-.275.013-.413.02C3.47 11.003.872 13.366.06 16.35c-.02.068-.034.14-.052.21-.094.584.637 1.44 1.4 1.44h11.185c.762 0 1.493-.854 1.4-1.44" />
            <g transform="translate(2.333)">
              <path d="M4.667 9.6C2.09 9.6 0 7.45 0 4.8S2.09 0 4.667 0s4.6 2.133 4.666 4.8c0 2.65-2.09 4.8-4.666 4.8" />
            </g>
          </g>
        </svg>
      </div>
    </button>
  );
};

export default Login;
