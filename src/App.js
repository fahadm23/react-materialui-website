import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import "./App.css";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
