import { Button, Container, Typography } from '@material-ui/core'
import LiveScore from '../LiveScore/LiveScore'
import ScoreButtons from '../ScoreButtons/ScoreButtons'
import { Link } from 'react-router-dom'
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded'

const Homepage = () => {
  return (
    <Container className="Homepage">
      <Typography variant='h3'>CRICKET SCORER</Typography>
      <LiveScore />
      <ScoreButtons />
      <Link to='/scorecard' style={{textDecoration: 'none'}}><Button startIcon={<AssessmentRoundedIcon />} variant='contained' color='secondary'>Scorecard</Button></Link>
    </Container>
  )
}

export default Homepage
