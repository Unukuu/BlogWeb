import Layout from "@/components/layout";
import "@/styles/globals.css";
import SearchProvider from "@/provider/search-provider";
export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchProvider>
  );
}
