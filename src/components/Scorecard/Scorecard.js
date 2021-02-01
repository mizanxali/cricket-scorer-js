import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Typography, Button, Table, TableBody, TableCell, TableHead, TableRow, Container } from '@material-ui/core'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'

class Scorecard extends Component {
    render() {
        return(
            <Container className='Scorecard' style={{marginTop: '30px'}}>
                <Typography variant='h3'>Batting Scorecard</Typography>
                <Table width='100%'>
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
                        <TableRow>
                            <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman1.name}*</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman1.runsScored}</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman1.ballsFaced}</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman1.foursHit}</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman1.sixesHit}</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>{((this.props.batsman1.runsScored/this.props.batsman1.ballsFaced)*100).toFixed(2)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman2.name}*</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman2.runsScored}</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman2.ballsFaced}</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman2.foursHit}</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>{this.props.batsman2.sixesHit}</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>{((this.props.batsman2.runsScored/this.props.batsman2.ballsFaced)*100).toFixed(2)}</TableCell>
                        </TableRow>
                        {this.props.battingTeam.map((batsman) => {
                            return(
                                <TableRow>
                                    <TableCell align='center' style={{color: '#fff'}}>{batsman.name}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{batsman.runsScored}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{batsman.ballsFaced}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{batsman.foursHit}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{batsman.sixesHit}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{((batsman.runsScored/batsman.ballsFaced)*100).toFixed(2)}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <br />
                <Typography variant='h3'>Bowling Scorecard</Typography>
                <Table width='100%'>
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
                        <TableRow>
                            <TableCell align='center' style={{color: '#fff'}}>{this.props.bowler.name}*</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>{Math.floor(this.props.bowler.ballsBowled/6)}.{this.props.bowler.ballsBowled%6}</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>{this.props.bowler.runsConceded}</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>{this.props.bowler.wicketsTaken}</TableCell>
                            <TableCell align='center' style={{color: '#fff'}}>{(this.props.bowler.runsConceded)/(this.props.bowler.ballsBowled/6)}</TableCell>
                        </TableRow>
                        {this.props.bowlingTeam.map((bowler) => {
                            return(
                                <TableRow>
                                    <TableCell align='center' style={{color: '#fff'}}>{bowler.name}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{Math.floor(bowler.ballsBowled/6)}.{bowler.ballsBowled%6}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{bowler.runsConceded}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{bowler.wicketsTaken}</TableCell>
                                    <TableCell align='center' style={{color: '#fff'}}>{((bowler.runsConceded)/(bowler.ballsBowled/6)).toFixed(1)}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <Link to='/' style={{textDecoration: 'none'}}><Button startIcon={<ArrowBackRoundedIcon />} variant='contained' color='secondary' style={{marginTop: '30px'}}>Back</Button></Link>
            </Container>
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