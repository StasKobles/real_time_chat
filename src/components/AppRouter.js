import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import Chat from "./Chat";
import Login from "./Login";

const AppRouter = () => {
  const user = false;
  return (
    <Routes>
      {user ? (
        <>
          <Route path={CHAT_ROUTE} element={<Chat />} />
          <Route path="*" element={<Navigate to={CHAT_ROUTE} />} />
        </>
      ) : (
        <>
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
