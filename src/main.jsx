import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./App.css";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About/About.jsx";
import Contact from "./contact/Contact.jsx";
import Users from "./components/Home/users/Users.jsx";
import Myuser from "./components/Home/myuser/Myuser.jsx";
import Post from "./contact/post/Post.jsx";
import PostDetails from "./postDetails/PostDetails.jsx";
// import Usedetails from './Usedetails.jsx'
// import Header from './components/Home/Header.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          `https://jsonplaceholder.typicode.com/users/${params.userId}`,
        element: <Myuser></Myuser>,
      },
      {
        path: "/post",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Post></Post>,
      },
      {
        path: "/post/:postid",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`),
        element: <PostDetails></PostDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
