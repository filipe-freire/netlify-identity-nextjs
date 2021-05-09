import Link from "next/link";
import Image from "next/image";
import AuthContext from "../stores/authContext";
import { useContext } from "react";

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext);

  return (
    <div className="container">
      {/* Mobile Version */}
      <nav className="nav-mobile" role="navigation">
        <Link href="/">
          <a className="nav-title">
            <Image src="/polaroid-frame.png" width={50} height={48} />
            <h1>Photo Gallery</h1>
          </a>
        </Link>

        <ul>
          {(authReady && !user && (
            <li onClick={login} className="btn">
              Login/Signup
            </li>
          )) || (
            <>
              <li>{user?.email}</li>
              <li onClick={logout} className="btn">
                Logout
              </li>
            </>
          )}
        </ul>
      </nav>

      {/* Desktop Version */}
      <nav className="nav-dekstop" role="navigation">
        <Image src="/polaroid-frame.png" width={50} height={48} />
        <h1>Photo Gallery</h1>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
          {(authReady && !user && (
            <li onClick={login} className="btn">
              Login/Signup
            </li>
          )) || (
            <>
              <li>{user?.email}</li>
              <li onClick={logout} className="btn">
                Logout
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
