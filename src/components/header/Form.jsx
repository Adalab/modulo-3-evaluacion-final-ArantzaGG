

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
    <form className='form' onSubmit={handleSubmit}>
      <input
        className='header__form__input'
        type='text'
        name='input'
        placeholder='Buscar por título'
        value={titleFilter}
        onChange={handleInput}
      />
      <select
        className='header__form__select'
        name='year'
        id='year'
        value={yearFilter}
        onChange={handleSelect}
      >
        <option value=''>Todos los años</option>
        {renderYear()}
      </select>
    </form>
  );
};

export default Form;
