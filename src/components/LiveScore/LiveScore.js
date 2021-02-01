import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardContent, Typography } from '@material-ui/core'
import 'fontsource-roboto'
import SportsCricketRoundedIcon from '@material-ui/icons/SportsCricketRounded'
import SportsBaseballRoundedIcon from '@material-ui/icons/SportsBaseballRounded'

class LiveScore extends Component {
    render() {
        return (
            <div className='LiveScore'>
                <Card variant='outlined' style={{width: '90%', margin: '30px auto', backgroundColor: '#424242', color: '#fff', borderRadius: '25px'}}>
                    <CardContent>
                        <Typography variant='h4' style={{fontWeight: 'bold'}}>{this.props.score}-{this.props.wickets} ({Math.floor(this.props.balls/6)}.{this.props.balls%6})</Typography>
                        <br />
                        <Typography variant='h6'><SportsCricketRoundedIcon style={{marginRight: '12px'}} />{this.props.batsman1.name} : {this.props.batsman1.runsScored}({this.props.batsman1.ballsFaced}) {this.props.batsman1.onStrike ? <span>*</span> : null} </Typography>
                        <Typography variant='h6'><SportsCricketRoundedIcon style={{marginRight: '12px'}} />{this.props.batsman2.name} : {this.props.batsman2.runsScored}({this.props.batsman2.ballsFaced}) {this.props.batsman2.onStrike ? <span>*</span> : null} </Typography>
                        <br />
                        <Typography variant='h6'><SportsBaseballRoundedIcon style={{marginRight: '12px'}} />{this.props.bowler.name} : {this.props.bowler.wicketsTaken}/{this.props.bowler.runsConceded} ({Math.floor(this.props.bowler.ballsBowled/6)}.{this.props.bowler.ballsBowled%6})</Typography>
                    </CardContent>
                </Card>
                <div>
                    <Typography variant='h6'>Ball by Ball:</Typography>
                    <Typography variant='body1'>{this.props.ballByBall.join(' ')}</Typography>
                </div>
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