import {
  Button,
  Card,
  CardContent,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../../context/authContext/AuthContext";

const Register: React.FC = () => {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState<"male" | "female" | "other">("male");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
      const response = await axios.post(
        "https://hack4bengal-427818.df.r.appspot.com/api/v1/auth/register",
        {
          name,
          email,
          password,
          gender: gender.toUpperCase(),
          phone,
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
    } catch (error: any) {
      console.error("Error:", error.response);
      setMessage(null);
      setError(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-8">
        <CardContent>
          <Typography variant="h5" className="text-center mb-8">
            Register
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
            <TextField
              label="Email"
              type="email"
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
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={gender}
              onChange={(e) =>
                setGender(e.target.value as "male" | "female" | "other")
              }
              className="space-y-2"
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
            <TextField
              label="Phone"
              type="tel"
              variant="outlined"
              fullWidth
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="w-full"
            >
              Register
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
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
