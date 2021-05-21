import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContextProvider } from "../stores/authContext";
import Image from "next/image";
import "../styles/globals.css";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="banner"
        >
          <Image src="/banner2.jpg" width={966} height={276} />
        </motion.div>
        <Component {...pageProps} />
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default MyApp;
