import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/mainLayout/MainLayout";
import Home from "./components/pages/home/Home";
import User from "./components/pages/user/User";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./components/layout/theme";
import Group from "./components/pages/group/Group";
import Login from "./components/pages/login/Login";
import { AuthProvider } from "./context/authContext/AuthContext";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="*"
              element={
                <MainLayout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/group" element={<Group />} />
                    <Route path="*" element={<div>Not Found</div>} />
                  </Routes>
                </MainLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
