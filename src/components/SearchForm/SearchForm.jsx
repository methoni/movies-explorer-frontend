import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormWithValidation from '../hooks/useFormWithValidation';

function SearchForm({ isChecked, handleCheckBoxClick }) {
  const [isValid, setIsValid] = React.useState(true);
  const { inputValues, isFormValid, handleChange } = useFormWithValidation();

  function onFormSubmit(event) {
    event.preventDefault();
    if (isFormValid) {
      setIsValid(true);
      return;
    } else {
      setIsValid(false);
    }
  }

  function handleInputChange(event) {
    handleChange(event);
    setIsValid(true);
  }

  return (
    <section className="search">
      <div className="search__container">
        <form
          noValidate
          className="search__form"
          name={'SearchForm'}
          onSubmit={onFormSubmit}
        >
          <input
            type="text"
            name="search"
            placeholder="Фильм"
            className="search__input"
            value={inputValues.search}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="search__button"></button>
        </form>
        <span
          className={`search__error ${!isValid && 'search__error_visible'}`}
        >
          {!isValid && 'Нужно ввести ключевое слово'}
        </span>
        <FilterCheckbox
          isChecked={isChecked}
          handleCheckBoxClick={handleCheckBoxClick}
        />
      </div>
    </section>
  );
}

export default SearchForm;
