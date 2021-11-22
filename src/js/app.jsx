import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
      output: 0,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }


  handleInputChange(e) {
    const target = e.target;
    const value = e.target.value;
    const name = target.name;


    this.setState({
      [name]: value
    });
  }

  calculate() {
    const balance = this.state.balance;
    const rate = this.state.rate * 0.01 / 12;
    const term = this.state.term * 12;
    const top = Math.pow((1 + rate), term) * rate;
    const bottom = (Math.pow((1 + rate), term) - 1);

    const total = balance * (top / bottom);

    this.setState({
      output: total.toFixed(2),
    });
  }

  render() {
    return (
      <div className='container'>
        <h3>Mortgage Calculator</h3>
        <div>
          <input
            type='text'
            id='Loan-balance'
            name='balance' value={ this.state.balance } onChange={ this.handleInputChange }
          />
        </div>
        <div>
          <input
            type='number'
            id='APR'
            step='.01' name='rate' value={ this.state.rate } onChange={ this.handleInputChange }
          />
        </div>
        <div>
          <select name='term' value={ this.state.term } onChange={ this.handleInputChange }>
            <option value='15'>15</option>
            <option value='30'>30</option>
          </select>
        </div>
        <div>
          <button name='submit' onClick={ this.calculate } >submit</button>
        </div>
        <div
          className='output'
          id='output'
          name='output'
        >
            ${ this.state.output } is your payment
        </div>
      </div>
    );
  }
}
