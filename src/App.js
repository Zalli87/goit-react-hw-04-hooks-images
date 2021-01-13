import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import SearchForm from './components/SearchForm';
import pixabayAPI from './serveses/pixabay-api';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';

function App() {
    const [imageQuery, setImageQuery] = useState('');
    const [status, setStatus] = useState('idle');
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (imageQuery === '') {
            return;
        }

        setStatus('pending');

        pixabayAPI
            .fetchImage(imageQuery, page)
            .then(images => {
                if (images.hits.length === 0) {
                    return Promise.reject(
                        toast(`No images found on request ${imageQuery}`),
                    );
                }
                setImages(state => [...state, ...images.hits]);
                setStatus('resolved');
            })
            .catch(error => {
                setStatus('rejected');
                setError(error);
            })
            .finally(scroll);
    }, [imageQuery, page]);

    const updatePage = () => {
        setPage(state => state + 1);
    };

    const scroll = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight - 1500,
            behavior: 'smooth',
        });
    };

    const handlFormSubmit = imageQuery => {
        setImageQuery(imageQuery);
    };

    return (
        <div>
            <SearchForm onSubmit={handlFormSubmit} />
            <ToastContainer />
            {status === 'idle' && <p>What you want fuond?</p>}
            {status === 'pending' && <Loader />}
            {status === 'resolved' && (
                <>
                    <ImageGallery images={images} />
                    <Button onClick={updatePage} />
                </>
            )}

            {status === 'rejected' && <p> {error.massege}</p>}
        </div>
    );
}

export default App;
