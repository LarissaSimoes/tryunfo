import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor="name">
            <input
              data-testid="name-input"
              type="text"
              name="name"
              id="name"
            />
          </label>
          <label htmlFor="description">
            <input
              data-testid="description-input"
              type="textarea"
              name="description"
              id="description"
            />
          </label>
          <label htmlFor="attribute1">
            <input
              data-testid="attr1-input"
              type="number"
              name="attribute1"
              id="attribute1"
            />
          </label>
          <label htmlFor="attribute2">
            <input
              data-testid="attr2-input"
              type="number"
              name="attribute2"
              id="attribute2"
            />
          </label>
          <label htmlFor="attribute3">
            <input
              data-testid="attr3-input"
              type="number"
              name="attribute3"
              id="attribute3"
            />
          </label>
          <label htmlFor="img">
            <input
              data-testid="image-input"
              type="text"
              name="attimgibute3"
              id="img"
            />
          </label>
          <label htmlFor="rare-input">
            <select
              name="rareCard"
              id="rare-input"
              data-testid="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="checkbox">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              name="checkbox"
              id="checkbox"
            />
          </label>
          <button
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

export default Form;
