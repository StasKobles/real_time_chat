import React from "react";
import { createBrowserRouter, Link } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";

const user = false;
const router = user
  ? createBrowserRouter([
      {
        path: "chat",
        element: Chat,
      },
    ])
  : createBrowserRouter([
      {
        path: "login",
        element: Login,
      },
    ]);

export default router;
