import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Photo Gallery!</h2>
      <section>
        <p className="paragraph">
          This is a sample project to showcase an implementation of Netlify Identity's auth
          solution!
        </p>
        <Link href="/gallery">
          <a className="btn gallery-link">Enter the Gallery</a>
        </Link>
        <p className="warning">In order to access the gallery you first need to sign up/sign in.</p>
      </section>
    </div>
  );
}
