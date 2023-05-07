import React from "react";

const HeaderAndFooterComponent = ({ children }) => {
  return (
    <div className="header-and-footer">
      <div className="header">Header</div>
      <div className="content-body">{children}</div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default HeaderAndFooterComponent;
