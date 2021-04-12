import React from 'react';

class ProductRow extends React.Component {

}

class ProductCategoryRow extends React.Component {

}

class ProductTable extends React.Component {

}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log('onChange:', event.target.checked, name, value);
    this.setState({
      [name]: value,
    });
    console.log(JSON.stringify(this.state));
    this.props.onFilter(this.state);
  }
  render() {
    return (
      <div>
        <input name="filterText" value={this.state.filterText} onChange={this.onChange} />
        <input name="inStockOnly" type="checkbox" value={this.state.inStockOnly} onChange={this.onChange} />
      </div>
    );
  }
}

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
        { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
        { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
        { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
        { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
        { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
      ],
    };
  }
  filter(params) {
    console.log('filter:', params);
  }
  render() {
    return (
      <SearchBar onFilter={this.filter} />
    );
  }
}
