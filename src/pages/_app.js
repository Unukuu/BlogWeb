import Layout from "@/components/layout";
import "@/styles/globals.css";
import MyProvider from "@/provider/myprovider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </MyProvider>
  );
}
