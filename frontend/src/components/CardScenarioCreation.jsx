import { useNavigate } from "react-router-dom"
import "./CardScenarioCreation.scss"
import pen from "../assets/images/Pen.svg"

function CardScenarioCreation({ scenario, user }) {
  const navigate = useNavigate()

  const handleFormatDate = (myDate) => {
    const year = myDate.slice(0, 4)
    const month = myDate.slice(5, 7)
    const day = myDate.slice(8, 10)
    return `Started on : ${day}/${month}/${year}`
  }

  // pour être rediriger vers le scenario au clic de l'image
  const handleGoToScenarioSelected = () => {
    navigate("/resumescenario", { state: scenario })
  }

  // console.log(scenario)
  return (
    <main className="Scenario">
      <div onClick={handleGoToScenarioSelected} className="containerimg">
        <img src={scenario.img} alt="illustration" />
      </div>
      <div className="Card">
        <div className="title">
          <h2>{scenario.title}</h2>
        </div>
        <div className="borderTitle"></div>
        <p className="description">
          {" "}
          {scenario.description.slice(0, 150) + "..."}{" "}
        </p>
        <div className="theme">
          <p className="univers">{scenario.universe}</p>
          <p className="genre">{scenario.theme}</p>
        </div>
        <div className="borderSmall"></div>
        <div className="publicationDate">
          <p>{handleFormatDate(scenario.start_writing_date)}</p>
        </div>
      </div>
      <img src={pen} alt="crayon pour modifier" className="pen-modify" />
    </main>
  )
}
export default CardScenarioCreation
