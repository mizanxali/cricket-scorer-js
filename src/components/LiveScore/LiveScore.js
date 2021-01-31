import React, { Component } from 'react'
import { connect } from 'react-redux'

class LiveScore extends Component {
    render() {
        return (
            <div>
                <h1>Live Score</h1>
                <h2>{this.props.score}-{this.props.wickets} ({Math.floor(this.props.balls/6)}.{this.props.balls%6})</h2>
                <h3>{this.props.batsman1.name} : {this.props.batsman1.runsScored}({this.props.batsman1.ballsFaced}) {this.props.batsman1.onStrike ? <span>*</span> : null} </h3>
                <h3>{this.props.batsman2.name} : {this.props.batsman2.runsScored}({this.props.batsman2.ballsFaced}) {this.props.batsman2.onStrike ? <span>*</span> : null} </h3>
                <h3>Bowler: {this.props.bowler.name} : {this.props.bowler.wicketsTaken}/{this.props.bowler.runsConceded}</h3>
                <p>Ball by ball: {this.props.ballByBall.join(' ')}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ballByBall: state.ballByBall,
        score: state.score,
        wickets: state.wickets,
        balls: state.balls,
        batsman1: {...state.batsman1},
        batsman2: {...state.batsman2},
        bowler: {...state.bowler}
    }
}

export default connect(mapStateToProps)(LiveScore)