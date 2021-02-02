import { TextField, Button, Container, Typography, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import * as actionTypes from '../../store/actions'
import { connect } from 'react-redux'
import React, { Component } from 'react'

const styles = {
    input: {
      color: "white"
    }
  };

class LandingPage extends Component {
    state = {
        overs: 20,
        wickets: 10,
        openingStriker: 'R Sharma',
        openingNonStriker: 'S Dhawan',
        openingBowler: 'M Starc'
    }

    onOversChangedHandler = (event) => {
        this.setState({
            overs: event.target.value
        })
    }

    onWicketsChangedHandler = (event) => {
        this.setState({
            wickets: event.target.value
        })
    }

    onOpeningStrikerChangedHandler = (event) => {
        this.setState({
            openingStriker: event.target.value
        })
    }

    onOpeningNonStrikerChangedHandler = (event) => {
        this.setState({
            openingNonStriker: event.target.value
        })
    }

    onOpeningBowlerChangedHandler = (event) => {
        this.setState({
            openingBowler: event.target.value
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <Container className="LandingPage">
              <Typography variant='h3'>CRICKET SCORER</Typography>
              <Typography variant='h6'>Start a new match in under 30 seconds!</Typography>
              <br />
              <form>
                  <label style={{display: 'block', margin: 'auto'}} htmlFor='overs'>Overs</label>
                  <input style={{display: 'block', margin: '10px auto 20px'}} id='overs' type='number' value={this.state.overs} onChange={this.onOversChangedHandler} />
                  <label style={{display: 'block', margin: 'auto'}} htmlFor='wickets'>Wickets</label>
                  <input style={{display: 'block', margin: '10px auto 20px'}} id='wickets' type='number' value={this.state.wickets} onChange={this.onWicketsChangedHandler} />
                  <label style={{display: 'block', margin: 'auto'}} htmlFor='openingStriker'>Opening Batsman (Striker)</label>
                  <TextField style={{display: 'block', margin: '10px auto 20px'}} InputProps={{className: classes.input}} id='openingStriker' type='text' value={this.state.openingStriker} onChange={this.onOpeningStrikerChangedHandler} />
                  <label style={{display: 'block', margin: 'auto'}} htmlFor='openingNonStriker'>Opening Batsman (Non-Striker)</label>
                  <TextField style={{display: 'block', margin: '10px auto 20px'}} InputProps={{className: classes.input}} id='openingNonStriker' type='text' value={this.state.openingNonStriker} onChange={this.onOpeningNonStrikerChangedHandler} />
                  <label style={{display: 'block', margin: 'auto'}} htmlFor='openingBowler'>Opening Bowler</label>
                  <TextField style={{display: 'block', margin: '10px auto 20px'}} InputProps={{className: classes.input}} id='openingBowler' type='text' value={this.state.openingBowler} onChange={this.onOpeningBowlerChangedHandler} />
              </form>
              <Link to='/match' style={{textDecoration: 'none'}}><Button onClick={() => this.props.onStartMatch({...this.state})} variant='contained' color='secondary'>START MATCH</Button></Link>
            </Container>
          )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onStartMatch: (matchConfig) => dispatch({type: actionTypes.START_MATCH, payload: matchConfig})
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(LandingPage))
