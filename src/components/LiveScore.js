import React from 'react'
import { connect } from 'react-redux'
import { Card, CardContent, Typography } from '@material-ui/core'
import 'fontsource-roboto'
import SportsCricketRoundedIcon from '@material-ui/icons/SportsCricketRounded'
import SportsBaseballRoundedIcon from '@material-ui/icons/SportsBaseballRounded'

const LiveScore = (props) => {
    return (
        <div className='LiveScore'>
            <Card variant='outlined' style={{width: '90%', margin: '30px auto', backgroundColor: '#424242', color: '#fff', borderRadius: '25px'}}>
                <CardContent>
                    <Typography variant='body1'>INNINGS {props.currentInnings} {props.target ? <span> - TARGET: {props.target}</span> : <span> ({props.totalBalls/6} overs)</span>}</Typography>
                    <br />
                    <Typography variant='h4' style={{fontWeight: 'bold'}}>{props.target ?  (props.team2Name.substring(0,3).toUpperCase()) : (props.team1Name.substring(0,3).toUpperCase())} {props.score}-{props.wickets} ({Math.floor(props.balls/6)}.{props.balls%6})</Typography>
                    <br />
                    <Typography variant='h6'><SportsCricketRoundedIcon style={{marginRight: '12px'}} />{props.batsman1.name} : {props.batsman1.runsScored}({props.batsman1.ballsFaced}) {props.batsman1.onStrike && props.totalWickets !== props.wickets ? <span>*</span> : null} </Typography>
                    <Typography variant='h6'><SportsCricketRoundedIcon style={{marginRight: '12px'}} />{props.batsman2.name} : {props.batsman2.runsScored}({props.batsman2.ballsFaced}) {props.batsman2.onStrike && props.totalWickets !== props.wickets ? <span>*</span> : null} </Typography>
                    <br />
                    <Typography variant='h6'><SportsBaseballRoundedIcon style={{marginRight: '12px'}} />{props.bowler.name} : {props.bowler.wicketsTaken}/{props.bowler.runsConceded} ({Math.floor(props.bowler.ballsBowled/6)}.{props.bowler.ballsBowled%6})</Typography>
                    {(props.target) && (props.target>props.score) && ((props.balls !== props.totalBalls) && (props.wickets !== props.totalWickets)) ? <br /> : null}
                    {(props.target) && (props.target>props.score) && ((props.balls !== props.totalBalls) && (props.wickets !== props.totalWickets)) ? <Typography variant='body1'>TO WIN: {props.target - props.score} off {props.totalBalls - props.balls} balls</Typography> : null}
                </CardContent>
            </Card>
            <div>
                <Typography variant='h6'>Ball by Ball:</Typography>
                <Typography variant='body1'>{props.ballByBall.join(' ')}</Typography>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        team1Name: state.team1,
        team2Name: state.team2,
        currentInnings: state.currentInnings,
        target: state.target,
        totalBalls: state.totalBalls,
        totalWickets: state.totalWickets,
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