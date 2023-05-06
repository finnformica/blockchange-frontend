import { ethers } from "ethers";
import contractInfo from "../constants/contractInfo";

export const mapTransactionStruct = (transactions) => {
  return transactions.map((transaction) => {
    return {
      sender: transaction.sender,
      amount: ethers.utils.formatEther(
        parseInt(transaction.amount._hex).toString()
      ),
      timestamp: parseInt(transaction.timestamp._hex),
      blockNumber: parseInt(transaction.blockNumber._hex),
      gasUsed: parseInt(transaction.gasUsed._hex),
      transactionFee: ethers.utils.formatEther(
        parseInt(transaction.transactionFee._hex).toString()
      ),
    };
  });
};

export const instantiateContractRPC = (address, abi) => {
  const url = "http://localhost:8545";
  const provider = new ethers.providers.JsonRpcProvider(url);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(address, abi, signer);

  return contract;
};

export const instantiateContractWeb3 = (ethereum, address, abi) => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(address, abi, signer);

  return contract;
};

export const toggleCauseState = async (address) => {
  try {
    const { ethereum } = window;

    if (ethereum !== undefined) {
      const contract = instantiateContractWeb3(
        ethereum,
        address,
        contractInfo.contract_abi
      );

      const tx = await contract.toggleCauseState({
        gasLimit: 3000000,
      });
    } else {
      console.log("Ethereum object not found");
    }
  } catch (e) {
    console.log(e);
  }
};

export const withdrawFunds = async (address, amount = 2) => {
  try {
    const { ethereum } = window;

    if (ethereum !== undefined) {
      const contract = instantiateContractWeb3(
        ethereum,
        address,
        contractInfo.contract_abi
      );

      const tx = await contract.withdraw(
        ethers.utils.parseEther(amount.toString()),
        {
          gasLimit: 3000000,
        }
      );
    } else {
      console.log("Ethereum object not found");
    }
  } catch (e) {
    console.log(e);
  }
};

export const updateAdmin = async (address, newAdmin) => {
  try {
    const { ethereum } = window;

    if (ethereum !== undefined) {
      const contract = instantiateContractWeb3(
        ethereum,
        address,
        contractInfo.contract_abi
      );

      const tx = await contract.updateAdmin(newAdmin, { gasLimit: 3000000 });
      console.log(tx);
    } else {
      console.log("Ethereum object not found");
    }
  } catch (e) {
    console.log(e);
  }
};

export const redistributeFunds = async (address) => {
  try {
    const { ethereum } = window;

    if (ethereum !== undefined) {
      const contract = instantiateContractWeb3(
        ethereum,
        address,
        contractInfo.contract_abi
      );

      const tx = await contract.distributeFunds({ gasLimit: 3000000 });
      console.log(tx);
    } else {
      console.log("Ethereum object not found");
    }
  } catch (e) {
    console.log(e);
  }
};

export const donate = async (address, amount) => {
  try {
    const { ethereum } = window;

    if (ethereum !== undefined) {
      const contract = instantiateContractWeb3(
        ethereum,
        address,
        contractInfo.contract_abi
      );

      const tx = await contract.donate({
        value: ethers.utils.parseEther(amount.toString()),
        gasLimit: 3000000,
      });
    } else {
      console.log("Ethereum object not found");
    }
  } catch (e) {
    console.log(e);
  }
};

export const retrieveContractInfo = async (slug) => {
  const contract = instantiateContractRPC(
    contractInfo.factory_address,
    contractInfo.factory_abi
  );
  const res = await contract.functions.cfRetrieveInfo(slug);
  const causeInfo = res[0];

  const cause = {
    id: causeInfo["id"],
    title: causeInfo["name"],
    admin: causeInfo["admin"],
    address: causeInfo["contractAddress"],
    incoming: mapTransactionStruct(causeInfo["incoming"]),
    outgoing: mapTransactionStruct(causeInfo["outgoing"]),
    causeTotal: ethers.utils.formatEther(
      parseInt(causeInfo["causeTotal"]._hex).toString()
    ),
    causeState: parseInt(causeInfo["causeState"]._hex).toString(),
    email: causeInfo["email"],
    desc: causeInfo["description"],
    website: causeInfo["website"],
    image_url: causeInfo["thumbnail"],
  };

  console.log(cause);

  return cause;
};
