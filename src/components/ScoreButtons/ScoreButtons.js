import React from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'

const ScoreButtons = (props) => {
    return (
        <div>
            {props.balls === props.totalBalls ? <h3>INNINGS OVER!</h3> : null}
            <button disabled={props.balls === props.totalBalls} onClick={() => props.onRunsScored(0)}>0</button>
            <button disabled={props.balls === props.totalBalls} onClick={() => props.onRunsScored(1)}>1</button>
            <button disabled={props.balls === props.totalBalls} onClick={() => props.onRunsScored(2)}>2</button>
            <button disabled={props.balls === props.totalBalls} onClick={() => props.onRunsScored(3)}>3</button>
            <button disabled={props.balls === props.totalBalls} onClick={() => props.onRunsScored(4)}>4</button>
            <button disabled={props.balls === props.totalBalls} onClick={() => props.onRunsScored(6)}>6</button>
            <button disabled={props.balls === props.totalBalls} onClick={() => props.onWicketTaken()}>W</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        totalBalls: state.totalBalls,
        balls: state.balls
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRunsScored: (runs) => dispatch({type: actionTypes.RUNS_SCORED, payload: {runsScored: runs}}),
        onWicketTaken: () => dispatch({type: actionTypes.WICKET_TAKEN})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreButtons)