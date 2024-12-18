const TrackCard = ({ name, handleClick, trackId }) => {
  const handleOnClick = () => {
    handleClick(trackId)
  }
  return (
    <div
      onClick={handleOnClick}
      className="rounded-xl bg-slate-400 p-2 h-[10vh] text-ellipsis overflow-hidden hover:translate-x-6 duration-300 cursor-pointer"
    >
      <label className="text-xl">{name}</label>
    </div>
  )
}
export default TrackCard
