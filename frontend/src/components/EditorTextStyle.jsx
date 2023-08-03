import positionGauche from "../assets/images/positionGauche.png"
import positionCentre from "../assets/images/positionCentre.png"
import positionDroite from "../assets/images/positionDroite.png"
import positionJustify from "../assets/images/positionJustify.png"
import ombre from "../assets/images/ombre.png"
import ombreOff from "../assets/images/ombreOff.png"
import bordureRadius from "../assets/images/bordureRadius.png"
import bordureOn from "../assets/images/bordureOn.png"
import bordureOff from "../assets/images/bordureOff.png"
import miseEnGras from "../assets/images/miseEnGras.png"
import miseEnItalic from "../assets/images/miseEnItalic.png"
import soulignage from "../assets/images/soulignage.png"
import marges from "../assets/images/marges.png"
import { SketchPicker } from "react-color"
import { React, useState } from "react"

export default function EditorTextStyle({ textes, setTextes }) {
  const [coordX, setCoordX] = useState(0)
  const [coordY, setCoordY] = useState(0)
  const [coordZ, setCoordZ] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const [itemHeight, setItemHeight] = useState(0)
  const [font, setFont] = useState("Serif")
  const [pickerTextColor, setPickerTextColor] = useState("#000000")
  const [textColor, setTextColor] = useState("#000000")
  const [textColorVisible, setTextColorVisible] = useState(false)
  const [borderThickness, setBorderThickness] = useState(1)
  const [pickerBorderColor, setPickerBorderColor] = useState("#000000")
  const [borderColor, setBorderColor] = useState("#000000")
  const [borderColorVisible, setBorderColorVisible] = useState(false)
  const [divBorderRadius, setDivBorderRadius] = useState(0)
  const [divPadding, setDivPadding] = useState(0)
  const [ombreX, setOmbreX] = useState(0)
  const [ombreY, setOmbreY] = useState(0)
  const [ombreAlpha, setOmbreAlpha] = useState(0)
  const [ombreBeta, setOmbreBeta] = useState(0)
  const [pickerShadowColor, setPickerShadowColor] = useState("#000000")
  const [shadowColor, setShadowColor] = useState("#000000")
  const [shadowColorVisible, setShadowColorVisible] = useState(false)
  const [blur, setBlur] = useState(0)
  const [pickerBackColor, setPickerBackColor] = useState("#000000")
  const [backColor, setBackColor] = useState("#000000")
  const [backColorVisible, setBackColorVisible] = useState(false)

  // --------------------------------------------------------------------
  // -----FONCTIONS SECTION - POSITION DU COMPOSANT---------------------
  // ------------------------------------------------------------------
  const handleClickTextareaOnLeft = () => {
    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, left: 0 } }
          : item
      )
    )
  }

  const handleClickTextareaOnCenter = () => {
    const item = textes.filter((texte) => texte.selected === true)[0]
    // const itemWidth = parseInt(item.style.width.slice(0, item.style.width.length - 2) )
    const itemWidth = parseInt(item.style.width, 10)
    const newLeft = (100 - itemWidth) / 2 + "%"

    // const newLeft = (pageWidth -itemWidth)/2 +"px";

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, left: newLeft } }
          : item
      )
    )
  }

  const handleClickTextareaOnRight = () => {
    const item = textes.filter((texte) => texte.selected === true)[0]
    const itemWidth = parseInt(item.style.width, 10)
    // console.log("pageWidth",pageWidth,"itemWidth",itemWidth);
    const newLeft = 100 - itemWidth + "%"

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, left: newLeft } }
          : item
      )
    )
  }

  const handleChangeCoordX = (e) => {
    setCoordX(e.target.value)

    const newLeft = e.target.value + "%"

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, left: newLeft } }
          : item
      )
    )
  }

  const handleChangeCoordY = (e) => {
    setCoordY(e.target.value)

    const newTop = e.target.value + "%"

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, top: newTop } }
          : item
      )
    )
  }

  const handleChangeCoordZ = (e) => {
    setCoordZ(e.target.value)

    const newZindex = e.target.value

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, zIndex: newZindex } }
          : item
      )
    )
  }

  const handleChangeItemWidth = (e) => {
    setItemWidth(e.target.value)

    const newWidth = e.target.value + "%"

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, width: newWidth } }
          : item
      )
    )
  }

  const handleChangeItemHeight = (e) => {
    setItemHeight(e.target.value)

    const newHeight = e.target.value + "%"

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, height: newHeight } }
          : item
      )
    )
  }

  // ---FIN SECTION---------------------------------------------------------------------------

  // --------------------------------------------------------------------
  // -----FONCTIONS SECTION - TEXTE---------------------
  // ------------------------------------------------------------------
  const handleClickAlignLeft = () => {
    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, textAlign: "left" } }
          : item
      )
    )
  }

  const handleClickAlignCenter = () => {
    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, textAlign: "center" } }
          : item
      )
    )
  }

  const handleClickAlignRight = () => {
    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, textAlign: "right" } }
          : item
      )
    )
  }

  const handleClickAlignJustify = () => {
    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, textAlign: "justify" } }
          : item
      )
    )
  }

  const handleClickBold = () => {
    const item = textes.filter((texte) => texte.selected === true)[0]

    if (item.style.fontWeight === 700) {
      setTextes((prevState) =>
        prevState.map((item) =>
          item.selected === true
            ? { ...item, style: { ...item.style, fontWeight: 400 } }
            : item
        )
      )
    } else {
      setTextes((prevState) =>
        prevState.map((item) =>
          item.selected === true
            ? { ...item, style: { ...item.style, fontWeight: 700 } }
            : item
        )
      )
    }
  }

  const handleClickItalic = () => {
    const item = textes.filter((texte) => texte.selected === true)[0]

    if (item.style.fontStyle === "normal") {
      setTextes((prevState) =>
        prevState.map((item) =>
          item.selected === true
            ? { ...item, style: { ...item.style, fontStyle: "italic" } }
            : item
        )
      )
    } else {
      setTextes((prevState) =>
        prevState.map((item) =>
          item.selected === true
            ? { ...item, style: { ...item.style, fontStyle: "normal" } }
            : item
        )
      )
    }
  }

  const handleClickUnderline = () => {
    const item = textes.filter((texte) => texte.selected === true)[0]

    if (item.style.textDecoration === "none") {
      setTextes((prevState) =>
        prevState.map((item) =>
          item.selected === true
            ? { ...item, style: { ...item.style, textDecoration: "underline" } }
            : item
        )
      )
    } else {
      setTextes((prevState) =>
        prevState.map((item) =>
          item.selected === true
            ? { ...item, style: { ...item.style, textDecoration: "none" } }
            : item
        )
      )
    }
  }

  const handleChangeFont = (e) => {
    setFont(e.target.value)

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, fontFamily: e.target.value } }
          : item
      )
    )
  }

  const handleClickDivTextColor = () => {
    setTextColorVisible(true)
  }

  const handleChangeColorText = (color) => {
    setPickerTextColor(color.rgb)
    setTextColor(
      `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`
    )

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? {
              ...item,
              style: {
                ...item.style,
                color: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`,
              },
            }
          : item
      )
    )
  }

  const handleLeaveTextColor = () => {
    setTextColorVisible(false)
  }

  // ---FIN SECTION---------------------------------------------------------------------------

  // --------------------------------------------------------------------
  // -----FONCTIONS SECTION - BORDURES---------------------
  // ------------------------------------------------------------------
  const handleClickAjoutBordure = () => {
    const item = textes.filter((texte) => texte.selected === true)[0]

    if (item.style.borderStyle === "none") {
      setTextes((prevState) =>
        prevState.map((item) =>
          item.selected === true
            ? { ...item, style: { ...item.style, borderStyle: "solid" } }
            : item
        )
      )
    } else if (item.style.borderStyle === "solid") {
      setTextes((prevState) =>
        prevState.map((item) =>
          item.selected === true
            ? { ...item, style: { ...item.style, borderStyle: "dotted" } }
            : item
        )
      )
    } else if (item.style.borderStyle === "dotted") {
      setTextes((prevState) =>
        prevState.map((item) =>
          item.selected === true
            ? { ...item, style: { ...item.style, borderStyle: "dashed" } }
            : item
        )
      )
    } else if (item.style.borderStyle === "dashed") {
      setTextes((prevState) =>
        prevState.map((item) =>
          item.selected === true
            ? { ...item, style: { ...item.style, borderStyle: "double" } }
            : item
        )
      )
    } else if (item.style.borderStyle === "double") {
      setTextes((prevState) =>
        prevState.map((item) =>
          item.selected === true
            ? { ...item, style: { ...item.style, borderStyle: "groove" } }
            : item
        )
      )
    } else if (item.style.borderStyle === "groove") {
      setTextes((prevState) =>
        prevState.map((item) =>
          item.selected === true
            ? { ...item, style: { ...item.style, borderStyle: "ridge" } }
            : item
        )
      )
    } else if (item.style.borderStyle === "ridge") {
      setTextes((prevState) =>
        prevState.map((item) =>
          item.selected === true
            ? { ...item, style: { ...item.style, borderStyle: "outset" } }
            : item
        )
      )
    } else if (item.style.borderStyle === "outset") {
      setTextes((prevState) =>
        prevState.map((item) =>
          item.selected === true
            ? { ...item, style: { ...item.style, borderStyle: "inset" } }
            : item
        )
      )
    } else if (item.style.borderStyle === "inset") {
      setTextes((prevState) =>
        prevState.map((item) =>
          item.selected === true
            ? { ...item, style: { ...item.style, borderStyle: "solid" } }
            : item
        )
      )
    }
  }

  const handleClickBorderOff = () => {
    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, borderStyle: "none" } }
          : item
      )
    )
  }

  const handleChangeBorderThickness = (e) => {
    setBorderThickness(e.target.value)

    const newBorderWidth = e.target.value + "px"

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, borderWidth: newBorderWidth } }
          : item
      )
    )
  }

  const handleClickDivBorderColor = () => {
    setBorderColorVisible(true)
  }

  const handleChangeColorBorder = (color) => {
    setPickerBorderColor(color.rgb)
    setBorderColor(
      `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`
    )

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? {
              ...item,
              style: {
                ...item.style,
                borderColor: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`,
              },
            }
          : item
      )
    )
  }

  const handleLeaveBorderColor = () => {
    setBorderColorVisible(false)
  }

  const handleChangeDivBorderRadius = (e) => {
    setDivBorderRadius(e.target.value)

    const newBorderRadius = e.target.value + "px"

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, borderRadius: newBorderRadius } }
          : item
      )
    )
  }

  const handleChangeDivPadding = (e) => {
    setDivPadding(e.target.value)

    const newPadding = e.target.value + "px"

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, padding: newPadding } }
          : item
      )
    )
  }

  // ---FIN SECTION---------------------------------------------------------------------------

  // --------------------------------------------------------------------
  // -----FONCTIONS SECTION - OMBRE---------------------
  // ------------------------------------------------------------------
  const handleClickShadowOn = () => {
    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? {
              ...item,
              style: {
                ...item.style,
                boxShadow: "15px 15px 15px 5px rgba(0,0,0,1)",
              },
            }
          : item
      )
    )
  }

  const handleClickShadowOff = () => {
    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? {
              ...item,
              style: {
                ...item.style,
                boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
              },
            }
          : item
      )
    )
  }

  const handleChangeOmbreX = (e) => {
    setOmbreX(e.target.value)

    const item = textes.filter((texte) => texte.selected === true)[0]

    const tabShadow = item.style.boxShadow.split(" ")
    tabShadow[0] = e.target.value + "px"

    const newBoxShadow = tabShadow.join(" ")

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, boxShadow: newBoxShadow } }
          : item
      )
    )
  }

  const handleChangeOmbreY = (e) => {
    setOmbreY(e.target.value)

    const item = textes.filter((texte) => texte.selected === true)[0]

    const tabShadow = item.style.boxShadow.split(" ")
    tabShadow[1] = e.target.value + "px"

    const newBoxShadow = tabShadow.join(" ")

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, boxShadow: newBoxShadow } }
          : item
      )
    )
  }

  const handleChangeOmbreAlpha = (e) => {
    setOmbreAlpha(e.target.value)

    const item = textes.filter((texte) => texte.selected === true)[0]

    const tabShadow = item.style.boxShadow.split(" ")
    tabShadow[2] = e.target.value + "px"

    const newBoxShadow = tabShadow.join(" ")

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, boxShadow: newBoxShadow } }
          : item
      )
    )
  }

  const handleChangeOmbreBeta = (e) => {
    setOmbreBeta(e.target.value)

    const item = textes.filter((texte) => texte.selected === true)[0]

    const tabShadow = item.style.boxShadow.split(" ")
    tabShadow[3] = e.target.value + "px"

    const newBoxShadow = tabShadow.join(" ")

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, boxShadow: newBoxShadow } }
          : item
      )
    )
  }

  const handleClickDivShadowColor = () => {
    setShadowColorVisible(true)
  }

  const handleChangeColorShadow = (color) => {
    setPickerShadowColor(color.rgb)
    setShadowColor(
      `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`
    )

    const item = textes.filter((texte) => texte.selected === true)[0]

    const tabShadow = item.style.boxShadow.split(" ")
    tabShadow[4] = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`

    const newBoxShadow = tabShadow.join(" ")

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? { ...item, style: { ...item.style, boxShadow: newBoxShadow } }
          : item
      )
    )
  }

  const handleLeaveShadowColor = () => {
    setShadowColorVisible(false)
  }

  // ---FIN SECTION---------------------------------------------------------------------------

  // --------------------------------------------------------------------
  // -----FONCTIONS SECTION - ARRIERE PLAN---------------------
  // ------------------------------------------------------------------

  const handleChangeBlur = (e) => {
    setBlur(e.target.value)

    const newBlur = `blur(${e.target.value + "px"})`

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? {
              ...item,
              style: {
                ...item.style,
                backdropFilter: newBlur,
                WebkitBackdropFilter: newBlur,
              },
            }
          : item
      )
    )
  }

  const handleClickDivBackColor = () => {
    setBackColorVisible(true)
  }

  const handleChangeColorBack = (color) => {
    setPickerBackColor(color.rgb)
    setBackColor(
      `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`
    )

    setTextes((prevState) =>
      prevState.map((item) =>
        item.selected === true
          ? {
              ...item,
              style: {
                ...item.style,
                backgroundColor: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`,
              },
            }
          : item
      )
    )
  }

  const handleLeaveBackColor = () => {
    setBackColorVisible(false)
  }
  // ---FIN SECTION---------------------------------------------------------------------------

  return (
    <main className="main-editorTextStyle">
      <p>Position du composant</p>
      <div className="positions-composant">
        <img
          src={positionGauche}
          alt="position gauche"
          title="Positionner l'élément à gauche"
          onClick={handleClickTextareaOnLeft}
        />
        <img
          src={positionCentre}
          alt="position centre"
          title="Centrer l'élément dans la page"
          onClick={handleClickTextareaOnCenter}
        />
        <img
          src={positionDroite}
          alt="position droite"
          title="Positionner l'élément à droite"
          onClick={handleClickTextareaOnRight}
        />
      </div>

      <section className="positions-detaillees">
        <div className="positions-xy">
          <div className="positionX">
            <p>X :</p>
            <input
              type="number"
              min={0}
              max={100}
              value={coordX}
              onChange={handleChangeCoordX}
            />
          </div>
          <div className="positionY">
            <p>Y :</p>
            <input
              type="number"
              min={0}
              max={100}
              value={coordY}
              onChange={handleChangeCoordY}
            />
          </div>
          <div className="positionZ">
            <p>Z :</p>
            <input
              type="number"
              min={0}
              max={10}
              value={coordZ}
              onChange={handleChangeCoordZ}
            />
          </div>
        </div>
        <div className="dimensions-wh">
          <div className="dimensionW">
            <p>W :</p>
            <input
              type="number"
              min={0}
              max={100}
              value={itemWidth}
              onChange={handleChangeItemWidth}
            />
          </div>
          <div className="dimensionH">
            <p>H :</p>
            <input
              type="number"
              min={0}
              max={100}
              value={itemHeight}
              onChange={handleChangeItemHeight}
            />
          </div>
        </div>
      </section>

      <p>Texte</p>
      <div className="positions-composant">
        <img
          src={positionGauche}
          alt="alignement gauche"
          title="Aligner le texte à gauche"
          onClick={handleClickAlignLeft}
        />
        <img
          src={positionCentre}
          alt="alignement centre"
          title="Centrer le texte"
          onClick={handleClickAlignCenter}
        />
        <img
          src={positionDroite}
          alt="alignement droite"
          title="Aligner le texte à droite"
          onClick={handleClickAlignRight}
        />
        <img
          src={positionJustify}
          alt="alignement justifié"
          title="Justifier le texte"
          onClick={handleClickAlignJustify}
        />
      </div>

      <section className="style-texte">
        <img
          src={miseEnGras}
          alt="Mettre en gras"
          title="Mettre en gras"
          onClick={handleClickBold}
        />
        <img
          src={miseEnItalic}
          alt="Mettre en italique"
          title="Mettre en italique"
          onClick={handleClickItalic}
        />
        <img
          src={soulignage}
          alt="Souligner"
          title="Souligner"
          onClick={handleClickUnderline}
        />
      </section>

      <section className="police-couleur-texte">
        <select
          value={font}
          onChange={handleChangeFont}
          style={{ fontFamily: font }}
        >
          <option value="Arial" style={{ fontFamily: "Arial" }}>
            Arial
          </option>
          <option value="Cambria" style={{ fontFamily: "Cambria" }}>
            Cambria
          </option>
          <option value="cursive" style={{ fontFamily: "cursive" }}>
            Cursive
          </option>
          <option value="Courier New" style={{ fontFamily: "Courier New" }}>
            Courier New
          </option>
          <option value="fantasy" style={{ fontFamily: "fantasy" }}>
            Fantasy
          </option>
          <option
            value="Franklin Gothic Medium"
            style={{ fontFamily: "Franklin Gothic Medium" }}
          >
            Franklin Gothic Medium
          </option>
          <option value="Georgia" style={{ fontFamily: "Georgia" }}>
            Georgia
          </option>
          <option value="Gill Sans MT" style={{ fontFamily: "Gill Sans MT" }}>
            Gill Sans MT
          </option>
          <option value="Impact" style={{ fontFamily: "Impact" }}>
            Impact
          </option>
          <option value="Lucida Sans" style={{ fontFamily: "Lucida Sans" }}>
            Lucida Sans
          </option>
          <option value="monospace" style={{ fontFamily: "monospace" }}>
            Monospace
          </option>
          <option value="sans-serif" style={{ fontFamily: "sans-serif" }}>
            Sans-serif
          </option>
          <option value="serif" style={{ fontFamily: "serif" }}>
            Serif
          </option>
          <option value="Segoe UI" style={{ fontFamily: "Segoe UI" }}>
            Segoe UI
          </option>
          <option
            value="Times New Roman"
            style={{ fontFamily: "Times New Roman" }}
          >
            Times New Roman
          </option>
          <option value="Trebuchet MS" style={{ fontFamily: "Trebuchet MS" }}>
            Trebuchet MS
          </option>
          <option value="Verdana" style={{ fontFamily: "Verdana" }}>
            Verdana
          </option>
        </select>

        <div className="text-color" onClick={handleClickDivTextColor}>
          <div className="choix-color">
            <p>A</p>
            <div style={{ backgroundColor: textColor }}></div>
          </div>
          <div className="choice-arrow"></div>
          {textColorVisible && (
            <div
              className="textColorPicker-container"
              onMouseLeave={handleLeaveTextColor}
            >
              <SketchPicker
                color={pickerTextColor}
                onChangeComplete={handleChangeColorText}
                width="300px"
              />
            </div>
          )}
        </div>
      </section>

      <p>Bordures</p>
      <section className="section-bordures">
        <div className="section-bordures-ligne1">
          <img
            src={bordureOn}
            alt="bordure on"
            title="Ajouter une bordure à l'élément - Cliquez plusieurs fois pour changer le style"
            onClick={handleClickAjoutBordure}
          />
          <img
            src={bordureOff}
            alt="bordure off"
            title="Supprimer la bordure"
            onClick={handleClickBorderOff}
          />
          <label htmlFor="borderThickness">ep :</label>
          <input
            type="number"
            id="borderThickness"
            min={1}
            max={15}
            value={borderThickness}
            onChange={handleChangeBorderThickness}
          />
          <div className="text-color" onClick={handleClickDivBorderColor}>
            <div className="choix-color">
              <img className="imgChoixColor" src={bordureOn} alt="bordure on" />
              <div style={{ backgroundColor: borderColor }}></div>
            </div>
            <div className="choice-arrow"></div>
            {borderColorVisible && (
              <div
                className="textColorPicker-container"
                onMouseLeave={handleLeaveBorderColor}
              >
                <SketchPicker
                  color={pickerBorderColor}
                  onChangeComplete={handleChangeColorBorder}
                  width="300px"
                />
              </div>
            )}
          </div>
        </div>
        <div className="section-bordures-ligne2">
          <div className="div-bordures-ligne2">
            <img
              src={bordureRadius}
              alt="bordure radius"
              title="Entrez à côté un rayon pour les bordures"
            />
            <input
              type="number"
              min={0}
              max={500}
              value={divBorderRadius}
              onChange={handleChangeDivBorderRadius}
            />
          </div>
          <div className="div-bordures-ligne2">
            <img
              src={marges}
              alt="marges intérieures"
              title="Entrez à côté une valeur pour les marges intérieures"
            />
            <input
              type="number"
              min={0}
              max={200}
              value={divPadding}
              onChange={handleChangeDivPadding}
            />
          </div>
        </div>
      </section>

      <p>Ombre</p>
      <section className="section-ombre">
        <div className="choix-ombre">
          <div className="images-ombre">
            <img
              src={ombre}
              alt="presence ombre"
              title="Ajouter une ombre à l'élément"
              onClick={handleClickShadowOn}
            />
            <img
              src={ombreOff}
              alt="pas d'ombre"
              title="Supprimer l'ombre"
              onClick={handleClickShadowOff}
            />
          </div>

          <div className="text-color" onClick={handleClickDivShadowColor}>
            <div className="choix-color">
              <img className="imgChoixColor" src={ombre} alt="couleur ombre" />
              <div style={{ backgroundColor: shadowColor }}></div>
            </div>
            <div className="choice-arrow"></div>
            {shadowColorVisible && (
              <div
                className="textColorPicker-container"
                onMouseLeave={handleLeaveShadowColor}
              >
                <SketchPicker
                  color={pickerShadowColor}
                  onChangeComplete={handleChangeColorShadow}
                  width="300px"
                />
              </div>
            )}
          </div>
        </div>

        <div className="shadow-values">
          <label htmlFor="ombreX">x :</label>
          <input
            type="number"
            id="ombreX"
            min={0}
            max={50}
            value={ombreX}
            onChange={handleChangeOmbreX}
          />
          <label htmlFor="ombreY">y :</label>
          <input
            type="number"
            id="ombreY"
            min={0}
            max={50}
            value={ombreY}
            onChange={handleChangeOmbreY}
          />
          <label htmlFor="ombreAlpha">&#945; :</label>
          <input
            type="number"
            id="ombreAlpha"
            min={0}
            max={50}
            value={ombreAlpha}
            onChange={handleChangeOmbreAlpha}
          />
          <label htmlFor="ombreBeta">&#946; :</label>
          <input
            type="number"
            id="ombreBeta"
            min={0}
            max={50}
            value={ombreBeta}
            onChange={handleChangeOmbreBeta}
          />
        </div>
      </section>

      <p>Arrière plan</p>
      <section className="section-background">
        <div className="div-blur">
          <label htmlFor="blur">Flou :</label>
          <input
            type="number"
            id="blur"
            min={0}
            max={50}
            value={blur}
            onChange={handleChangeBlur}
            title="Mettre de la transparence à l'arrière plan pour en observer l'effet"
          />
        </div>

        <div className="text-color" onClick={handleClickDivBackColor}>
          <div
            className="choix-color"
            style={{ backgroundColor: backColor }}
          ></div>

          <div className="choice-arrow"></div>

          {backColorVisible && (
            <div
              className="textColorPicker-container"
              onMouseLeave={handleLeaveBackColor}
            >
              <SketchPicker
                color={pickerBackColor}
                onChangeComplete={handleChangeColorBack}
                width="300px"
              />
            </div>
          )}
        </div>
      </section>

      <button type="button">Sauvegarder ce style</button>
    </main>
  )
}
