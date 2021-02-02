import React from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import { Button, ButtonGroup } from '@material-ui/core'

const ScoreButtons = (props) => {
    return (
        <div className='ScoreButtons' style={{margin: '30px auto'}}>
            {(props.currentInnings === 1) && ((props.balls === props.totalBalls) || (props.wickets === props.totalWickets)) ? <h3 onClick={() => props.onStartSecondInnings(props.score, props.totalBalls, props.totalWickets)}>INNINGS OVER! Click here to start new innings.</h3> : null}
            {(props.currentInnings === 2) && (props.score >= props.target) ? <h3>MATCH OVER! TEAM 2 WINS BY {props.totalWickets - props.wickets} WICKETS! <a href='/'>CLICK HERE TO START NEW MATCH</a></h3> : null}
            {(props.currentInnings === 2) && ((props.balls === props.totalBalls) || (props.wickets === props.totalWickets)) && (props.score<props.target) ? <h3>MATCH OVER! TEAM 1 WINS BY {props.target - props.score - 1} RUNS! <a href='/'>CLICK HERE TO START NEW MATCH</a></h3> : null}
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