import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <section>
        <form>
          <label htmlFor="name">
            <input
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              type="text"
              name="CardName"
              id="name"
            />
          </label>
          <label htmlFor="description">
            <input
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              type="textarea"
              name="CardDescription"
              id="description"
            />
          </label>
          <label htmlFor="attribute1">
            <input
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              type="number"
              name="cardAttr1"
              id="attribute1"
            />
          </label>
          <label htmlFor="attribute2">
            <input
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              type="number"
              name="cardAttr2"
              id="attribute2"
            />
          </label>
          <label htmlFor="attribute3">
            <input
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              type="number"
              name="cardAttr3"
              id="attribute3"
            />
          </label>
          <label htmlFor="img">
            <input
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              type="text"
              name="cardImage"
              id="img"
            />
          </label>
          <label htmlFor="rare-input">
            <select
              name="cardRare"
              id="rare-input"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="checkbox">
            <input
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              type="checkbox"
              name="cardTrunfo"
              id="checkbox"
            />
          </label>
          <button
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.bool,
}.isRequired;

export default Form;
