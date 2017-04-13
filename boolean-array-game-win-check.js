//Recieve a boolean array of elements representing if a picture is shown or not, ordered by pairs of correlating, identical images
function CheckWin(props){
    win=false;
    total=props.total;
    array=props.array;

    curr=0
    
    for (i in array.length()){
        //check only pairs adjacent starting with first element
        if(array[i]%2==0 & array[i+1]%2==1)
            if(array[i] & array[i+1]){
                curr++;
                if(total==curr){
                    win=true;
                }    
            }
    }
    render(){
      return{
      if(win)
        <h2>   You won!</h2>
      else
        <h2> You lose! </h2>
      }
  }
}
//Hierarchy of three components with html tag randomization in parent
//Attempt to create class of pairs of images with "lifting state up", that is they have no control over the state only the relavant parent component does
//Fischer-Yates Algorithm
var randomArray=function(x){  
        var length=x.length, j, temp, i;
        for(i=length-1; i>0;i--){
            j=Math.floor(Math.random()*(i+1));
            temp=x[i];
            x[i]=x[j];
            x[j]=temp;
        }
        return x;
  };

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(prevState) {
    this.props.onToggleChange(prevState);
  }

  render() {
    const isToggle = this.props.toggle;
    return (
      <div>
      <img className= {isToggle ? 'YES' : 'NO'}
      onClick={this.handleChange}
      src="http://placehold.it/350x150"
      alt='placeholder'
      height='150' width='150'/>
      <img className={isToggle ? 'ON' : 'OFF'}
      onClick={this.handleChange}
      src="http://www.w3schools.com/images/w3schools_green.jpg"
      alt='placeholder'
      height='150' width='150'/>
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {isToggleOnOne: false, isToggleOnTwo: false };
  }

  handleFirstChange(prevState) {
    this.setState({isToggleOnOne: !prevState.isToggleOnOne});
  }

  handleSecondChange(prevState) {
    this.setState({isToggleOnTwo: !prevState.isToggleOnTwo});
  }

  render() {
    const ToggleOnOne = this.state.isToggleOnOne;
    const ToggleOnTwo = this.state.isToggleOnTwo;
    return (
      <div>
        <TemperatureInput
          toggle={ToggleOnOne}
          onToggleChange={this.handleFirstChange} />
        <TemperatureInput
          toggle={ToggleOnTwo}
          onToggleChange={this.handleSecondChange} />
      </div>
    );
  }
}

class Game extends React.Component{
    constructor(props){
        this.state={total: 0}
    }
     handlePairChange(amount) {
    this.setState({total: amount});
  }
    render(){
        return(
            <Calculator amountTotal={this.state.total}/>
            <CheckWin amountTotal={this.state.total}/>
        );}
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
