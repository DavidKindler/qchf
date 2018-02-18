import React from 'react';

const Cart = () => {
  return (
    <a href="#" className="shopping-cart-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" className="shopping-cart-icon">
        <defs>
          <path d="M4.048 4.1H.162V0h3.886z" />
          <path d="M3.94 4.1H.054V0H3.94v4.1z" />
        </defs>
        <g>
          <g transform="translate(4.534 13.9)">
            <path d="M2.59.063C1.153-.313-.136 1.047.22 2.563c.17.72.716 1.296 1.398 1.475 1.436.376 2.724-.983 2.368-2.498C3.818.82 3.27.242 2.588.063" />
          </g>
          <g transform="translate(12.523 13.9)">
            <path d="M2.48.063c-1.434-.376-2.723.984-2.366 2.5.17.72.716 1.296 1.398 1.475 1.436.376 2.724-.983 2.368-2.498C3.71.82 3.164.242 2.48.063" />
          </g>
          <path d="M4.787 11.51c-.07.16-.01.295.02.343.03.05.116.166.285.166h11.77c.36 0 .65.304.65.683 0 .378-.29.683-.65.683H5.093c-.564 0-1.08-.3-1.38-.802-.302-.503-.337-1.126-.093-1.66l.4-.89-1.71-8.512c-.017-.09-.092-.155-.18-.155H.68C.36 1.367.068 1.142.01.81-.063.38.25 0 .65 0h2.16c.293 0 .57.237.632.54l.31 1.53c.025.122.126.208.245.208h14.358c.384.003.71.438.626.834l-1.513 6.836c-.062.298-.336.53-.626.533H5.255c-.003.003-.003.008-.005.01l-.463 1.02z" />
        </g>
      </svg>
    </a>
  );
};

export default Cart;
