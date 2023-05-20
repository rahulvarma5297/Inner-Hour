import React from "react";
import "./Box.css";

const Box = (props) => {
  const description = props.description;
  const shortDescription = description.substring(0, 120);

  let shortDescriptionWithDots = shortDescription + "...";



  const title = props.title;
  const shortTitle = title.substring(0, 65);

  return (
    <>
      <div
        className="box"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#modal_id"
      >
        <div className="img">
          <img src={props.img} className="box-img-top" alt="img" />
        </div>
        <div className="body">
          <p className="title">{shortTitle}.</p>
          <p className="desc">{shortDescriptionWithDots}</p>
        </div>
      </div>
    </>
  );
};

export default Box;
