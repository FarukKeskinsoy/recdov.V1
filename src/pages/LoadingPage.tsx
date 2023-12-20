import { CircularProgress } from "@mui/material";
import React from "react";
import "./auth.scss"

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <CircularProgress className="loading-circle big large" size={256} />
      <CircularProgress className="loading-circle big" size={128} />
      <CircularProgress className="loading-circle small" size={64} />
    </div>
  );
};

export default LoadingPage;