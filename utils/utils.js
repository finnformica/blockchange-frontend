import { ethers } from "ethers";
import contractInfo from "../constants/contractInfo";

export const mapTransactionStruct = (transactions) => {
  return transactions.map((transaction, id) => {
    return {
      id,
      wallet: transaction.sender,
      amount:
        ethers.utils.formatEther(parseInt(transaction.amount._hex).toString()) +
        " ETH",
      date: new Date(
        parseInt(transaction.timestamp._hex) * 1000
      ).toLocaleDateString(),
      blockNumber: parseInt(transaction.blockNumber._hex),
      // gasUsed: parseInt(transaction.gasUsed._hex),
      // transactionFee: ethers.utils.formatEther(
      //   parseInt(transaction.transactionFee._hex).toString()
      // ),
    };
  });
};

export const instantiateContractWeb3 = (ethereum, address, abi) => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(address, abi, signer);

  return contract;
};

export const toggleCauseState = async (address) => {
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

    return tx.wait();
  } else {
    console.log("Ethereum object not found");
  }
};

export const withdrawFunds = async (address, amount = 2) => {
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

    return tx.wait();
  } else {
    console.log("Ethereum object not found");
  }
};

export const updateAdmin = async (address, newAdmin) => {
  const { ethereum } = window;

  if (ethereum !== undefined) {
    const contract = instantiateContractWeb3(
      ethereum,
      address,
      contractInfo.contract_abi
    );

    const tx = await contract.updateAdmin(newAdmin, { gasLimit: 3000000 });

    return tx.wait();
  } else {
    console.log("Ethereum object not found");
  }
};

export const redistributeFunds = async (address) => {
  const { ethereum } = window;

  if (ethereum !== undefined) {
    const contract = instantiateContractWeb3(
      ethereum,
      address,
      contractInfo.contract_abi
    );

    const tx = await contract.distributeFunds({ gasLimit: 3000000 });

    return tx.wait();
  } else {
    console.log("Ethereum object not found");
  }
};

export const donate = async (address, amount) => {
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

    return tx.wait();
  } else {
    console.log("Ethereum object not found");
  }
};

export const retrieveContractInfo = async (slugs) => {
  const contract = instantiateContractWeb3(
    ethereum,
    contractInfo.factory_address,
    contractInfo.factory_abi
  );

  const res = await contract.functions.cfRetrieveInfo(slugs);
  const causeInfo = res[0];

  const causes = causeInfo.map((cause) => ({
    id: cause["id"],
    title: cause["name"],
    admin: cause["admin"],
    address: cause["contractAddress"],
    incoming: mapTransactionStruct(cause["incoming"]),
    outgoing: mapTransactionStruct(cause["outgoing"]),
    totalDonated: ethers.utils.formatEther(
      parseInt(cause["causeTotal"]._hex).toString()
    ),
    totalWithdrawn: ethers.utils.formatEther(
      parseInt(cause["causeWithdrawalTotal"]._hex).toString()
    ),
    causeState: parseInt(cause["causeState"]._hex).toString(),
    email: cause["email"],
    desc: cause["description"],
    website: cause["website"],
    image_url: cause["thumbnail"],
    fundsDistributedFlag: parseInt(
      cause["fundsDistributedFlag"]._hex
    ).toString(),
  }));

  return causes;
};

export const create = async (formState) => {
  const { ethereum } = window;

  if (ethereum !== undefined) {
    const contract = instantiateContractWeb3(
      ethereum,
      contractInfo.factory_address,
      contractInfo.factory_abi
    );

    const tx = await contract.functions.createCauseContract(
      formState.title.toLowerCase().replaceAll(" ", "-"),
      formState.title,
      formState.description,
      formState.websiteURL,
      formState.thumbnailURL,
      formState.contactEmail,
      {
        gasLimit: 3000000,
      }
    );

    return tx.wait();
  } else {
    console.log("Ethereum object not found");
  }
};

export const checkIfIdUnique = async (id) => {
  try {
    const { ethereum } = window;

    if (ethereum !== undefined) {
      const contract = instantiateContractWeb3(
        ethereum,
        contractInfo.factory_address,
        contractInfo.factory_abi
      );

      const tx = await contract.functions.checkIfIdUnique(id, {
        gasLimit: 3000000,
      });

      return tx[0];
    } else {
      console.log("Ethereum object not found");
    }
  } catch (e) {
    console.log(e);
  }
};

export const deleteCause = async (id) => {
  const { ethereum } = window;

  if (ethereum !== undefined) {
    const contract = instantiateContractWeb3(
      ethereum,
      contractInfo.factory_address,
      contractInfo.factory_abi
    );

    const tx = await contract.functions.deleteCauseContract(id, {
      gasLimit: 3000000,
    });

    return tx.wait();
  } else {
    console.log("Ethereum object not found");
  }
};
