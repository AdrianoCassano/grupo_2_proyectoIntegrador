import React from "react";

const Categoria = (props) => {
  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow">
          <div className="card-body">
            <p>{props.categorias.name}: {props.count}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categoria;