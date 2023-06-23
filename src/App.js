import React, { useState } from "react";
import { ethers } from "ethers";
import PrimarySearchAppBar from "./components/AppBar";
import SendNotification from "./components/SendNotifications";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <SendNotification />
    </div>
  );
}

export default App;
