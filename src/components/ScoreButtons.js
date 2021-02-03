import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'
import { Button, ButtonGroup, Typography, Checkbox, FormControlLabel } from '@material-ui/core'

class ScoreButtons extends Component {
    state = {
        isNoBallChecked: false
    }

    onNoBallCheckedHandler = (event) => {
        this.setState({isNoBallChecked: event.target.checked})
    }

    render() {
        return (
            <div className='ScoreButtons' style={{margin: '30px auto'}}>
                {(this.props.currentInnings === 1) && ((this.props.balls === this.props.totalBalls) || (this.props.wickets === this.props.totalWickets)) ? <Typography variant='h5' color='primary'>INNINGS OVER! <span style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() => this.props.onStartSecondInnings(this.props.score, this.props.totalBalls, this.props.totalWickets)}>Click here to start new innings.</span></Typography> : null}
                {(this.props.currentInnings === 2) && (this.props.score >= this.props.target) ? <Typography variant='h5' color='primary'>MATCH OVER! {this.props.team2Name} win by {this.props.totalWickets - this.props.wickets} wickets.</Typography> : null}
                {(this.props.currentInnings === 2) && ((this.props.balls === this.props.totalBalls) || (this.props.wickets === this.props.totalWickets)) && (this.props.score<this.props.target) ? <Typography variant='h5' color='primary'>MATCH OVER! {this.props.team1Name} win by {this.props.target - this.props.score - 1} runs.</Typography> : null}
                <br />
                <ButtonGroup>
                <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={(this.props.balls === this.props.totalBalls) || (this.props.wickets === this.props.totalWickets) || (this.props.target && this.props.score >= this.props.target)} onClick={this.state.isNoBallChecked ? () => this.props.onNoBallBowled(0) : () => this.props.onRunsScored(0)}>0</Button>
                    <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={(this.props.balls === this.props.totalBalls) || (this.props.wickets === this.props.totalWickets) || (this.props.target && this.props.score >= this.props.target)} onClick={this.state.isNoBallChecked ? () => this.props.onNoBallBowled(1) : () => this.props.onRunsScored(1)}>1</Button>
                    <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={(this.props.balls === this.props.totalBalls) || (this.props.wickets === this.props.totalWickets) || (this.props.target && this.props.score >= this.props.target)} onClick={this.state.isNoBallChecked ? () => this.props.onNoBallBowled(2) : () => this.props.onRunsScored(2)}>2</Button>
                    <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={(this.props.balls === this.props.totalBalls) || (this.props.wickets === this.props.totalWickets) || (this.props.target && this.props.score >= this.props.target)} onClick={this.state.isNoBallChecked ? () => this.props.onNoBallBowled(3) : () => this.props.onRunsScored(3)}>3</Button>
                    <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={(this.props.balls === this.props.totalBalls) || (this.props.wickets === this.props.totalWickets) || (this.props.target && this.props.score >= this.props.target)} onClick={this.state.isNoBallChecked ? () => this.props.onNoBallBowled(4) : () => this.props.onRunsScored(4)}>4</Button>
                    <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={(this.props.balls === this.props.totalBalls) || (this.props.wickets === this.props.totalWickets) || (this.props.target && this.props.score >= this.props.target)} onClick={this.state.isNoBallChecked ? () => this.props.onNoBallBowled(6) : () => this.props.onRunsScored(6)}>6</Button>
                </ButtonGroup>
                <br />
                <ButtonGroup>
                    <Button style={{fontWeight: 'bold', marginTop: '3px'}} variant='contained'color='primary' disabled={(this.state.isNoBallChecked) || (this.props.balls === this.props.totalBalls) || (this.props.wickets === this.props.totalWickets) || (this.props.target && this.props.score >= this.props.target)} onClick={() => this.props.onWideBallBowled()}>WIDE</Button>
                    <Button style={{fontWeight: 'bold', marginTop: '3px'}} variant='contained' color='primary' disabled={(this.state.isNoBallChecked) || (this.props.balls === this.props.totalBalls) || (this.props.wickets === this.props.totalWickets) || (this.props.target && this.props.score >= this.props.target)} onClick={() => this.props.onWicketTaken()}>W</Button>
                </ButtonGroup>
                <br />
                <FormControlLabel control={<Checkbox color='primary' checked={this.state.isNoBallChecked} onChange={this.onNoBallCheckedHandler} name="noball" />} label="NO BALL" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        team1Name: state.team1,
        team2Name: state.team2,
        currentInnings: state.currentInnings,
        target: state.target,
        score: state.score,
        totalWickets: state.totalWickets,
        totalBalls: state.totalBalls,
        wickets: state.wickets,
        balls: state.balls
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRunsScored: (runs) => dispatch({type: actionTypes.RUNS_SCORED, payload: {runsScored: runs}}),
        onWicketTaken: () => dispatch({type: actionTypes.WICKET_TAKEN}),
        onStartSecondInnings: (finalScore, totalBalls, totalWickets) => dispatch({type: actionTypes.START_SECOND_INNINGS, payload: {target: finalScore+1, totalBalls: totalBalls, totalWickets: totalWickets}}),
        onWideBallBowled: () => dispatch({type: actionTypes.WIDE_BALL_BOWLED}),
        onNoBallBowled: (runs) => dispatch({type: actionTypes.NO_BALL_BOWLED, payload: {runsScored: runs}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreButtons)