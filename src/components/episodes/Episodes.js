import React, { useEffect, useState } from "react";
import "./Episodes.css";

function Episodes() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getEpisodes()
  }, []);

  const getEpisodes = async () => {
    const data = await fetch('https://breakingbadapi.com/api/episodes')
    const allEpisodes = await data.json()
    // console.log(allEpisodes)
    setEpisodes(allEpisodes);
  }

  return (
    <div className="Episodes">
      <h1>Episodes List</h1>
      <ul className="Episodes__list">
        {
          episodes.map(episode => (
            <li key={episode.episode_id}>{episode.title}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Episodes;
