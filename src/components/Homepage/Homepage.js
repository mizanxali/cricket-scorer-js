import LiveScore from '../LiveScore/LiveScore'
import ScoreButtons from '../ScoreButtons/ScoreButtons'

const Homepage = () => {
  return (
    <div className="Homepage">
      <LiveScore />
      <ScoreButtons />
    </div>
  )
}

export default Homepage
