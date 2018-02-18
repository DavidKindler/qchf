import React from 'react';

const MobileMenuIcon = props => {
  const MenuHamburgerIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="MenuHamburgerIcon">
      <path d="M31.938 4.802a2.4 2.4 0 0 1-2.4 2.4H2.462a2.4 2.4 0 0 1 .001-4.8h27.076a2.4 2.4 0 0 1 2.399 2.4zm0 11.198a2.4 2.4 0 0 1-2.4 2.4H2.462a2.4 2.4 0 0 1 .001-4.8h27.076a2.4 2.4 0 0 1 2.399 2.4zm0 11.198a2.4 2.4 0 0 1-2.4 2.4l-27.076-.001a2.4 2.4 0 0 1 .001-4.799h27.076a2.4 2.4 0 0 1 2.399 2.4z" />
    </svg>
  );
  const MenuCloseIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="MenuCloseIcon">
      <path d="M18.438 15.884L31.175 3.149a1.806 1.806 0 0 0 .002-2.554 1.801 1.801 0 0 0-2.554.003L15.886 13.333 3.147.593A1.807 1.807 0 0 0 .592.59a1.803 1.803 0 0 0 .003 2.555l12.739 12.739L.595 28.623a1.797 1.797 0 0 0 0 2.552 1.803 1.803 0 0 0 2.55 0l12.741-12.739 12.736 12.737a1.805 1.805 0 0 0 2.552-2.552L18.438 15.884z" />
    </svg>
  );
  return (
    <div className="mobile-menu-icon">
      <button onClick={props.click}>{props.close ? MenuCloseIcon : MenuHamburgerIcon}</button>
    </div>
  );
};

export default MobileMenuIcon;
