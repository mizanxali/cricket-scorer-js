import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { orange, purple } from '@material-ui/core/colors'
import { Route } from 'react-router'
import MatchPage from './components/MatchPage'
import Scorecard from './components/Scorecard'
import LandingPage from './components/LandingPage'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: purple[800]
    }
  }
})

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Route path='/' exact component={LandingPage} />
        <Route path='/match' exact component={MatchPage} />
        <Route path='/scorecard' exact component={Scorecard} />
      </ThemeProvider>
    </div>
  )
}

export default App
