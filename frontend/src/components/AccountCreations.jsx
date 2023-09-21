import CardScenario from "./CardScenario"
import { useEffect, useContext, useState } from "react"
import MyContext from "./MyContext"
import axios from "axios"
import "./AccountCreations.scss"
import AccountFavoritesMyFavorites from "./AccountFavoritesMyFavorites"
import AccountFavoritesMyViews from "./AccountFavoritesMyViews"
import AccountFavoritesMyComments from "./AccountFavoritesMyComments"
import AccountCreationsInProgress from "./AccountCreationsInProgress"
import AccountCreationsFinished from "./AccountCreationsFinished"

export default function AccountFavorites() {
  const { user } = useContext(MyContext)
  const [scenariosFavorite, setScenariosFavorite] = useState([])
  const [scenariosAvis, setScenariosAvis] = useState([])
  const [campagnesInProgress, setCampagnesInProgress] = useState([])
  const [campagnesFinished, setCampagnesFinished] = useState([])
  const [ongletActif, setOngletActif] = useState(1)
  const [originalScenarios, setOriginalScenarios] = useState([])
  const [scenariosInProgress, setScenariosInProgress] = useState([])
  const [scenariosFinished, setScenariosFinished] = useState([])

  const showTap = (numOnglet) => {
    setOngletActif(numOnglet)
  }

  useEffect(() => {
    axios
      .get(`http://localhost:4242/scenariosInProgress/utilisateur/${user.id}`)
      .then((res) => {
        const inProgress = res.data.filter(
          (item) => parseInt(item.publication_date.slice(0, 4), 10) > 2990
        )
        setScenariosInProgress(inProgress)
        const finished = res.data.filter(
          (item) => parseInt(item.publication_date.slice(0, 4), 10) < 2990
        )
        setScenariosFinished(finished)
      })

    axios
      .get(`http://localhost:4242/campagnesDetailed/auteur/${user.auteurId}`)
      .then(({ data }) => {
        const inProgress = data.filter(
          (item) => parseInt(item.publication_date.slice(0, 4), 10) > 2990
        )
        setCampagnesInProgress(inProgress)
        const finished = data.filter(
          (item) => parseInt(item.publication_date.slice(0, 4), 10) < 2990
        )
        setCampagnesFinished(finished)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="containerCreations">
      <ul>
        <li onClick={() => showTap(1)}>Work in progress</li>
        <li onClick={() => showTap(2)}>Finished</li>
      </ul>

      <div className="containTab">
        {ongletActif === 1 && (
          <AccountCreationsInProgress
            scenariosInProgress={scenariosInProgress}
            campagnesInProgress={campagnesInProgress}
            user={user}
          />
        )}
        {ongletActif === 2 && (
          <AccountCreationsFinished
            scenariosFinished={scenariosFinished}
            campagnesFinished={campagnesFinished}
            user={user}
          />
        )}
      </div>
    </div>
  )
}
