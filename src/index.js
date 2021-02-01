import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store/reducer'
import { BrowserRouter } from 'react-router-dom'

// const totalOvers = prompt('Enter number of overs.')
// const openingStriker = prompt('Enter opening batsman name (striker).')
// const openingNonStriker = prompt('Enter opening batsman name (non-striker).')
// const openingBowler = prompt('Enter opening bowler name.')

const totalOvers = 1
const openingStriker = 'D Warner'
const openingNonStriker = 'C Gayle'
const openingBowler = 'M Starc'
const totalWickets= 2

const initialState = {
  currentInnings: 1,
  target: null,
  totalWickets: totalWickets,
  totalBalls: totalOvers*6,
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
  battingTeam: [],
  bowlingTeam: []
}

const store = createStore(reducer, initialState)

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
)
