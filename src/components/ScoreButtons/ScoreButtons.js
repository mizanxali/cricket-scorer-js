import React from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import { Button, ButtonGroup } from '@material-ui/core'

const ScoreButtons = (props) => {
    return (
        <div className='ScoreButtons' style={{margin: '30px auto'}}>
            {props.balls === props.totalBalls ? <h3>INNINGS OVER!</h3> : null}
            <ButtonGroup>
                <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={props.balls === props.totalBalls} onClick={() => props.onRunsScored(0)}>0</Button>
                <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={props.balls === props.totalBalls} onClick={() => props.onRunsScored(1)}>1</Button>
                <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={props.balls === props.totalBalls} onClick={() => props.onRunsScored(2)}>2</Button>
                <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={props.balls === props.totalBalls} onClick={() => props.onRunsScored(3)}>3</Button>
                <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={props.balls === props.totalBalls} onClick={() => props.onRunsScored(4)}>4</Button>
                <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={props.balls === props.totalBalls} onClick={() => props.onRunsScored(6)}>6</Button>
                <Button style={{fontWeight: 'bold'}} variant='contained' color='primary' disabled={props.balls === props.totalBalls} onClick={() => props.onWicketTaken()}>W</Button>
            </ButtonGroup>
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