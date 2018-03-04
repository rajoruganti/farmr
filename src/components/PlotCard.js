import React from 'react'
//import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
//import { login, logout, isLoggedIn } from '../utils/AuthService';
import RazorPay from '../utils/RazorPay'


class PlotCard extends React.Component {

  render () {
    const amt = this.props.plot.price;
    console.log("amt:"+amt)
    const someOptions = {amount: amt, callback_url: 'http://localhost:3000/callback'}; // somewhere in the render method.
    return (
      <div>
        <Card>
          <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.plot.name}</CardTitle>
            <CardSubtitle>{this.props.plot.location}</CardSubtitle>
            <CardText>{this.props.plot.description}</CardText>
            <CardText>{this.props.plot.price}</CardText>
            <RazorPay rzp1={someOptions} />
          </CardBody>
        </Card>
      </div>
    );

  }
}
export default PlotCard;
