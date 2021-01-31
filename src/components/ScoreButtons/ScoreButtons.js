import React from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'

const ScoreButtons = (props) => {
    return (
        <div>
            <button onClick={() => props.onRunsScored(0)}>0</button>
            <button onClick={() => props.onRunsScored(1)}>1</button>
            <button onClick={() => props.onRunsScored(2)}>2</button>
            <button onClick={() => props.onRunsScored(3)}>3</button>
            <button onClick={() => props.onRunsScored(4)}>4</button>
            <button onClick={() => props.onRunsScored(6)}>6</button>
            <button onClick={() => props.onWicketTaken()}>W</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRunsScored: (runs) => dispatch({type: actionTypes.RUNS_SCORED, payload: {runsScored: runs}}),
        onWicketTaken: () => dispatch({type: actionTypes.WICKET_TAKEN})
    }
}

export default connect(null, mapDispatchToProps)(ScoreButtons)