import * as actionTypes from './actions'

const initialState = {
    team1: 'Dummy Team 1',
    team2: 'Dummy Team 2',
    currentInnings: 1,
    target: null,
    totalWickets: 10,
    totalBalls: 20*6,
    ballByBall: [],
    score: 0,
    wickets: 0,
    balls: 0,
    batsman1: {
        name: 'Dummy Batsman',
        runsScored: 0,
        ballsFaced: 0,
        foursHit: 0,
        sixesHit: 0,
        onStrike: true
    },
    batsman2: {
        name: 'Dummy Batsman',
        runsScored: 0,
        ballsFaced: 0,
        foursHit: 0,
        sixesHit: 0,
        onStrike: false
    },
    bowler: {
        name: 'Dummy Bowler',
        ballsBowled: 0,
        runsConceded: 0,
        wicketsTaken: 0
    },
    battingTeam: [],
    bowlingTeam: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.START_MATCH: {
            return {
                team1: action.payload.team1,
                team2: action.payload.team2,
                currentInnings: 1,
                target: null,
                totalWickets: action.payload.wickets,
                totalBalls: action.payload.overs*6,
                ballByBall: [],
                score: 0,
                wickets: 0,
                balls: 0,
                batsman1: {
                    name: action.payload.openingStriker,
                    runsScored: 0,
                    ballsFaced: 0,
                    foursHit: 0,
                    sixesHit: 0,
                    onStrike: true
                },
                batsman2: {
                    name: action.payload.openingNonStriker,
                    runsScored: 0,
                    ballsFaced: 0,
                    foursHit: 0,
                    sixesHit: 0,
                    onStrike: false
                },
                bowler: {
                    name: action.payload.openingBowler,
                    ballsBowled: 0,
                    runsConceded: 0,
                    wicketsTaken: 0
                },
                battingTeam1: [],
                bowlingTeam2: [],
                battingTeam2: [],
                bowlingTeam1: []
            }
        }

        case actionTypes.RUNS_SCORED: {
            //copy batsmen and bowler into new objects
            let updatedBatsman1 = {...state.batsman1}
            let updatedBatsman2 = {...state.batsman2}
            let updatedBowler = {...state.bowler}
            let upBowler = null

            //update batsmen
            if(updatedBatsman1.onStrike) {
                updatedBatsman1.runsScored += action.payload.runsScored
                updatedBatsman1.ballsFaced ++
                if(action.payload.runsScored === 4)
                    updatedBatsman1.foursHit ++
                if(action.payload.runsScored === 6)
                    updatedBatsman1.sixesHit ++
            }
            if(updatedBatsman2.onStrike) {
                updatedBatsman2.runsScored += action.payload.runsScored
                updatedBatsman2.ballsFaced ++
                if(action.payload.runsScored === 4)
                    updatedBatsman2.foursHit ++
                if(action.payload.runsScored === 6)
                    updatedBatsman2.sixesHit ++
            }

            //update bowler
            updatedBowler.ballsBowled ++
            updatedBowler.runsConceded += action.payload.runsScored
            
            //check for over-up - if true, push over-up bowler to bowlingTeam array, then reset updatedBowler object
            if(((state.balls + 1) % 6) === 0) {
                upBowler = {...updatedBowler}
                if(state.balls !== state.totalBalls - 1) {
                    const newBowlerName = prompt('Over up! Enter new bowler name.')
                    updatedBowler.name = newBowlerName
                    updatedBowler.ballsBowled = 0
                    updatedBowler.runsConceded = 0
                    updatedBowler.wicketsTaken = 0
                    if(state.currentInnings === 1) {
                        state.bowlingTeam2.forEach((item) => {
                            if(item.name === newBowlerName) {
                                updatedBowler.ballsBowled = item.ballsBowled
                                updatedBowler.runsConceded = item.runsConceded
                                updatedBowler.wicketsTaken = item.wicketsTaken
                            }
                        })
                    }
                    else {
                        state.bowlingTeam1.forEach((item) => {
                            if(item.name === newBowlerName) {
                                updatedBowler.ballsBowled = item.ballsBowled
                                updatedBowler.runsConceded = item.runsConceded
                                updatedBowler.wicketsTaken = item.wicketsTaken
                            }
                        })
                    }
                }
            }

            //check for strike rotation
            if((((state.balls + 1) % 6) === 0 && (action.payload.runsScored !== 1 && action.payload.runsScored !== 3)) || (((state.balls + 1) % 6) !== 0 && (action.payload.runsScored === 1 || action.payload.runsScored === 3))) {
                updatedBatsman1.onStrike = !updatedBatsman1.onStrike
                updatedBatsman2.onStrike = !updatedBatsman2.onStrike
            }

            return {
                ...state,
                ballByBall: [...state.ballByBall.slice(0, state.ballByBall.length), action.payload.runsScored, ...state.ballByBall.slice(state.ballByBall.length)],
                score: state.score + action.payload.runsScored,
                balls: state.balls + 1,
                batsman1: updatedBatsman1,
                batsman2: updatedBatsman2,
                bowler: updatedBowler,
                bowlingTeam2: (state.currentInnings === 1 ? (upBowler ? [...state.bowlingTeam2.slice(0, state.bowlingTeam2.length), {...upBowler}, ...state.bowlingTeam2.slice(state.bowlingTeam2.length)] : state.bowlingTeam2) : state.bowlingTeam2 ),
                bowlingTeam1: (state.currentInnings === 2 ? (upBowler ? [...state.bowlingTeam1.slice(0, state.bowlingTeam1.length), {...upBowler}, ...state.bowlingTeam1.slice(state.bowlingTeam1.length)] : state.bowlingTeam1) : state.bowlingTeam1 )
            }
        }

        case actionTypes.WICKET_TAKEN: {
            //copy batsmen and bowler into new objects
            let updatedBatsman1 = {...state.batsman1}
            let updatedBatsman2 = {...state.batsman2}
            let updatedBowler = {...state.bowler}
            let outBatsman = null
            let upBowler = null

            //update out batsman and push him to battingTeam array, then reset updatedBatsman object
            if(updatedBatsman1.onStrike) {
                updatedBatsman1.ballsFaced ++
                outBatsman = {...updatedBatsman1}
                if(state.wickets !== state.totalWickets - 1 && state.balls !== state.totalBalls - 1) {
                    const newBatsmanName = prompt('Out! Enter new batsman name.')
                    updatedBatsman1.name = newBatsmanName
                    updatedBatsman1.runsScored = 0
                    updatedBatsman1.ballsFaced = 0
                    updatedBatsman1.foursHit = 0
                    updatedBatsman1.sixesHit = 0
                }
            }
            if(updatedBatsman2.onStrike) {
                updatedBatsman2.ballsFaced ++
                outBatsman = {...updatedBatsman2}
                if(state.wickets !== state.totalWickets - 1 && state.balls !== state.totalBalls - 1) {
                    const newBatsmanName = prompt('Out! Enter new batsman name.')
                    updatedBatsman2.name = newBatsmanName
                    updatedBatsman2.runsScored = 0
                    updatedBatsman2.ballsFaced = 0
                    updatedBatsman2.foursHit = 0
                    updatedBatsman2.sixesHit = 0
                }
            }

            //update bowler
            updatedBowler.ballsBowled ++
            updatedBowler.wicketsTaken ++

            //check for over-up - if true, push over-up bowler to bowlingTeam array, then reset updatedBowler object
            if(((state.balls + 1) % 6) === 0) {
                upBowler = {...updatedBowler}
                if(state.wickets !== state.totalWickets - 1 && state.balls !== state.totalBalls - 1) {
                    const newBowlerName = prompt('Over up! Enter new bowler name.')
                    updatedBowler.name = newBowlerName
                    updatedBowler.ballsBowled = 0
                    updatedBowler.runsConceded = 0
                    updatedBowler.wicketsTaken = 0
                    if(state.currentInnings === 1) {
                        state.bowlingTeam2.forEach((item) => {
                            if(item.name === newBowlerName) {
                                updatedBowler.ballsBowled = item.ballsBowled
                                updatedBowler.runsConceded = item.runsConceded
                                updatedBowler.wicketsTaken = item.wicketsTaken
                            }
                        })
                    }
                    else {
                        state.bowlingTeam1.forEach((item) => {
                            if(item.name === newBowlerName) {
                                updatedBowler.ballsBowled = item.ballsBowled
                                updatedBowler.runsConceded = item.runsConceded
                                updatedBowler.wicketsTaken = item.wicketsTaken
                            }
                        })
                    }
                }
            }

            //check for strike rotation
            if(((state.balls + 1) % 6) === 0) {
                updatedBatsman1.onStrike = !updatedBatsman1.onStrike
                updatedBatsman2.onStrike = !updatedBatsman2.onStrike
            }

            return {
                ...state,
                ballByBall: [...state.ballByBall.slice(0, state.ballByBall.length), 'W', ...state.ballByBall.slice(state.ballByBall.length)],
                wickets: state.wickets + 1,
                balls: state.balls + 1,
                batsman1: updatedBatsman1,
                batsman2: updatedBatsman2,
                bowler: updatedBowler,
                battingTeam1: (state.currentInnings === 1 ? [...state.battingTeam1.slice(0, state.battingTeam1.length), {...outBatsman}, ...state.battingTeam1.slice(state.battingTeam1.length)] : state.battingTeam1 ),
                battingTeam2: (state.currentInnings === 2 ? [...state.battingTeam2.slice(0, state.battingTeam2.length), {...outBatsman}, ...state.battingTeam2.slice(state.battingTeam2.length)] : state.battingTeam2 ),
                bowlingTeam2: (state.currentInnings === 1 ? (upBowler ? [...state.bowlingTeam2.slice(0, state.bowlingTeam2.length), {...upBowler}, ...state.bowlingTeam2.slice(state.bowlingTeam2.length)] : state.bowlingTeam2) : state.bowlingTeam2 ),
                bowlingTeam1: (state.currentInnings === 2 ? (upBowler ? [...state.bowlingTeam1.slice(0, state.bowlingTeam1.length), {...upBowler}, ...state.bowlingTeam1.slice(state.bowlingTeam1.length)] : state.bowlingTeam1) : state.bowlingTeam1 )
            }
        }

        case actionTypes.WIDE_BALL_BOWLED: {
            return {
                ...state,
                ballByBall: [...state.ballByBall.slice(0, state.ballByBall.length), 'WD', ...state.ballByBall.slice(state.ballByBall.length)],
                score: state.score + 1,
                bowler: {
                    ...state.bowler,
                    runsConceded: state.bowler.runsConceded + 1
                }
            }
        }

        case actionTypes.NO_BALL_BOWLED: {
            //copy batsmen and bowler into new objects
            let updatedBatsman1 = {...state.batsman1}
            let updatedBatsman2 = {...state.batsman2}
            let updatedBowler = {...state.bowler}

            //update batsmen
            if(updatedBatsman1.onStrike) {
                updatedBatsman1.runsScored += action.payload.runsScored
                updatedBatsman1.ballsFaced ++
                if(action.payload.runsScored === 4)
                    updatedBatsman1.foursHit ++
                if(action.payload.runsScored === 6)
                    updatedBatsman1.sixesHit ++
            }
            if(updatedBatsman2.onStrike) {
                updatedBatsman2.runsScored += action.payload.runsScored
                updatedBatsman2.ballsFaced ++
                if(action.payload.runsScored === 4)
                    updatedBatsman2.foursHit ++
                if(action.payload.runsScored === 6)
                    updatedBatsman2.sixesHit ++
            }

            //update bowler
            updatedBowler.runsConceded += (action.payload.runsScored + 1)

            //check for strike rotation
            if(action.payload.runsScored === 1 || action.payload.runsScored === 3) {
                updatedBatsman1.onStrike = !updatedBatsman1.onStrike
                updatedBatsman2.onStrike = !updatedBatsman2.onStrike
            }

            return {
                ...state,
                ballByBall: [...state.ballByBall.slice(0, state.ballByBall.length), 'NB+' + action.payload.runsScored.toString(), ...state.ballByBall.slice(state.ballByBall.length)],
                score: state.score + action.payload.runsScored + 1,
                batsman1: updatedBatsman1,
                batsman2: updatedBatsman2,
                bowler: updatedBowler,
            }
        }

        case actionTypes.START_SECOND_INNINGS: {
            const openingStriker = prompt('Enter opening batsman name (striker).')
            const openingNonStriker = prompt('Enter opening batsman name (non-striker).')
            const openingBowler = prompt('Enter opening bowler name.')
            return {
                ...state,
                currentInnings: 2,
                target: action.payload.target,
                totalWickets: action.payload.totalWickets,
                totalBalls: action.payload.totalBalls,
                ballByBall: [],
                score: 0,
                wickets: 0,
                balls: 0,
                batsman1: {
                    name: openingStriker,
                    runsScored: 0,
                    ballsFaced: 0,
                    foursHit: 0,
                    sixesHit: 0,
                    onStrike: true
                },
                batsman2: {
                    name: openingNonStriker,
                    runsScored: 0,
                    ballsFaced: 0,
                    foursHit: 0,
                    sixesHit: 0,
                    onStrike: false
                },
                bowler: {
                    name: openingBowler,
                    ballsBowled: 0,
                    runsConceded: 0,
                    wicketsTaken: 0
                },
                battingTeam1: (state.currentInnings === 1 ? [...state.battingTeam1.slice(0, state.battingTeam1.length), {...state.batsman1}, {...state.batsman2}, ...state.battingTeam1.slice(state.battingTeam1.length)] : state.battingTeam1 ),
                battingTeam2: (state.currentInnings === 2 ? [...state.battingTeam2.slice(0, state.battingTeam2.length), {...state.batsman1}, {...state.batsman2}, ...state.battingTeam2.slice(state.battingTeam2.length)] : state.battingTeam2 ),
                bowlingTeam2: (state.currentInnings === 1 ? [...state.bowlingTeam2.slice(0, state.bowlingTeam2.length), {...state.bowler}, ...state.bowlingTeam2.slice(state.bowlingTeam2.length)] : state.bowlingTeam2 ),
                bowlingTeam1: (state.currentInnings === 2 ? [...state.bowlingTeam1.slice(0, state.bowlingTeam1.length), {...state.bowler}, ...state.bowlingTeam1.slice(state.bowlingTeam1.length)] : state.bowlingTeam1 )
            }
        }
            
        default:
            return state
    }
}

export default reducer