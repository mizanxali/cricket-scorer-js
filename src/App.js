import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { orange, purple } from '@material-ui/core/colors'
import { Route } from 'react-router'
import './App.css'
import Homepage from './components/Homepage/Homepage'
import Scorecard from './components/Scorecard/Scorecard'

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
        <Route path='/' exact component={Homepage} />
        <Route path='/scorecard' exact component={Scorecard} />
      </ThemeProvider>
    </div>
  )
}

export default App
