// import { useEffect } from "react"

export default function ReadingPage(props) {
  const {
    textes,
    images,
    selectedPage,
    handleClickPreviousPage,
    handleClickNextPage,
    pageNumber,
    pages,
  } = props

  // ----------------------------------------------------------------------------
  // ------FONCTIONS POUR ENREGISTRER AVANT SUPPRESSION DES TEXTES DANS DES ZONES DE TEXTES----
  // ---------------------------------------------------------------------------

  //   //Ne fonctionne pas !
  //   const handleKeyDownDelete = (event) => {
  //     console.log("event.inputType", event.key)
  //     if (event.key === 'Delete' || event.key === 'Backspace') {
  //         console.log("test delete");
  //         // on enregistre le state de textes dans history afin de pouvoir récupérer le contenu supprimé
  //         setPageHistory((prevState) => {
  //             const newTexteHistory = JSON.parse(JSON.stringify(textes)) // obligé sinon ça copie la référence de textes et du coup la suite ne fonctionne pas
  //             newTexteHistory.pop() // textes étant mis à jour avec un nouvel élément, on enlève cet élément
  //             const newState = [...prevState, { textes: newTexteHistory, images }]
  //             return newState
  //           })
  //       }
  //   }

  // ----FIN SECTION--------------------------------------------------

  const calculateFontSize = (remSize) => {
    if (window.innerWidth >= 1000) {
      return remSize
    } else {
      const intSize = parseFloat(remSize)
      return (intSize * window.innerWidth) / 1000 + "rem"
    }
  }

  const adjustPxSize = (pxSize) => {
    if (window.innerWidth >= 1000) {
      return pxSize
    } else {
      const intSize = parseFloat(pxSize)
      return (intSize * window.innerWidth) / 1000 + "px"
    }
  }

  return (
    <>
      {selectedPage && (
        <section className="section-page-reading" style={selectedPage.style}>
          {textes.map((item) => (
            // <textarea
            //   key={item.id}
            //   style={item.style}
            //   value={item.text}

            // ></textarea>
            <div
              key={item.id}
              style={{
                ...item.style,
                fontSize: calculateFontSize(item.style.fontSize),
                padding: adjustPxSize(item.style.padding),
                borderRadius: adjustPxSize(item.style.borderRadius),
                borderWidth: adjustPxSize(item.style.borderWidth),
              }}
            >
              <p style={{ textAlign: item.style.textAlign, margin: 0 }}>
                {item.text}
              </p>
            </div>
          ))}

          {images.map((item) => (
            <img
              src={item.img_src}
              alt="image"
              style={{
                ...item.style,
                padding: adjustPxSize(item.style.padding),
                borderRadius: adjustPxSize(item.style.borderRadius),
                borderWidth: adjustPxSize(item.style.borderWidth),
              }}
              key={item.id}
            />
          ))}

          {pageNumber > 1 && (
            <button
              type="button"
              onClick={handleClickPreviousPage}
              className="button-previousPage"
            >
              Prev
            </button>
          )}
          {pageNumber < Math.max(...pages.map((page) => page.number)) && (
            <button
              type="button"
              onClick={handleClickNextPage}
              className="button-nextPage"
            >
              Next
            </button>
          )}
        </section>
      )}
    </>
  )
}