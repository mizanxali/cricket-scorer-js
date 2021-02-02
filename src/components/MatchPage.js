import { Button, Container } from '@material-ui/core'
import LiveScore from './LiveScore'
import ScoreButtons from './ScoreButtons'
import { Link } from 'react-router-dom'
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded'

const MatchPage = () => {
  return (
    <Container className="MatchPage">
      <LiveScore />
      <ScoreButtons />
      <Link to='/scorecard' style={{textDecoration: 'none'}}><Button startIcon={<AssessmentRoundedIcon />} variant='contained' color='secondary'>Scorecard</Button></Link>
      <br />
      <a href='/cricket-scorer-js' style={{textDecoration: 'none'}}><Button variant='text' style={{color: 'red', marginTop: '30px'}}>START NEW MATCH</Button></a>
    </Container>
  )
}

export default MatchPage
