import { useContext, useEffect, useState } from "react";
import AuthContext from "../stores/authContext";

export default function Guides() {
  const { user, authReady } = useContext(AuthContext);
  const [guides, setGuides] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {
      fetch(
        "/.netlify/functions/guides",
        user && {
          headers: {
            Authorization: "Bearer " + user.token.access_token
          }
        }
      )
        .then(res => {
          if (!res.ok) {
            throw Error("You must be logged in to view this content.");
          }
          return res.json();
        })
        .then(data => {
          setGuides(data);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
          setGuides(null);
        });
    }
  }, [user, authReady]);

  return (
    <div className="guides">
      <h2>All Guides</h2>

      {!authReady && <p>Loading...</p>}
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
      {guides &&
        guides.map(guide => (
          <div key={guide.title} className="card">
            <h3>{guide.title}</h3>
            <h4>Written by: {guide.author}</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
              through the cites of the word in classical literature, discovered the undoubtable
              source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
              treatise on the theory of ethics, very popular during the Renaissance. The first line
              of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        ))}
    </div>
  );
}
