import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";

function ThemeSelector(props){
    if(!props.show){ return null; }

    const changeTheme = (theme) => {
        console.log('ThemeSelector.js changeTheme() theme: '+theme);
        props.setTheme(theme);
    }

    const themes = require('./themes.json');

    const hide = () => {
        console.log('ThemeSelector.js hide invoked');
        props.setShow(false);
    }

    return (
        <Modal show={props.show} onHide={hide} centered>
            <Modal.Header className="m-0 px-2 py-0 theme-primary">
                <Modal.Title>CHOOSE THEME</Modal.Title>
                <button className='btn btn-secondary' onClick={hide}><i className='fa fa-times' aria-hidden="true"></i></button>
            </Modal.Header>
            <Modal.Body className="m-0 p-2">
                <div className='d-flex flex-wrap justify-content-center'>
                {themes.map((choice) => <div key={choice.theme} class="m-3 d-flex align-items-center justify-content-center rounded-circle" onClick={() => changeTheme(choice.theme)} style={{cursor: 'pointer', width: '10vmin', height: '10vmin', backgroundColor: choice.primary, color: choice.primary_text}}>{choice.label}</div>)}
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ThemeSelector;