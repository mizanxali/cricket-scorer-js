import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Typography, Button, Table, TableBody, TableCell, TableHead, TableRow, Container } from '@material-ui/core'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'

class Scorecard extends Component {
    newBowlingTeam2 = []
    newBowlingTeam1 = []

    render() {
        this.props.bowlingTeam2.forEach((item) => {
            let index = this.newBowlingTeam2.findIndex((element) => (element.name === item.name))
            if(index === -1) {
                this.newBowlingTeam2.push({...item})
            }
            else {
                this.newBowlingTeam2[index].ballsBowled = item.ballsBowled
                this.newBowlingTeam2[index].runsConceded = item.runsConceded
                this.newBowlingTeam2[index].wicketsTaken = item.wicketsTaken
            }
        })

        this.props.bowlingTeam1.forEach((item) => {
            let index = this.newBowlingTeam1.findIndex((element) => (element.name === item.name))
            if(index === -1) {
                this.newBowlingTeam1.push({...item})
            }
            else {
                this.newBowlingTeam1[index].ballsBowled = item.ballsBowled
                this.newBowlingTeam1[index].runsConceded = item.runsConceded
                this.newBowlingTeam1[index].wicketsTaken = item.wicketsTaken
            }
        })

        return(
            <Container fixed className='Scorecard' style={{marginTop: '30px'}}>
                <Typography variant='h3'>Team 1 Batting Scorecard</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' style={{color: '#fff'}}>Name</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Runs</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Balls</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Fours</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Sixes</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Strike Rate</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.currentInnings === 1 ?
                            this.props.batsman1.onStrike && this.props.totalWickets === this.props.wickets ? null :
                                <TableRow>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman1.name}<span>*</span></TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman1.runsScored}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman1.ballsFaced}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman1.foursHit}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman1.sixesHit}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{((this.props.batsman1.runsScored/this.props.batsman1.ballsFaced)*100).toFixed(2)}</TableCell>
                                </TableRow>
                        : null }
                        {this.props.currentInnings === 1 ?
                            this.props.batsman2.onStrike && this.props.totalWickets === this.props.wickets ? null :
                                <TableRow>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman2.name}<span>*</span></TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman2.runsScored}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman2.ballsFaced}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman2.foursHit}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman2.sixesHit}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{((this.props.batsman2.runsScored/this.props.batsman2.ballsFaced)*100).toFixed(2)}</TableCell>
                                </TableRow>
                        : null }
                        {this.props.battingTeam1.map((batsman) => {
                            return(
                                <TableRow key={batsman.name}>
                                    <TableCell align='center' style={{color: '#808080'}}>{batsman.name}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{batsman.runsScored}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{batsman.ballsFaced}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{batsman.foursHit}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{batsman.sixesHit}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{((batsman.runsScored/batsman.ballsFaced)*100).toFixed(2)}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <br />
                <Typography variant='h3'>Team 2 Bowling Scorecard</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' style={{color: '#fff'}}>Name</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Overs</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Runs</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Wickets</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Economy</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.currentInnings === 1 ?
                        <TableRow>
                            <TableCell align='center' style={{color: this.props.totalBalls === this.props.balls || this.props.totalWickets === this.props.wickets ? '#808080' : '#fff'}}>{this.props.bowler.name}{this.props.totalBalls === this.props.balls || this.props.totalWickets === this.props.wickets ? null : <span>*</span>}</TableCell>
                            <TableCell align='center' style={{color: this.props.totalBalls === this.props.balls || this.props.totalWickets === this.props.wickets ? '#808080' : '#fff'}}>{Math.floor(this.props.bowler.ballsBowled/6)}.{this.props.bowler.ballsBowled%6}</TableCell>
                            <TableCell align='center' style={{color: this.props.totalBalls === this.props.balls || this.props.totalWickets === this.props.wickets ? '#808080' : '#fff'}}>{this.props.bowler.runsConceded}</TableCell>
                            <TableCell align='center' style={{color: this.props.totalBalls === this.props.balls || this.props.totalWickets === this.props.wickets ? '#808080' : '#fff'}}>{this.props.bowler.wicketsTaken}</TableCell>
                            <TableCell align='center' style={{color: this.props.totalBalls === this.props.balls || this.props.totalWickets === this.props.wickets ? '#808080' : '#fff'}}>{((this.props.bowler.runsConceded)/(this.props.bowler.ballsBowled/6)).toFixed(1)}</TableCell>
                        </TableRow>
                    : null }
                        {this.newBowlingTeam2.map((bowler) => {
                            if(bowler.name !== this.props.bowler.name)
                            return(
                                <TableRow key={bowler.name}>
                                    <TableCell align='center' style={{color: '#808080'}}>{bowler.name}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{Math.floor(bowler.ballsBowled/6)}.{bowler.ballsBowled%6}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{bowler.runsConceded}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{bowler.wicketsTaken}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{((bowler.runsConceded)/(bowler.ballsBowled/6)).toFixed(1)}</TableCell>
                                </TableRow>
                            )
                            else {
                                return null
                            }
                        })}
                    </TableBody>
                </Table>
                <br />
                <Typography variant='h3'>Team 2 Batting Scorecard</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' style={{color: '#fff'}}>Name</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Runs</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Balls</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Fours</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Sixes</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Strike Rate</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.currentInnings === 2 ?
                            this.props.batsman1.onStrike && this.props.totalWickets === this.props.wickets ? null :
                                <TableRow>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman1.name}<span>*</span></TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman1.runsScored}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman1.ballsFaced}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman1.foursHit}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman1.sixesHit}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{((this.props.batsman1.runsScored/this.props.batsman1.ballsFaced)*100).toFixed(2)}</TableCell>
                                </TableRow>
                    : null }
                    {this.props.currentInnings === 2 ?
                            this.props.batsman2.onStrike && this.props.totalWickets === this.props.wickets ? null :
                                <TableRow>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman2.name}<span>*</span></TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman2.runsScored}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman2.ballsFaced}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman2.foursHit}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman2.sixesHit}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{((this.props.batsman2.runsScored/this.props.batsman2.ballsFaced)*100).toFixed(2)}</TableCell>
                                </TableRow>
                    : null }
                        {this.props.battingTeam2.map((batsman) => {
                            return(
                                <TableRow key={batsman.name}>
                                    <TableCell align='center' style={{color: '#808080'}}>{batsman.name}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{batsman.runsScored}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{batsman.ballsFaced}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{batsman.foursHit}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{batsman.sixesHit}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{((batsman.runsScored/batsman.ballsFaced)*100).toFixed(2)}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <br />
                <Typography variant='h3'>Team 1 Bowling Scorecard</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' style={{color: '#fff'}}>Name</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Overs</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Runs</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Wickets</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>Economy</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.currentInnings === 2 ?
                        <TableRow>
                            <TableCell align='center' style={{color: this.props.totalBalls === this.props.balls || this.props.totalWickets === this.props.wickets ? '#808080' : '#fff'}}>{this.props.bowler.name}{this.props.totalBalls === this.props.balls || this.props.totalWickets === this.props.wickets ? null : <span>*</span>}</TableCell>
                            <TableCell align='center' style={{color: this.props.totalBalls === this.props.balls || this.props.totalWickets === this.props.wickets ? '#808080' : '#fff'}}>{Math.floor(this.props.bowler.ballsBowled/6)}.{this.props.bowler.ballsBowled%6}</TableCell>
                            <TableCell align='center' style={{color: this.props.totalBalls === this.props.balls || this.props.totalWickets === this.props.wickets ? '#808080' : '#fff'}}>{this.props.bowler.runsConceded}</TableCell>
                            <TableCell align='center' style={{color: this.props.totalBalls === this.props.balls || this.props.totalWickets === this.props.wickets ? '#808080' : '#fff'}}>{this.props.bowler.wicketsTaken}</TableCell>
                            <TableCell align='center' style={{color: this.props.totalBalls === this.props.balls || this.props.totalWickets === this.props.wickets ? '#808080' : '#fff'}}>{((this.props.bowler.runsConceded)/(this.props.bowler.ballsBowled/6)).toFixed(1)}</TableCell>
                        </TableRow>
                    : null }
                        {this.newBowlingTeam1.map((bowler) => {
                            if(bowler.name !== this.props.bowler.name)
                            return(
                                <TableRow key={bowler.name}>
                                    <TableCell align='center' style={{color: '#808080'}}>{bowler.name}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{Math.floor(bowler.ballsBowled/6)}.{bowler.ballsBowled%6}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{bowler.runsConceded}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{bowler.wicketsTaken}</TableCell>
                                    <TableCell align='center' style={{color: '#808080'}}>{((bowler.runsConceded)/(bowler.ballsBowled/6)).toFixed(1)}</TableCell>
                                </TableRow>
                            )
                            else {
                                return null
                            }
                        })}
                    </TableBody>
                </Table>
                <Link to='/match' style={{textDecoration: 'none'}}><Button startIcon={<ArrowBackRoundedIcon />} variant='contained' color='secondary' style={{marginTop: '30px'}}>Back</Button></Link>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentInnings: state.currentInnings,
        totalBalls: state.totalBalls,
        totalWickets: state.totalWickets,
        score: state.score,
        wickets: state.wickets,
        balls: state.balls,
        batsman1: {...state.batsman1},
        batsman2: {...state.batsman2},
        bowler: {...state.bowler},
        battingTeam1: [...state.battingTeam1],
        bowlingTeam2: [...state.bowlingTeam2],
        battingTeam2: [...state.battingTeam2],
        bowlingTeam1: [...state.bowlingTeam1]
    }
}

export default connect(mapStateToProps)(Scorecard)