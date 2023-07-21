import { Link } from "gatsby";
import React from "react";

interface ILayProps {
  children: any;
  title: string;
}

export default function Layout({ children, title }: ILayProps) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Go home</Link>
          </li>
          <li>
            <Link to="/about-us">About-Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </>
  );
}
