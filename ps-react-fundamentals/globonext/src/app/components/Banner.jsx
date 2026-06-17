import React, { Children } from "react";
import logo from "../../assets/GloboLogo.png";
import { logo as logoClass } from "./Banner.module.css";
import Image from "next/image";
import Link from "next/link";

const subtitleStyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "coral",
};

export const Banner = ({ children }) => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <Link href="/">
          <Image className={logoClass} src={logo} alt="Globonext" />
        </Link>
      </div>
      <div className="col-7" style={subtitleStyle}>
        {children}
      </div>
    </header>
  );
};
