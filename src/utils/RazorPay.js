import React, {Component} from 'react';
import { Button } from 'reactstrap';

export default class RazorPay extends Component {
    constructor(props){
        super(props);
        this.options = Object.assign(
            {},
            {
                "key": "rzp_test_n8fR63l93rtm45",
                "amount": "2000", // 2000 paise = INR 20
                "name": "Merchant Name",
                "description": "Purchase Description",
                "image": "/your_logo.png",
                "handler": (response) => {
                    alert(response.razorpay_payment_id);
                },
                "prefill": {
                    "name": "Raj",
                    "email": "your@email.co"
                },
                "notes": {
                    "address": "Hello World"
                },
                "theme": {
                    "color": "#F37254"
                }
            },
            props.rzp1 // any options you pass via props will override the defaults
        );
    }

    componentDidMount(){
        this.rzp1 = new window.Razorpay(this.options);
    }

    handleClick = (e) => {
        this.rzp1.open();
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <Button onClick={this.handleClick}>Get</Button>
            </div>
        )
    }
}
