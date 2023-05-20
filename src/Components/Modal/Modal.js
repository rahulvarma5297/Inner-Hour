import React from "react";
import { useState } from "react";
import "./Modal.css";
import Loading from "../Loading/Loading";

const Modal = (props) => {

  const [loading, setLoading] = useState(true);

  return (
      <div
        className="modal"
        id="modal_id"
        tabIndex="-1"
        aria-labelledby="modal_title"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <img src={props.img} alt="img" />
            </div>
            <div className="modal-body">{
              props.title === undefined ? <Loading /> : props.title
            }.</div>
            <div className="modal-footer">
              <div dangerouslySetInnerHTML={{__html: props.description}} />
            </div>
          </div>

          <button
            type="button"
            className="close"
            aria-label="Close"
            data-bs-dismiss="modal"
          >
            x
          </button>
          
        </div>
      </div>
  );
};

export default Modal;
