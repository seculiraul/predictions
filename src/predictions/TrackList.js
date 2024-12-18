import { useNavigate } from 'react-router'
import TrackCard from '../components/TrackCard'
import useGetTracks from './hooks/useGetTracks'

const TrackList = () => {
  const tracks = useGetTracks()
  const navigate = useNavigate()

  const handleClick = (trackId) => {
    navigate(`/races/${trackId}`)
  }
  const mapTrackNames = tracks.map((track) => {
    return (
      <TrackCard
        handleClick={handleClick}
        key={track.id}
        name={track.name}
        trackId={track.id}
      />
    )
  })
  return (
    <div className="flex flex-col mt-4 px-4 gap-5 justify-center max-w-[400px] sm:max-w-[500px]">
      {mapTrackNames}
    </div>
  )
}

export default TrackList
