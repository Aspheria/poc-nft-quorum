import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Web3 from "web3";

const NftComponent = () => {
  const nft = useSelector((state) => state.allNft.nft);
  const renderList = nft.map((nft, key) => {
    const { tokenId, name, image, price, owner, isForSale} = nft;

    return (
      <div className="four wide column" key={key}>
        <Link to={`/nft/${tokenId}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="content">
                <div className="header">{name}</div>
                {isForSale && 
                  <div className="meta price">
                    ETH {Web3.utils.fromWei(String(price), "ether")}
                  </div>
                }
                <div className="meta">
                  Owner: {owner.slice(0, 7)}...{owner.slice(-4)}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default NftComponent;
