import React, { Component } from 'react';
//import { Link } from 'react-router';
import Nav from './Nav';
import { isLoggedIn } from '../utils/AuthService';
import { getPublicPlotData } from '../utils/plots-api';
import { Container, Row, Col } from 'reactstrap';
//import PropTypes from 'prop-types';
import PlotCard from './PlotCard';


class PublicListings extends Component {

  constructor() {
    super()
    this.state = { plots: [] };
  }

  getPublicListings() {
    getPublicPlotData().then((plots) => {
      this.setState({ plots });
    });
  }

  componentDidMount() {
    this.getPublicListings();
  }

  render() {

    const { plots }  = this.state;
    let plotCards = plots.map(plot =>{
      return (
        <Col key={plot._id} sm="4">
        <PlotCard plot={plot}/>
        </Col>
      )
    })
    return (
      <div>
        <Nav />
        <h3 className="text-center">Start</h3>
        <hr/>

          <Container>
            <Row>
              {plotCards}
              </Row>
          </Container>

        <div className="col-sm-12">
          { isLoggedIn() ?
          <div>Open</div> : <div className="jumbotron text-center"><h2>Locked</h2></div>
          }
        </div>
      </div>
    );
  }
}

export default PublicListings;
