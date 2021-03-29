import PropTypes from 'prop-types';
import FilterBar from './FilterBar.js';

const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
            <FilterBar />
        </header>
    )
}

Header.defaultProps = {
    title: 'Desafio Tesseract',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
