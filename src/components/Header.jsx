const Header = ({handleChange, titleFilter }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleInput = (ev) => {
    handleChange(ev.target.value)
  }

  return (
    <>
      <h1 className='main-title'>WOW! THIS IS OWEN WILSON!</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='input'
          placeholder='Buscar por título'
          value={titleFilter}
          onChange={handleInput}
        />
        <select name='' id=''></select>
      </form>
    </>
  );
};
export default Header;
