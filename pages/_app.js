import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContextProvider } from "../stores/authContext";
import Image from "next/image";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <div className="banner">
          <Image src="/banner2.jpg" width={966} height={276} />
        </div>
        <Component {...pageProps} />
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default MyApp;
