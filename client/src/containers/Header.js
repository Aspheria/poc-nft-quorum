import React from "react";
import { useSelector } from "react-redux";
import Modall from "../containers/Modal"

const Header = () => {
  const account = useSelector((state) => state.allNft.account);

  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h1>NFT MarketPlace</h1>
      </div>
      <div className="ui padded grid">
        <div className="red row">
          <div className="column">Carteira {account.slice(0,7)}...{account.slice(-4)}</div>
        </div>
      </div>
      <Modall/>
    </div>
  );
};

export default Header;
