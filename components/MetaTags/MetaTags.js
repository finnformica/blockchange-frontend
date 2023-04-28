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

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default MetaTags;
