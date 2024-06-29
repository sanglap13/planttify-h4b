import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { api } from "../../../utils/api";
import { useAuth } from "../../../context/authContext/AuthContext";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.auth.userLogin({ email, password });
      const token = response.data.token; // Assuming your API response structure
      login(token);
      // Redirect or handle success as needed
    } catch (error) {
      console.error("Login error:", error);
      setError("Failed to login. Please check your credentials.");
    }
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
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
