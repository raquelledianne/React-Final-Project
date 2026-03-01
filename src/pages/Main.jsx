import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  const navigate = useNavigate();

  
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  const contact = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  
  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  
  useEffect(() => {
    if (searchTerm.trim().length < 2) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=d8cfd282&s=${searchTerm}`);
        const data = await res.json();
        if (data.Response === "True") {
          setMovies(data.Search.slice(0, 6));
        } else {
          setMovies([]);
        }
      } catch (err) {
        console.error(err);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [searchTerm]);

  // Sort movies
  const sortedMovies = [...movies].sort((a, b) => {
    if (sortOrder === "az") return a.Title.localeCompare(b.Title);
    if (sortOrder === "za") return b.Title.localeCompare(a.Title);
    return 0;
  });

  return (
    <section id="landing">
      <Header toggleModal={toggleModal} />

      
      <header className="header">
        <div className="row header__row">
          <h1 className="header__title">Find Your Movie</h1>
          <div className="search__wrapper">
            <input
              type="text"
              placeholder="Browse by title or keyword"
              id="search__input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button id="searchBtn">
              Search <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
      </header>

      
      <Modal isOpen={modalOpen} toggleModal={toggleModal} contact={contact} />

      
      <main>
        <div className="container">
          {loading && <div id="loading">Loading...</div>}

         
          <div className="filter__wrapper">
            <select
              id="sortSelect"
              className="sort__select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">Sort</option>
              <option value="az">Title (A–Z)</option>
              <option value="za">Title (Z–A)</option>
            </select>
          </div>

         
          <div id="movies">
            {sortedMovies.length === 0 && searchTerm.trim().length >= 2 && !loading && (
              <p>No movies found.</p>
            )}

            {sortedMovies.map((movie) => (
    <div
      key={movie.imdbID}
      className="movie movie--clickable"  
      onClick={() => handleMovieClick(movie.imdbID)}  
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "Movie Poster Not Found"}
        alt={movie.Title}
        className="movie__img"
      />
      <h4>{movie.Title}</h4>
      <p>{movie.Year}</p>
    </div>
  ))}
</div>
        </div>
      </main>

      
      <footer>
        <div className="footer__copyright">
          Copyright &copy; 2026 Raquelle Cadena
        </div>
      </footer>
    </section>
  );
}