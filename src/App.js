import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import PrimarySearchAppBar from "./components/AppBar";
import SendNotification from "./components/SendNotifications";
import process from "process";
import dotenv from "dotenv";

function App() {
  useEffect(() => {
    dotenv.config();
  }, []);

  return (
    <div className="App">
      <PrimarySearchAppBar />
      <SendNotification />
    </div>
  );
}

export default App;
