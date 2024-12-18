import { useEffect, useState } from 'react'
import useGetTeams from './hooks/useGetTeams'
import axios from 'axios'
import { useParams } from 'react-router'

const PredictionForm = () => {
  const { id: trackName } = useParams()
  const [pos1, setPos1] = useState('')
  const [pos2, setPos2] = useState('')
  const [pos3, setPos3] = useState('')

  const [constructor, setConstructor] = useState('')

  const [dnf, setDnf] = useState('')
  const [last, setLast] = useState('')

  const [mode, setMode] = useState('')

  const teams = useGetTeams()

  const drivers = [
    { name: 'Driver 1', value: 'd1' },
    { name: 'Driver 2', value: 'd2' },
    { name: 'Driver 3', value: 'd3' },
  ]

  useEffect(() => {
    const fetchData = async () => {
      console.log(trackName)
      const url = 'http://localhost:3000/users'
      try {
        // AICI O SA SE FACA FETCH DOAR LA UN USER ADICA CEL LOGAT
        const { data } = await axios.get(url)

        if (data?.predictions?.some((el) => el.trackName === trackName)) {
          console.log('edit mode')
          setMode('edit')
        } else {
          setMode('new')
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  const options = [
    <option value="" key="default" disabled>
      Select a driver
    </option>,
    ...drivers.map((driver, i) => {
      return (
        <option key={i} value={driver.value}>
          {driver.name}
        </option>
      )
    }),
  ]

  const teamOptions = [
    <option value="" key="default" disabled>
      Select a team
    </option>,
    ...teams.map((team, i) => {
      return (
        <option key={i} value={team.value}>
          {team.name}
        </option>
      )
    }),
  ]

  const handleP1Change = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setPos1(e.target.value)
  }
  const handleP2Change = (e) => {
    e.preventDefault()
    setPos2(e.target.value)
  }
  const handleP3Change = (e) => {
    e.preventDefault()
    setPos3(e.target.value)
  }

  const predict = (e) => {
    e.preventDefault()

    console.log({
      trackName,
      pos1,
      pos2,
      pos3,
      constructor,
      dnf,
      last,
    })
  }

  return (
    <div className="flex flex-col items-center">
      <form>
        <div className="flex flex-col gap-2 p-2 my-10">
          <div className="flex flex-col">
            <label className="py-2 text-xl font-bold">P1</label>
            <select
              className="bg-gray-300 p-2"
              value={pos1}
              onChange={(e) => handleP1Change(e)}
            >
              {options}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-xl font-bold">P2</label>
            <select
              className="bg-gray-300 p-2"
              value={pos2}
              onChange={(e) => handleP2Change(e)}
            >
              {options}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-xl font-bold">P3</label>
            <select
              className="bg-gray-300 p-2"
              value={pos3}
              onChange={(e) => handleP3Change(e)}
            >
              {options}
            </select>
          </div>
        </div>
        <div className="p-2 my-10">
          <div className="flex flex-col">
            <label className="py-2 text-xl font-bold">Constructor</label>
            <select
              className="bg-gray-300 p-2"
              value={constructor}
              onChange={(e) => setConstructor(e.target.value)}
            >
              {teamOptions}
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2 my-10">
          <div className="flex flex-col">
            <label className="py-2 text-xl font-bold">DNF</label>
            <select
              className="bg-gray-300 p-2"
              value={dnf}
              onChange={(e) => setDnf(e.target.value)}
            >
              {options}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-xl font-bold">Last</label>
            <select
              className="bg-gray-300 p-2"
              value={last}
              onChange={(e) => setLast(e.target.value)}
            >
              {options}
            </select>
          </div>
        </div>
        <button
          className="p-2 px-4 w-full mx-auto rounded-md bg-gray-200 hover:bg-gray-300 duration-300"
          onClick={(e) => predict(e)}
        >
          Predict
        </button>
      </form>
    </div>
  )
}

export default PredictionForm
