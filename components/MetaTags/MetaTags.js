import Head from "next/head";

const MetaTags = () => {
  return (
    <Head>
      <title>BlockChange</title>
      <meta name="robots" content="all" />
      <meta
        name="description"
        content="BlockChange is a distributed crowdfunding platform that allows anyone to create a campaign and raise funds for any cause."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
    </Head>
  );
};

export default MetaTags;
