import React, { useState } from "react";
import Modal from './Modal'
import MovieCreateForm from './MovieCreateForm'
import { createMovie } from '../actions'

const Sidenav = props => {
  const { appName, categories } = props;
  let modal = null

  const handleCreateMovie = (movie) => {
    // props => movie is received form movieCreateForm & the fn() to create the movie will be defined in actions
    createMovie(movie).then((movies) => {
      console.log(JSON.stringify(movies))
      modal.closeModal()
    })
  }

  return (
    <>
      <Modal ref={ele => modal = ele} hasSubmit={false}> {/* Containment*/}
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">{appName}</h1>
      <div className="list-group">

        {
          categories.map(category => <a key={category.id} href={category.id} className="list-group-item">{category.name}</a>)
        }

      </div>
    </>
  );
};
export default Sidenav;
