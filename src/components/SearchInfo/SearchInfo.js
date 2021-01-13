// import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import Loader from "react-loader-spinner";
// import pixabayAPI from '../../serveses/pixabay-api';
// import ImageGallery from '../ImageGallery';
// import Button from '../Button';

// export default function SearchInfo() {

// const [status, setStatus] = useState('idle');
// const [images, setImages] = useState([]);
// const [error, setError] = useState(null);
// const [page, setPage] = useState(1);

// useEffect(() => {

// }, []);

//     componentDidUpdate(prevProps, prevState) {

//         const prevImgQery = prevProps.imageQuery;
//         const nextImgQuery = this.props.imageQuery;
//         const prevPage = prevState.page;
//         const nextPage = this.state.page;

//         if (prevImgQery !== nextImgQuery) {
//        this.setState({
//                 status: 'pending',
//                 images: [],
//                 page: 1,
//             });

//             pixabayAPI
//                 .fetchImage(nextImgQuery, nextPage)
//                 .then(images => {
//                     if (images.hits.length === 0) {
//                         return Promise.reject(
//                             new Error(
//                                 `No images found on request ${nextImgQuery}`,
//                             ),
//                         );
//                     }

//                     this.setState({
//                         images: images.hits,
//                         status: 'resolved',
//                     });
//                 })
//                 .catch(error => this.setState({ error, status: 'rejected' }))
//                 .finally(this.scroll);
//         }

//         if (prevPage !== nextPage && prevPage < nextPage) {
//             this.setState({ status: 'pending' });

//             pixabayAPI
//                 .fetchImage(nextImgQuery, nextPage)
//                 .then(images => {
//                     this.setState(prevState => ({
//                         images: [...prevState.images, ...images.hits],
//                         status: 'resolved',
//                     }));
//                 })
//                 .catch(error => this.setState({ error, status: 'rejected' }))
//                 .finally(scroll);
//         }
//     }

//  const updatePage = () => {
//      setPage(state => state + 1);
//     };

//  const scroll = () => {
//         window.scrollTo({
//             top: document.documentElement.scrollHeight - 1500,
//             behavior: 'smooth',
//         });
//     };

//         if (status === 'idle') {
//             return <p>What you want fuond?</p>;
//         }

//         if (status === 'pending') {
//             return <Loader/>;
//         }

//         if c
// }

// SearchInfo.propTypes = {
//     imageQuery: PropTypes.string.isRequired,
// };
