import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      advice: ""
    };
  }
  componentDidMount(){
    this.setState({advice: "Take my advice"})
  }
  handleClick = () =>{
     fetch('https://api.adviceslip.com/advice')
    .then(response =>  response.json())
    .then(resData => {
       this.setState({advice: resData.slip.advice}); //this is an asynchronous function
    }) 
  }
  render(){
    return(
      <div className="App">
        <div className="Box">
          <div className="Box1">
          <h1 className="Header">{this.state.advice}</h1>
          <Button variant="outlined" color="primary" onClick={this.handleClick}>
          Take Advice
        </Button>
        </div>
        </div>
      </div>
    );
  }
}

export default App;