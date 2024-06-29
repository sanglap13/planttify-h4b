import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useAuth } from "../../../context/authContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
      const response = await axios.post(
        "https://hack4bengal-427818.df.r.appspot.com/api/v1/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          withCredentials: true,
        }
      );

      setMessage(response.data.message);
      setError(null);
      // Extract accessToken from the response
      const accessToken = response.data.data.data.accessToken;
      login(accessToken);
      navigate("/"); // Redirect to home page
    } catch (error: any) {
      console.error("Error:", error.response);
      setMessage(null);
      setError(error.response?.data?.message || "Login failed");
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  const handleAdminLoginRedirect = () => {
    window.location.href = "http://localhost:5173/login";
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-8">
        <CardContent>
          <Typography variant="h5" className="text-center mb-8">
            Login
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="w-full"
            >
              Login
            </Button>
            {error && (
              <Typography
                variant="body2"
                color="error"
                className="text-center mt-2"
              >
                {error}
              </Typography>
            )}
            {message && (
              <Typography
                variant="body2"
                color="primary"
                className="text-center mt-2"
              >
                {message}
              </Typography>
            )}
            <Typography
              variant="body2"
              className="text-center mt-2 cursor-pointer"
              onClick={handleRegisterRedirect}
              style={{ color: "#4caf50" }} // Primary color
            >
              Register New User
            </Typography>
            <Typography
              variant="body2"
              className="text-center mt-2 cursor-pointer"
              onClick={handleAdminLoginRedirect}
              style={{ color: "#4caf50" }} // Primary color
            >
              Admin Login
            </Typography>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
