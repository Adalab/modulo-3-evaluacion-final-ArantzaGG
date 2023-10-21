import Form from './Form';

const Header = ({
  handleChange,
  titleFilter,
  yearFilter,
  handleYear,
  getYear,
}) => {
  return (
    <header>
      <h1 className='main-title'>WOW! THIS IS OWEN WILSON!</h1>
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
