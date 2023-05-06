import { ethers } from "ethers";

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

export const instantiateContract = (address, abi) => {
  const url = "http://localhost:8545";
  const provider = new ethers.providers.JsonRpcProvider(url);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(address, abi, signer);

  return contract;
};

export const donate = async (address, amount) => {
  try {
    const { ethereum } = window;

    if (ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        address,
        contractInfo.contract_abi,
        signer
      );

      const tx = await contract.donate({
        value: ethers.utils.parseEther(amount.toString()),
        gasLimit: 3000000,
      });

      console.log(tx);
    } else {
      console.log("Ethereum object not found");
    }
  } catch (e) {
    console.log(e);
  }
};
