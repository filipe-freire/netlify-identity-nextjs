import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h2>Welcome to the Photo Gallery!</h2>
      <div>
        <p>
          This is a sample project to showcase an implementation of Netlify Identity's auth
          solution!
        </p>
        <p className={styles.warning}>
          In order to "enter" the gallery you first need to sign up/sign in.
        </p>
      </div>
    </div>
  );
}
