import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/mainLayout/MainLayout";
import Home from "./components/pages/home/Home";
import User from "./components/pages/user/User";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./components/layout/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
