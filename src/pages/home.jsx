// Home.js
import { useEffect, useState } from "react";
import getMovie from "../services/getMovie";

export default function Home() {
  const [getML, setML] = useState([]);

  useEffect(() => {
    getMovie()
      .then((data) => {
        setML(data);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error); // Menangani kesalahan jika ada
      });
  }, []);

  return (
    <>
      {getML.map((data, index) => (
        <>
          <p key={index}>{data.id}</p>
        </>
      ))}
    </>
  );
}
