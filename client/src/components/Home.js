import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Header / Navbar */}
      <header className="navbar">
        <div className="logo">NETFLIX</div>
        <div className="nav-buttons">
          <a href="/">Unlimited Shows & Movies</a>
          <button className="join">Join now</button>
          <button className="signin">Sign In</button>
        </div>
      </header>

      {/* Main content */}
      <section className="content">
        <h1>Movies</h1>
        <p>
          Movies move us like nothing else can, whether they’re scary, funny,
          dramatic, romantic or anywhere in-between. So many titles, so much to
          experience.
        </p>

        <div className="category">
          <h2>Your Next Watch</h2>
          <div className="row">
            {[
              { title: "Idli Kadai", img: "https://i.imgur.com/fcb8pI0.jpeg", tag: "Recently Added" },
              { title: "Mahavatar Narsimha", img: "https://i.imgur.com/NyhnZ93.jpeg", tag: "Top 10" },
              { title: "Frankenstein", img: "https://i.imgur.com/TEtFqv7.jpeg", tag: "Recently Added" },
              { title: "Saiyaara", img: "https://i.imgur.com/3BQVLxq.jpeg", tag: "Top 10" },
              { title: "Vash Level", img: "https://i.imgur.com/JQSmHTS.jpeg", tag: "Recently Added" },
            ].map((movie, index) => (
              <div className="card" key={index}>
                <img src={movie.img} alt={movie.title} />
                <div className="badge">{movie.tag}</div>
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="category">
          <h2>Comedy Movies</h2>
          <div className="row">
            {[
              { title: "KPOP", img: "https://i.imgur.com/9nmvl6a.jpeg" },
              { title: "Despicable Me", img: "https://i.imgur.com/nO2Oq8p.jpeg" },
              { title: "Murder Mubarak", img: "https://i.imgur.com/kdP4z93.jpeg" },
            ].map((movie, index) => (
              <div className="card" key={index}>
                <img src={movie.img} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
