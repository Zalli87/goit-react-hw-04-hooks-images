import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

function SearchForm({ onSubmit }) {
    const [imageQuery, setImageQuery] = useState('');

    const handlQueryChange = event => {
        setImageQuery(event.currentTarget.value.toLowerCase());
    };

    const handlSubmit = event => {
        event.preventDefault();
        if (imageQuery.trim() === '') {
            toast.error('enter query');
            return;
        }

        onSubmit(imageQuery);
        setImageQuery('');
    };

    return (
        <header className={s.Searchbar}>
            <form onSubmit={handlSubmit} className={s.SearchForm}>
                <button type="submit" className={s.SearchFormButton}>
                    <span className={s.SearchFormButtonLabel}>Search</span>
                </button>
                <input
                    onChange={handlQueryChange}
                    value={imageQuery}
                    className={s.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
