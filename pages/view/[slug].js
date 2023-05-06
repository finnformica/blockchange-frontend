import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";

import Image from "next/image";
import { useRouter } from "next/router";

import BigTitle from "../../components/Titles/BigTitle";
import SmallTitle from "../../components/Titles/SmallTitle";
import PillButton from "../../components/PillButton/PillButton";
import StateChip from "../../components/StateChip/StateChip";
import AdminDrawer from "../../components/AdminDrawer/AdminDrawer";
import CauseTrust from "../../components/CauseTrust/CauseTrust";
import TransactTable from "../../components/TransactTable/TransactTable";

import contractInfo from "../../constants/contractInfo";
import {
  instantiateContractRPC,
  donate,
  retrieveContractInfo,
} from "../../utils/utils";

const CausePage = ({ cause }) => {
  const router = useRouter();
  const [admin, setAdmin] = useState(false);
  const [causeState, setCauseState] = useState(null);

  // display loading if page is not generated yet
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

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

    if (cause.causeState) {
      setCauseState(cause.causeState);
    }
  }, []);

  return (
    <Container maxWidth="lg">
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
                  setCauseState={setCauseState}
                  address={cause.address}
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
          <PillButton
            variant="contained"
            {...(cause.causeState == 1 ? {} : { disabled: true })}
            onClick={() => donate(cause.address, 2)}
          >
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
          {cause.incoming ? (
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

  const res = await contract.functions.cfRetrieveIds();

  const paths = res[0].map((id) => ({
    params: { slug: id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  try {
    const cause = await retrieveContractInfo(params.slug);

    return {
      props: {
        cause,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default CausePage;
