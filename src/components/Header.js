import React from "react";

export default function Header({ children, title, styleClass }) {
  return (
    <header>
      <div className="container-fluid">
        <div className={`row align-items ${styleClass}`}>
          <div className="col text-center">
            <h1 className=" display-3 letter-spacing text-slanted margin-t">
              {" "}
              {title}
            </h1>

            {children}
          </div>
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "default title",
  styleClass: "header-hero"
};
