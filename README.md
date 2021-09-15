# poc-nft-quorum


# Summary

- [About](#about)
- [Preview](#preview)
- [Architecture and Client-side Flow](#architecture)
- [Built with](#technologies)
- [How to Use](#how-to-use)
- [License](#license)

<a id='about'/>

## :information_source: About

The NFT Marketplace is a platform that enables the creation, sale, and purchase of digital art NFTs.


<a id='preview'/>

## :framed_picture: Preview


<a id='architecture' />

## :information_source: Architecture and Client-side Flow

<p align="center">
  <img alt="Client-Flow"src="https://res.cloudinary.com/nataliebravo/image/upload/v1626701427/NFT/client-side-flow_iqhq9a.png">
<p />

<p align="center">
  <img alt="Architecture"src="https://res.cloudinary.com/nataliebravo/image/upload/v1626701440/NFT/arquitechure_hunzuw.png">
<p />


<a id='technologies'/>

## :gear: Built With

This project was developed with the following technologies:

#### **Frontend** <sub><sup>React + JavaScript</sup></sub>
  - [React](https://pt-br.reactjs.org/)
  - [Axios](https://github.com/axios/axios)
  - [Redux](https://redux.js.org/)
  - [Web3.js](https://web3js.readthedocs.io/en/v1.3.4/)
  - [Semantic UI React](https://react.semantic-ui.com/)

#### **Backend** <sub><sup>Express</sup></sub>
  - [Express](https://expressjs.com/pt-br/)
 
#### **Blockchain and Smart Contracts** <sub><sup>Solidity</sup></sub>
  - [Solidity](https://docs.soliditylang.org/)
  - [Truffle](https://www.trufflesuite.com/)
  - [Ganache](https://www.trufflesuite.com/ganache)


<a id='how-to-use'/>

## :joystick: How to Use

### Requirements

To run the application you'll need:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
* [Truffle](https://www.trufflesuite.com/)
* [Ganache](https://www.trufflesuite.com/ganache)
* Clone the repository:
  * ```$ git@github.com:Aspheria/poc-nft-quorum.git ```


Now go to project folder and run:


```bash
$ cd nft-quorum-poc

# install the dependencies
$ yarn

# deploy de contracts on the blockchain
$ truffle migrate

# run the client-side
$ cd client
$ yarn
$ yarn start

# run the backend
$ cd backend
$ yarn
$ yarn start
```



## Authors

  Made by <b>Lorrane Pärrilla</b> and <b>Natalie Bravo</b>.
