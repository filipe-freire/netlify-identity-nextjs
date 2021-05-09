import { useContext, useEffect, useState } from "react";
import AuthContext from "../stores/authContext";

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
      <h1>Gallery</h1>

      {!authReady && <p>Loading...</p>}
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
      <section className="gallery">
        {photos &&
          photos.map(photo => (
            <a href={`${photo.link}`} target="_blank" rel="noreferrer noopener">
              <div key={photo.title} className="card">
                <img
                  className="gallery-photo"
                  src={photo.src}
                  alt="bird"
                  width={500}
                  height={400}
                />
                <p>Description: {photo.description || "No description provided"}</p>
                <h3>Taken by: {photo.author}</h3>
                <p>Date: {photo.date}</p>
              </div>
            </a>
          ))}
      </section>
    </div>
  );
}
