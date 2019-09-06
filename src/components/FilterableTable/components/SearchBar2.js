import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  static propTypes = {
    filterText: PropTypes.string,
    inStockOnly: PropTypes.bool,
    onFilterTextChange: PropTypes.func,
    onInStockChange: PropTypes.func
  };

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {

    return (

      <form>

        <div className="form-group">

          <input
            type="text"
            className="form-control"
            id="searchBar"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />

        </div>

        <div className="form-check">

          <input
            type="checkbox"
            className="form-check-input"
            id="productsInStock"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />

          <label className="form-check-label" htmlFor="productsInStock">
            Only show products in stock
          </label>

        </div>

      </form>
    );
  }
}

export default SearchBar;
