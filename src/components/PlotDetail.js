import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { getPlotDetail } from '../utils/plots-api';

class PlotDetail extends Component {

  constructor() {
    console.log("0");
    super();
    this.state = { jokes: [] };
  }

  getPlotDetail() {
    getPlotDetail().then((jokes) => {
      this.setState({ jokes });
    });
  }

  componentDidMount() {
    console.log("1");
    console.log(this.props);
    this.getPlotDetail();
  }

  render() {

    //const { jokes } = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center">Logged in</h3>
        <hr/>

      
  
        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <h2>View Food Jokes</h2>
            <Link className="btn btn-lg btn-success" to='/'>logged in </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PlotDetail;
