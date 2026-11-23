import Head from "next/head";
import dynamic from "next/dynamic";

const App = dynamic(() => import("../src/App"), { ssr: false });

export default function ExistingRoutes() {
  return (
    <>
      <Head>
        <title>American Corner Mombasa</title>
        <meta name="description" content="Discover American Corner Mombasa at the MEWA Information Center in Majengo." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/american-spaces-logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="American Corner Mombasa" />
        <meta property="og:title" content="American Corner Mombasa" />
        <meta property="og:description" content="Weekly technology, English, entrepreneurship and community programs at the MEWA Information Center in Majengo, Mombasa." />
        <meta property="og:image" content="/media/og/american-corner-mombasa.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="American Corner Mombasa — Learn, Connect, Grow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ACMombasa" />
        <meta name="twitter:image" content="/media/og/american-corner-mombasa.png" />
      </Head>
      <App />
    </>
  );
}
