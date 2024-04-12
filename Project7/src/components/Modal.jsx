import React, {useState} from "react";
import { Link } from "react-router-dom";

function Modal({deleteCrewmate}) {

  const [modal, setModal] = useState(false);

  const toggleModal = () =>{
    setModal(!modal);
  }

  return(
    <>
      <button className="btn-modal" onClick={toggleModal}> Delete Crewmate</button>

      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h3>Are you sure you want to delete your crewmate? This action is irreversible!</h3>
            <div className="modal-selections">
              <Link to="/crewmateGalleryPage">
                <button className="choice-yes" onClick={() => deleteCrewmate(toggleModal)}>Yes</button>
              </Link>
              <button className="close-modal" onClick={toggleModal}>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal;