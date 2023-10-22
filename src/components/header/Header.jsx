import Form from './Form';
import '../../styles/Header.scss'

const Header = ({
  handleChange,
  titleFilter,
  yearFilter,
  handleYear,
  getYear,
}) => {
  return (
    <header className='header'>
      <h1 className='header__title'>WOW! THIS IS OWEN WILSON!</h1>
      <Form
        handleChange={handleChange}
        titleFilter={titleFilter}
        yearFilter={yearFilter}
        handleYear={handleYear}
        getYear={getYear}
      />
    </header>
  );
};
export default Header;
