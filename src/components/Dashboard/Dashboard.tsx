import React from "react";
import "./Dashboard.css";
import NFTImage from "../../assets/png/link.png"; // Import the NFT image
import { ConnectKitButton } from "connectkit";

const Dashboard: React.FC = () => {
  function handleMintClick() {
    console.log("Mint button clicked!");
    // Add minting logic here if needed
  }

  function renderCard() {
    return (
      <div className="card">
        <div className="center">
          <img src={NFTImage} alt="NFT" className="nft-image" />
          <button onClick={handleMintClick}>Mint NFT</button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="title">RETRO NFT DAPP using Family</div>
      <ConnectKitButton />
      {renderCard()}
    </div>
  );
};

export default Dashboard;
