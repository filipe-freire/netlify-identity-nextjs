import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Photo Gallery!</h2>
      <section>
        <p className="paragraph">
          This is a sample project to showcase an implementation of Netlify
          Identity's auth solution!
        </p>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link href="/gallery">
            <a className="btn gallery-link">Enter the Gallery</a>
          </Link>
        </motion.div>
        <p className="warning">
          In order to access the gallery you first need to sign up/sign in.
        </p>
      </section>
    </div>
  );
}
