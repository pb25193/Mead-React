import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById("app"));

const OptionModal = (props) => (
    <Modal 
        isOpen = {!isNaN(props.selectedOption)} 
        contentLabel = "Selected Option"
        onRequestClose = {props.okHandler}
        closeTimeoutMS={200}
        className = "modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {!isNaN(props.selectedOption) && <p className="modal__body"> {props.selectedOptionText}</p>}
        <button
            onClick = {props.okHandler}
            class = "button"
        >OK</button>
    </Modal>
);

export default OptionModal;