import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ tag, largeImageURL, onClose }) {
    useEffect(() => {
        window.addEventListener('keydown', handlKeyDown);

        return () => {
            window.addEventListener('keydown', handlKeyDown);
        };
    });

    function handlKeyDown(event) {
        if (event.code === 'Escape') {
            onClose();
        }
    }

    const handlBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

    return createPortal(
        <div className={s.Overlay} onClick={handlBackdropClick}>
            <div className={s.Modal}>
                <img src={largeImageURL} alt={tag} />
            </div>
        </div>,
        modalRoot,
    );
}

Modal.propTypes = {
    tag: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};

export default Modal;
