import { useContext, useEffect, useState } from "react";
import AuthContext from "../stores/authContext";
import { motion } from "framer-motion";

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
            Authorization: "Bearer " + user.token.access_token,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("You must be logged in to view this content.");
          }
          return res.json();
        })
        .then((data) => {
          setPhotos(data);
          setError(null);
        })
        .catch((err) => {
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
          photos.map((photo) => (
            <motion.a
              drag
              dragConstraints={{ left: 0, bottom: 0, top: 0, right: 0 }}
              dragElastic={0.5}
              whileHover={{
                scale: 1.05,
              }}
              key={photo.src}
              href={`${photo.link}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="card">
                <img
                  className="gallery-photo"
                  src={photo.src}
                  alt="bird"
                  width={500}
                  height={400}
                />
                <p>
                  Description: {photo.description || "No description provided"}
                </p>
                <h3>Taken by: {photo.author}</h3>
                <p>Date: {photo.date}</p>
              </div>
            </motion.a>
          ))}
      </section>
    </div>
  );
}
