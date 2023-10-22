import PropTypes from "prop-types";

const Form = ({
  handleChange,
  titleFilter,
  yearFilter,
  handleYear,
  getYear,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleInput = (ev) => {
    handleChange(ev.target.value);
  };

  const handleSelect = (ev) => {
    handleYear(ev.target.value);
  };

  const renderYear = () => {
    return getYear.map((year, index) => (
      <option value={year} key={index}>
        {year}
      </option>
    ));
  };

  return (
    <form className='header__form' onSubmit={handleSubmit}>
      <label className='header__form__label' htmlFor="input">Buscar por título:</label>
      <input
        className='header__form__input'
        type='text'
        name='input'
        placeholder='Insertar título'
        value={titleFilter}
        onChange={handleInput}
      />
      <label className='header__form__label' htmlFor="select">Buscar por año:</label>
      <select
        className='header__form__select'
        name='year'
        id='year'
        value={yearFilter}
        onChange={handleSelect}
      >
        
        <option value=''>Todos</option>
        {renderYear()}
      </select>
    </form>
  );
};

export default Form;
