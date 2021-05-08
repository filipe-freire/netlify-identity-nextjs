import { useContext, useEffect, useState } from "react";
import AuthContext from "../stores/authContext";
import Image from "next/image";

export default function Photos() {
  const { user, authReady } = useContext(AuthContext);
  const [photos, setPhotos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {
      fetch(
        "/.netlify/functions/photos",
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
          setPhotos(data);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
          setPhotos(null);
        });
    }
  }, [user, authReady]);

  return (
    <div className="photos">
      <h2>All Photos</h2>

      {!authReady && <p>Loading...</p>}
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
      <section className="gallery">
        {photos &&
          photos.map(photo => (
            <div key={photo.title} className="card">
              <Image src={photo.src} alt="bird" width={200} height={200} />
              <h3>{photo.description}</h3>
              <h4>Taken by: {photo.author}</h4>
              <p>{photo.date}</p>
            </div>
          ))}
      </section>
    </div>
  );
}
