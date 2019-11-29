import React, { useState } from "react";
import { useRouter } from 'next/router'
import Modal from './Modal'
import MovieCreateForm from './MovieCreateForm'
import { createMovie } from '../actions'

const Sidenav = props => {
  const { appName, categories } = props;
  const router = useRouter()
  let modal = null

  const handleCreateMovie = (movie) => {
    // props => movie is received form movieCreateForm & the fn() to create the movie will be defined in actions
    createMovie(movie).then((movies) => {
      modal.closeModal()
      router.push('/') // After adding a new movie and receiving a successful response from the server re-routing back to the index page-
      // so the component gets re-rendered =which=> invokes getInitialProps() to fetch the updated data/movie list
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
