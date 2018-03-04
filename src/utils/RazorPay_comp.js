import React from 'react';
import { Button } from 'reactstrap';

export default class RazorPay extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rzp1: null //holds your external library instance
      //your initial state if any
    }
  }
  componentDidMount(){ //you can also keep this code in componentWillMount()
    var options = {
      "key": "rzp_test_n8fR63l93rtm45",
      "amount": "2000", // 2000 paise = INR 20
      "name": "Merchant Name",
      "description": "Purchase Description",
      "image": "/your_logo.png",
      "handler": function (response) {
        alert(response.razorpay_payment_id);
      },
      "prefill": {
        "name": "Your name",
        "email": "your@email.com"
      },
      "notes": {
        "address": "Hello World"
      },
      "theme": {
        "color": "#F37254"
      }
    };
   this.setState({
      rzp1 : new window.Razorpay(options)
   })
  }

  buttonClick(event){
      if(this.state.rzp1){ //sanity check whether library loaded to varibale
         this.state.rzp1.open();
      }
      event.preventDefault();
  }

  render(){
    return(
       <div className="your-container">
          <Button onClick={this.buttonClick.bind(this)}>Get</Button>
       </div>
    )
  }
}
