import React, { useState } from "react";

const Sidenav = props => {
  const { appName, categories } = props;
  return (
    <>
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
