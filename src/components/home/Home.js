import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";
import "./Home.css";

function Home() {
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    document.title = 'Breaking bad - With React'
    getQuote()
  }, []);

  const getQuote = async () => {
    const data = await fetch('https://breakingbadapi.com/api/quote/random')
    const quote = await data.json()
    console.log(quote)
    setMsg(quote)
  }

  return (
    <div className="Home">
      <img src={logo} alt="" className="Home__logo" />
      {
        msg.map(item => (
          <div key={item.quote_id} className="quote">
            <p>{item.quote}</p>
            <cite>{item.author}</cite>
          </div>
        ))
      }
    </div>
  );
}

export default Home;
