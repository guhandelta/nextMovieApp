import React, { useState } from "react";
import Modal from './Modal'
import MovieCreateForm from './MovieCreateForm'

const Sidenav = props => {
  const { appName, categories } = props;
  return (
    <>
      <Modal> {/* Containment*/}
        <MovieCreateForm />
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
