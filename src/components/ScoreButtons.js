import React from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'
import { Button, ButtonGroup, Typography } from '@material-ui/core'

const ScoreButtons = (props) => {
    return (
        <div className='ScoreButtons' style={{margin: '30px auto'}}>
            {(props.currentInnings === 1) && ((props.balls === props.totalBalls) || (props.wickets === props.totalWickets)) ? <Typography variant='h5' color='primary'>INNINGS OVER! <span style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() => props.onStartSecondInnings(props.score, props.totalBalls, props.totalWickets)}>Click here to start new innings.</span></Typography> : null}
            {(props.currentInnings === 2) && (props.score >= props.target) ? <Typography variant='h5' color='primary'>MATCH OVER! {props.team2Name} win by {props.totalWickets - props.wickets} wickets.</Typography> : null}
            {(props.currentInnings === 2) && ((props.balls === props.totalBalls) || (props.wickets === props.totalWickets)) && (props.score<props.target) ? <Typography variant='h5' color='primary'>MATCH OVER! {props.team1Name} win by {props.target - props.score - 1} runs.</Typography> : null}
            <br />
            <ButtonGroup>
            <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={(props.balls === props.totalBalls) || (props.wickets === props.totalWickets) || (props.target && props.score >= props.target)} onClick={() => props.onRunsScored(0)}>0</Button>
                <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={(props.balls === props.totalBalls) || (props.wickets === props.totalWickets) || (props.target && props.score >= props.target)} onClick={() => props.onRunsScored(1)}>1</Button>
                <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={(props.balls === props.totalBalls) || (props.wickets === props.totalWickets) || (props.target && props.score >= props.target)} onClick={() => props.onRunsScored(2)}>2</Button>
                <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={(props.balls === props.totalBalls) || (props.wickets === props.totalWickets) || (props.target && props.score >= props.target)} onClick={() => props.onRunsScored(3)}>3</Button>
                <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={(props.balls === props.totalBalls) || (props.wickets === props.totalWickets) || (props.target && props.score >= props.target)} onClick={() => props.onRunsScored(4)}>4</Button>
                <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={(props.balls === props.totalBalls) || (props.wickets === props.totalWickets) || (props.target && props.score >= props.target)} onClick={() => props.onRunsScored(6)}>6</Button>
                <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={(props.balls === props.totalBalls) || (props.wickets === props.totalWickets) || (props.target && props.score >= props.target)} onClick={() => props.onWicketTaken()}>W</Button>
            </ButtonGroup>
        </div>
    )
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
        onStartSecondInnings: (finalScore, totalBalls, totalWickets) => dispatch({type: actionTypes.START_SECOND_INNINGS, payload: {target: finalScore+1, totalBalls: totalBalls, totalWickets: totalWickets}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreButtons)