import React, { useState, useEffect } from "react"

import Button from "../components/Button"
import Navbar from "../components/Navbar"
// import Switch from "../components/Switch"

import "./Scripts.scss"
import axios from "axios"
import CardScenario from "../components/CardScenario"
import FilterSelect from "../components/FilterSelect"

import { difficulty, numberPlayers } from "../assets/variables/variables"

function Scripts() {
  const [originalScenarios, setOriginalScenarios] = useState([])
  const [scenarios, setScenarios] = useState([])
  const [filteredScenarios, setFilteredScenarios] = useState([])
  const [filteredAuteur, setFilteredAuteur] = useState([])
  const [auteurs, setAuteurs] = useState([])
  const [valueAuteur, setValueAuteur] = useState("---")
  const [valueDifficulty, setValueDifficulty] = useState("---")
  const [valueNumberPlayer, setValueNumberPlayer] = useState("---")
  const [roleGames, setRoleGames] = useState([])
  const [themes, setThemes] = useState([])
  const [valueRoleGame, setValueRoleGame] = useState("---")
  const [valueTheme, setValueTheme] = useState(null)
  // -----------------------------------------------------------------------------------
  // ----fonction filters

  const handleChangeDifficulty = (e) => {
    setValueDifficulty(e.target.value)
  }

  const handleChangeNumberPlayer = (e) => {
    setValueNumberPlayer(e.target.value)
  }

  const handleChangeRoleGame = (e) => {
    setValueRoleGame(e.target.value)
  }

  const handleScenariosFilter = () => {
    //  const newScenarios = originalScenarios
    let newScenarios = JSON.parse(JSON.stringify(originalScenarios))
    // duplication d'un tableau sans pointer vers la meme reference

    if (valueAuteur !== "---") {
      const auteurID = auteurs.filter(
        (auteur) => auteur.name === valueAuteur
      )[0].id
      newScenarios = newScenarios.filter(
        (scenario) => scenario.auteurId === auteurID
      )
    }

    if (valueDifficulty !== "---") {
      newScenarios = newScenarios.filter(
        (scenario) => scenario.level === valueDifficulty
      )
    }

    if (valueNumberPlayer !== "---") {
      if (valueNumberPlayer === "+10") {
        newScenarios = newScenarios.filter(
          (scenario) => parseInt(scenario.nb_players_min) === 10
        )
      } else {
        newScenarios = newScenarios.filter(
          (scenario) =>
            parseInt(scenario.nb_players_min, 10) ===
            parseInt(valueNumberPlayer, 10)
        )
      }
    }

    if (valueRoleGame !== "---") {
      const roleGameID = roleGames.filter(
        (game) => game.name === valueRoleGame
      )[0].id

      newScenarios = newScenarios.filter(
        (scenario) =>
          parseInt(scenario.jeux_de_roleId, 10) === parseInt(roleGameID, 10)
      )
    }

    if (valueTheme !== null) {
      newScenarios = newScenarios.filter(
        (scenario) => scenario.theme === valueTheme
      )
    }
    setScenarios(newScenarios)
  }

  // -----------------------------------------------------------------------------------
  useEffect(() => {
    axios.get("http://localhost:4242/scenarios").then((res) => {
      setScenarios(res.data)
      setOriginalScenarios(res.data)
    })

    axios
      .get("http://localhost:4242/rolegames")
      .then(({ data }) => setRoleGames(data))
      .catch((err) => console.error(err))

    axios
      .get("http://localhost:4242/themes")
      .then(({ data }) => setThemes(data))
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    handleScenariosFilter()
  }, [
    valueAuteur,
    valueDifficulty,
    valueNumberPlayer,
    valueRoleGame,
    valueTheme,
  ])
  // const [selectedId, setSelectedId] = useState(1)
  // const [selectedGenre, setSelectedGenre] = useState("")
  // const [sortedExamples, setSortedExamples] = useState([...examples])
  // const [selectedDate, setSelectedDate] = useState(null)
  // const [sortedVue, setSortedVue] = useState([...examples])

  // const handleSwitch = () => {
  //   setSelectedId((prevSelectedId) => (prevSelectedId === 1 ? 2 : 1))
  // }

  // const handleGenreSelect = (theme) => {
  //   setSelectedGenre(theme)
  // }
  // const handleNewest = () => {
  //   const sortedItems = [...sortedExamples].sort(
  //     (a, b) => new Date(b.date) - new Date(a.date)
  //   )
  //   setSortedExamples(sortedItems)
  //   setSelectedDate(sortedItems[0])
  // }

  // const handleView = () => {
  //   const sortedItem = [...sortedExamples].sort(
  //     (a, b) => parseInt(b.vue) - parseInt(a.vue)
  //   )
  //   setSortedVue(sortedItem)
  // }

  // const mostViewed = sortedVue.length > 0 ? sortedVue[0] : null

  // const selectedData = examples.find((data) => data.id === selectedId)

  return (
    <div className="container">
      <Navbar />
      <header className="Title">
        <h1 className="Scripts">Scripts-Scripts-Scripts-Scripts</h1>
      </header>
      <div className="all">
        <div className="Filter">
          <div className="Type">
            <p>One Shot</p>
            <label className="switch">
              <input type="checkbox"></input>
              <span className="slider"></span>
            </label>
            <p>Campagne</p>
          </div>
          <div className="Button">
            <div>
              <Button
                scenarios={scenarios}
                filteredScenarios={filteredScenarios}
                setFilteredScenarios={setFilteredScenarios}
                themes={themes}
                setThemes={setThemes}
                valueTheme={valueTheme}
                setValueTheme={setValueTheme}
              />
            </div>
          </div>
          <div className="conseiller">
            <button>The newest</button>
            <button>Most populare</button>
            <button>All scénarios</button>
          </div>
          <div className="univers">
            <p>UNIVERSE</p>
            <select value={valueRoleGame} onChange={handleChangeRoleGame}>
              <option>---</option>
              {roleGames[0] &&
                roleGames.map((roleGame) => (
                  <option key={roleGame.id}>{roleGame.name}</option>
                ))}
            </select>
          </div>
          <div className="auteur">
            <p>Autor</p>
            <FilterSelect
              scenarios={scenarios}
              filteredAuteur={filteredAuteur}
              setFilteredAuteur={setFilteredAuteur}
              auteurs={auteurs}
              setAuteurs={setAuteurs}
              valueAuteur={valueAuteur}
              setValueAuteur={setValueAuteur}
            />
          </div>
          <div className="Difficultes">
            <p>Difficulty</p>
            <select value={valueDifficulty} onChange={handleChangeDifficulty}>
              <option>---</option>
              {difficulty.map((item) => (
                <option key={item.id}>{item.nameDiff}</option>
              ))}
            </select>
          </div>
          <div className="nombre">
            <p>Number of player min.</p>
            <select
              value={valueNumberPlayer}
              onChange={handleChangeNumberPlayer}
            >
              <option>---</option>
              {numberPlayers.map((item) => (
                <option key={item.id}>{item.rank}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="try">
          {/* <div className="Card">
            {scenarios.map((scenario) => (
              <div key={scenario.id}>
                <CardScenario scenario={scenario} />
              </div>
            ))}
          </div> */}
          <div className="filtered-scenarios">
            {scenarios.map((scenario) => (
              <div key={scenario.id}>
                <CardScenario scenario={scenario} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scripts
