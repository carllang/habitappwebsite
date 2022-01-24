import React from "react";
import { Link, Links, LiveReload, Outlet, LinksFunction } from "remix";
import type { MetaFunction } from "remix";
import tailwindStyles from "./styles/tailwind.css";

export function links() {
  return [
    { rel: "stylesheet", href: tailwindStyles },
    {
      rel: "preload",
      href: "/images/banner.jpg",
      as: "image",
    },
  ];
}

export const meta: MetaFunction = () => {
  return { title: "Habit app" };
};

export default function App() {
  return (
    <Document title="Habit app">
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

// Put the html skeleton in a component to make it easier to wrap every route
export const Document: React.FunctionComponent<{ title: string }> = ({
  children,
  title,
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        {title ? <title>{title}</title> : null}
        <Links />
      </head>
      <body className="bg-gradient-to-r from-indigo-800 bg-sky-800">
        {children}

        {/*Enable live reload in development environment only, not production */}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
};

// A standard layout that will be the same for each route
export const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <nav className="">
        <ul className="flex justify-between w-2/4 mx-auto my-8 text-white">
          <li>
            <Link to="/">Habit App</Link>
          </li>
          <li>
            <Link to="/posts">Blog</Link>
          </li>
          <li>
            <Link to="/posts">Pricing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export const ErrorBoundary: React.FunctionComponent<{ error: any }> = ({
  error,
}) => {
  console.log(error);
  return (
    <Document title="Error">
      <Layout>
        <h1>There was an Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  );
};
