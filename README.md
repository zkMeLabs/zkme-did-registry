# zkMe DID Registry Contract

This library is an implementation of a registry contract that supports the zkMe DID Method.

## Overview

The zkMe registry contract serves as a public ledger for logging zkMe-Identity specified Decentralised Identifiers. The document outlines the specifications related to the zkMe DID method. This contract library can be used to store and manage a DID generated using the zkMe DID generator on the ledger.

## Contract Deployment

|      Network      | ChainId |              Registry Address              |
| :---------------: | :-----: | :----------------------------------------: |
| zetachain Testnet |  7001   | 0x29d4D59277984C2bd03E1BacB19A6C9fe4FC96Af |

## Methods

- `createDID(address, string)` : The method createDID is used to create and log a new DID on the zetachain. The parameter of address type, will act as the reference key, to refer the did document stored on the chain. The string type variable will contain the did document, that will be stored on the matic chain.

- `updateDIDDoc(address, string)` : The method updateDID is included in contract, which will facilitate the controller, and only the controller of the did, to update the document if need arises. Though the zkMe DID method, defines how the DID doc is defined as per standards, and that can be resolved.

- `deleteDIDDoc(address)` : The method deleteDID is included in the contract, that only the controller of DID can access, to delete a particular DID from ledger.

- `getDIDDoc(address)` : The method getDID helps to resolve the DID document.

- `transferOwnership(address)` : The method transferOwnership, helps in transferring the ownership of contract to a new owner. Only the current owner can access this function.

- `getOwner()` : the method getOwner helps one to fetch the current owner of the contract.

- `getTotalNumberOfDIDs()` : the method getTotalNumberOfDIDs helps one to fetch the total number of DIDs ever written on zkMe Ledger, with the number of currently active DIDs.

- `getTotalNumberOfDeletedDIDs()`: the method getTotalNumberOfDeletedDIDs helps one fetch the total number of DIDs deleted from zkMe Ledger.

- `getDIDDOcByIndex(uint256)` : The method getDIDDOcByIndex helps,to resolve DID document by index.

## Example ethers code

Using ethers, the following illustrates how one can interact with zkMeDidRegistry contract, from client side application.

## Loading the Contract

```
const ethers = require('ethers');
const url = https://api.athens2.zetachain.com/evm; // For zetachain testnet
const DID_ADDRESS = `<Contract Address>`;
const provider = new ethers.providers.JsonRpcProvider(url);

let wallet = new ethers.Wallet(`<Signer Key/Private Key>`, provider);
let registry = new ethers.Contract(DID_ADDRESS, <Contract ABI>, wallet);
```

## Creating a DID

```
let returnHashValues = await registry.functions.createDID(<DID address>, DidDoc);
```

## Updating a DID

```
let returnHashValues = await registry.functions.updateDIDDoc(<DID address>, DidDoc)
```

## Delete a DID

```
let returnHashValues = await registry.functions.deleteDIDDoc(<DID address>)
```

## Resolving a DID

```
let returnDidDoc = await registry.functions.getDIDDoc(<DID address>);
```

# Deploying the Contract on Zetachain network

Pre-requisites

- NodeJS

```
https://nodejs.org/en/download/
```

- Hardhat

```
https://hardhat.org/hardhat-runner/docs/getting-started
```

- A wallet connected to zetachain network, with ZETA token in it. One can receive the ZETA Test Tokens from their faucet in discord.

## Deployment

Clone the above repository

```
git clone https://github.com/zkMeLabs/zkMe-did-registry
```

Install Dependencies

```
yarn i
```

Run a hardhat local node instance (only required for Local Deployment)

```
npx hardhat node --network localhost
```

Update your and RPC URL in .env file.

```
DEPLOY_SECRET="<Place your Private Key here>"
```

On a new console window run

```
npx hardhat run --network localhost scripts/deploy_did_registry.ts
```

## Testing

For Testing use the command

```
npx hardhat test
```

The test cases run on a hardhat local node setup.
