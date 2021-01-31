import React, { Component } from 'react'
import { connect } from 'react-redux'

class Scorecard extends Component {
    render() {
        return(
            <div>
                <h1>Batting Scorecard</h1>
                <table width='100%' style={{border: '1px solid black', textAlign: 'center'}}>
                    <tr>
                        <th>Name</th>
                        <th>Runs</th>
                        <th>Balls</th>
                        <th>Fours</th>
                        <th>Sixes</th>
                        <th>Strike Rate</th>
                    </tr>
                    <tr>
                        <td>{this.props.batsman1.name}*</td>
                        <td>{this.props.batsman1.runsScored}</td>
                        <td>{this.props.batsman1.ballsFaced}</td>
                        <td>{this.props.batsman1.foursHit}</td>
                        <td>{this.props.batsman1.sixesHit}</td>
                        <td>{((this.props.batsman1.runsScored/this.props.batsman1.ballsFaced)*100).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>{this.props.batsman2.name}*</td>
                        <td>{this.props.batsman2.runsScored}</td>
                        <td>{this.props.batsman2.ballsFaced}</td>
                        <td>{this.props.batsman2.foursHit}</td>
                        <td>{this.props.batsman2.sixesHit}</td>
                        <td>{((this.props.batsman2.runsScored/this.props.batsman2.ballsFaced)*100).toFixed(2)}</td>
                    </tr>
                    {this.props.battingTeam.map((batsman) => {
                        return(
                            <tr>
                                <td>{batsman.name}</td>
                                <td>{batsman.runsScored}</td>
                                <td>{batsman.ballsFaced}</td>
                                <td>{batsman.foursHit}</td>
                                <td>{batsman.sixesHit}</td>
                                <td>{((batsman.runsScored/batsman.ballsFaced)*100).toFixed(2)}</td>
                            </tr>
                        )
                    })}
                </table>

                <h1>Bowling Scorecard</h1>
                <table width='100%' style={{border: '1px solid black', textAlign: 'center'}}>
                    <tr>
                        <th>Name</th>
                        <th>Overs</th>
                        <th>Runs</th>
                        <th>Wickets</th>
                        <th>Economy</th>
                    </tr>
                    <tr>
                        <td>{this.props.bowler.name}*</td>
                        <td>{Math.floor(this.props.bowler.ballsBowled/6)}.{this.props.bowler.ballsBowled%6}</td>
                        <td>{this.props.bowler.runsConceded}</td>
                        <td>{this.props.bowler.wicketsTaken}</td>
                        <td>{(this.props.bowler.runsConceded)/(this.props.bowler.ballsBowled/6)}</td>
                    </tr>
                    {this.props.bowlingTeam.map((bowler) => {
                        return(
                            <tr>
                                <td>{bowler.name}</td>
                                <td>{Math.floor(bowler.ballsBowled/6)}.{bowler.ballsBowled%6}</td>
                                <td>{bowler.runsConceded}</td>
                                <td>{bowler.wicketsTaken}</td>
                                <td>{((bowler.runsConceded)/(bowler.ballsBowled/6)).toFixed(1)}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        score: state.score,
        wickets: state.wickets,
        balls: state.balls,
        batsman1: {...state.batsman1},
        batsman2: {...state.batsman2},
        bowler: {...state.bowler},
        battingTeam: [...state.battingTeam],
        bowlingTeam: [...state.bowlingTeam]
    }
}

export default connect(mapStateToProps)(Scorecard)