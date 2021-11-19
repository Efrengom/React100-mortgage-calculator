import React from 'react';



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
      output: 0,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.calculate = this.calculate.bind(this); 
  }


handleInputChange(e) {
  const target = e.target
  const value = e.target.value
  const name = target.name;


  this.setState({
  [name]: value
  });  
}

  calculate(){

    let balance = this.state.balance
    let rate = this.state.rate  * .01/12
    let term = this.state.term * 12
    let top = Math.pow((1+rate), term)*rate
    let bottom = (Math.pow((1+rate), term)-1)

    let total =balance*(top/bottom)
    
    
    this.setState({
      output: total.toFixed(2),
    })
  }

  render() {
    return (
      <div className='container'>
      <h3>Mortgage Calculator</h3>
          <div>
             <input type="number" id="Loan-balance" name = 'balance' value ={this.state.balance} onChange={this.handleInputChange} ></input>          
         </div>
         <div>
             <input type="number" id="APR" step='.01' name="rate" value={this.state.rate} onChange={this.handleInputChange}></input>
           </div>
         <div>
          <select name='term' value={this.state.term} onChange={this.handleInputChange}>
            <option value = '15'>15</option>
            <option value = '30'>30</option>
          </select>
         </div>
         <div>
           <button name = 'submit' onClick={this.calculate} >submit</button>
         </div>
         <div className = 'output' id='output' name = 'output'>${this.state.output} is your payment</div>
        {/* your JSX goes here */}
      </div>
    );
  }
}