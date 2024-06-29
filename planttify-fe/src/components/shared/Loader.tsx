import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <CircularProgress sx={{ color: "#FF9037" }} />
      <p>Please Wait while data loading...</p>
    </div>
  );
};

export default Loader;
