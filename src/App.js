import { Route } from 'react-router'
import './App.css'
import Homepage from './components/Homepage/Homepage'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Scorecard from './components/Scorecard/Scorecard'

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Route path='/' exact component={Homepage} />
      <Route path='/scorecard' exact component={Scorecard} />
    </div>
  )
}

export default App
