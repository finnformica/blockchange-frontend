import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";

import Image from "next/image";
import { useRouter } from "next/router";

import BigTitle from "../../components/Titles/BigTitle";
import SmallTitle from "../../components/Titles/SmallTitle";
import PillButton from "../../components/PillButton/PillButton";
import StateChip from "../../components/StateChip/StateChip";
import AdminDrawer from "../../components/AdminDrawer/AdminDrawer";
import CauseTrust from "../../components/CauseTrust/CauseTrust";
import TransactTable from "../../components/TransactTable/TransactTable";
import FloatingAlert from "../../components/FloatingAlert/FloatingAlert";

import contractInfo from "../../constants/contractInfo";
import {
  instantiateContractRPC,
  donate,
  retrieveContractInfo,
} from "../../utils/utils";

const CausePage = ({ cause: causeInfo, slug }) => {
  const router = useRouter();
  const [admin, setAdmin] = useState(false);
  const [causeState, setCauseState] = useState(null);
  const [donation, setDonation] = useState(0);
  const [cause, setCause] = useState(causeInfo);

  const [alertState, setAlertState] = useState({
    open: false,
    severity: "success",
    message: "",
    title: "",
  });

  // check if user is admin of cause
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      const fetchAccounts = async () => {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length == 0) {
          setAdmin(false);
          return;
        }

        setAdmin(accounts[0].toLowerCase() == cause.admin.toLowerCase());
      };

      fetchAccounts().catch((e) => console.log(e));

      window.ethereum.on("accountsChanged", function (accounts) {
        fetchAccounts().catch((e) => console.log(e));
      });
    }

    if (typeof window !== "undefined") {
      if (cause?.causeState) {
        setCauseState(cause.causeState);
      }
    }
  }, []);

  const handleDonate = async () => {
    const account = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (cause.causeState != 1) {
      setAlertState({
        open: true,
        severity: "error",
        title: "Cause inactive",
        message: "This cause is not accepting donations at the moment.",
      });
      return;
    }

    if (account[0] == undefined) {
      setAlertState({
        open: true,
        severity: "error",
        title: "No account found",
        message: "Please connect your wallet to create a cause.",
      });
      return;
    }

    try {
      await donate(cause.address, donation);

      const res = await retrieveContractInfo([slug]);
      setCause(res[0]);

      setAlertState({
        open: true,
        severity: "success",
        title: "Donation complete!",
        message: "The donation has been successfully completed.",
      });
    } catch (e) {
      console.log(e);
      setAlertState({
        open: true,
        severity: "error",
        title: "Donation failed",
        message: "The donation has failed. Please try again later.",
      });
    }
  };

  // display loading if page is not generated yet
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container maxWidth="lg">
      <FloatingAlert state={alertState} setState={setAlertState} />
      <Box
        sx={{
          p: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box>
            <Box>
              <SmallTitle>Cause</SmallTitle>
              <StateChip
                cause={cause}
                color={cause.causeState == 1 ? "#61EF61" : "#E10600"}
              />
              {admin ? (
                <AdminDrawer
                  causeState={causeState}
                  setCause={setCause}
                  address={cause.address}
                  slug={slug}
                  setCauseState={setCauseState}
                  balance={cause.totalDonated - cause.totalWithdrawn}
                />
              ) : (
                <></>
              )}
            </Box>
            <BigTitle fontSize={48}>{cause.title}</BigTitle>
            <Typography fontSize={14} sx={{ pt: 1 }}>
              {cause.desc}
            </Typography>
          </Box>

          <Image
            src={cause.image_url}
            layout="responsive"
            alt="Cause Image"
            width={500}
            height={300}
            style={{
              objectFit: "cover",
              borderRadius: 4,
              marginTop: 16,
              maxWidth: "500px",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
          <TextField
            label="Amount"
            variant="outlined"
            value={donation}
            type="number"
            size="small"
            InputProps={{
              inputProps: { min: 0 },
              endAdornment: (
                <InputAdornment position="start">ETH</InputAdornment>
              ),
            }}
            sx={{
              width: 150,
              "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button":
                {
                  WebkitAppearance: "none",
                  margin: 0,
                },
              "input[type=number]": {
                MozAppearance: "textfield",
              },
            }}
            onChange={(e) => {
              var value = e.target.value;
              if (value < 0) value = 0;

              setDonation(value);
            }}
          />
          <PillButton variant="contained" onClick={() => handleDonate()}>
            Donate
          </PillButton>
          {cause.email ? (
            <PillButton variant="outlined" href={`mailto:${cause.email}`}>
              Contact
            </PillButton>
          ) : (
            <></>
          )}
        </Box>
        <Typography sx={{ mt: 2, fontWeight: 500 }}>
          Total donated: {cause.totalDonated}
        </Typography>
        <Typography sx={{ mt: 2, fontWeight: 500 }}>
          Total withdrawn: {cause.totalWithdrawn}
        </Typography>
        <Typography sx={{ mt: 2, fontWeight: 500 }}>
          Cause balance: {cause.totalDonated - cause.totalWithdrawn}
        </Typography>
        <CauseTrust />
        <Box
          sx={{
            mt: 8,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "flex-start", md: "center" },
            borderRadius: 10,
            backgroundColor: "rgba(155, 155, 155, .08)",
            backdropFilter: "blur(4px)",
            boxShadow: "0 0 4px 4px rgba(155, 155, 155, .08)",
            p: 4,
            maxWidth: 800,
          }}
        >
          <BigTitle sx={{ mb: 3 }}>Donations</BigTitle>
          {cause.incoming.length ? (
            <TransactTable rows={cause.incoming} />
          ) : (
            <Typography>No donations yet</Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export const getStaticPaths = async () => {
  const contract = instantiateContractRPC(
    contractInfo.factory_address,
    contractInfo.factory_abi
  );

  var paths;

  try {
    const res = await contract.functions.cfRetrieveIds();

    paths = res[0].map((id) => ({
      params: { slug: id },
    }));
  } catch (e) {
    paths = [];
    console.log(e);
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  try {
    const cause = await retrieveContractInfo([params.slug]);

    return {
      props: {
        cause: cause[0],
        slug: params.slug,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default CausePage;
