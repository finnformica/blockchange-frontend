import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

import BigTitle from "../../components/Titles/BigTitle";
import SmallTitle from "../../components/Titles/SmallTitle";
import PillButton from "../../components/PillButton/PillButton";
import StateChip from "../../components/StateChip/StateChip";

import CauseTrust from "../../components/CauseTrust/CauseTrust";

import contractInfo from "../../constants/contractInfo";
import { ethers } from "ethers";

const instantiateContractFactory = () => {
  const url = "http://localhost:8545";
  const provider = new ethers.providers.JsonRpcProvider(url);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    contractInfo.address,
    contractInfo.abi,
    signer
  );

  return contract;
};

const CausePage = ({ cause }) => {
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
                color={cause.causeState == "2" ? "#61EF61" : "#E10600"}
              />
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
            {...(cause.causeState == "2" ? {} : { disabled: true })}
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
      </Box>
    </Container>
  );
};

export const getStaticPaths = async () => {
  const contract = instantiateContractFactory();

  const res = await contract.functions.cfRetrieveIds();

  const paths = res[0].map((id) => ({
    params: { slug: id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const contract = instantiateContractFactory();
  const res = await contract.functions.cfRetrieveInfo(params.slug);
  const causeInfo = res[0];

  const cause = {
    id: causeInfo["id"],
    title: causeInfo["name"],
    admin: causeInfo["admin"],
    incoming: causeInfo["incoming"],
    outgoing: causeInfo["outgoing"],
    causeTotal: ethers.utils.formatEther(
      parseInt(causeInfo["causeTotal"]._hex).toString()
    ),
    causeState: parseInt(causeInfo["causeState"]._hex).toString(),
    email: causeInfo["email"],
    desc: causeInfo["description"],
    website: causeInfo["website"],
    image_url: causeInfo["thumbnail"],
  };

  return {
    props: {
      cause,
    },
  };
};

export default CausePage;
