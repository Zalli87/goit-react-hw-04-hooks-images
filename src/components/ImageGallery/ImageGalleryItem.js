import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import Modal from '../Modal';

function ImageGalleryItem({ webformatURL, tag, largeImageURL }) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(state => !state);
    };

    return (
        <>
            <li className={s.ImageGalleryItem}>
                <img
                    src={webformatURL}
                    alt={tag}
                    className={s.ImageGalleryItemImage}
                    onClick={toggleModal}
                />
                {showModal && (
                    <Modal
                        onClose={toggleModal}
                        tag={tag}
                        largeImageURL={largeImageURL}
                    />
                )}
            </li>
        </>
    );
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tag: PropTypes.string,
    largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
