import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import TrackCard from './components/TrackCard'
import PredictionForm from './predictions/PredictionForm'
import TrackList from './predictions/TrackList'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="races" element={<TrackList />} />
        <Route path="races/:id" element={<PredictionForm />} />
      </Routes>
    </>
  )
}

export default App
