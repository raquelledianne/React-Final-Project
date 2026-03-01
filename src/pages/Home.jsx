import React, { useState } from 'react'
import Header from '../components/Header.jsx'
import Modal from '../components/Modal.jsx';
import movieImg from "../movie.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  const contact = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section id="landing">
      <Header toggleModal={toggleModal} />

      <header className="header">
        <div className="row header__row">
          <h1 className="header__title">Find Your Movie</h1>
          <div className="search__wrapper">
            <input type="text" placeholder="Browse by title or keyword" id="search__input" />
            <button id="searchBtn">Search <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
        </div>
      </header>

      <figure className="movie__img--wrapper">
        <img src={movieImg} className="movie__img" alt="movie" />
      </figure>

      <Modal isOpen={modalOpen} toggleModal={toggleModal} contact={contact} />
    </section>
  );
}