import Form from './Form';
import '../../styles/Header.scss';
import PropTypes from 'prop-types';

const Header = ({
  handleChange,
  titleFilter,
  yearFilter,
  handleYear,
  getYear,
  handleRefresh
}) => {
  return (
    <header className='header'>
      <h1 className='header__title'> <span className='header__title__first'>WOW!</span> THIS IS OWEN WILSON!</h1>
      <Form
        handleChange={handleChange}
        titleFilter={titleFilter}
        yearFilter={yearFilter}
        handleYear={handleYear}
        getYear={getYear}
        handleRefresh={handleRefresh}
      />
      
    </header>
  );
};

Header.propTypes = {
  handleChange: PropTypes.func,
  titleFilter: PropTypes.string,
  yearFilter: PropTypes.string,
  handleYear: PropTypes.func,
  getYear: PropTypes.array,
  handleRefresh: PropTypes.func
};

export default Header;
