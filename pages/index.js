import {React, useState} from "react"
import { CSSReset } from "../src/components/CSSReset"
import Header from "../src/components/Header"
import Menu from "../src/components/Menu/Menu"
import TimeLine from "../src/components/Timeline"
import config from '../config.json'

function HomePage() {
  const styleHome = {
    display: "flex",
    flexDirection: 'column',
    flex: 1,
   }

   const [filtro, setFiltro] = useState("")
   
  return (
    <>
    <CSSReset />
      <div style={styleHome}>
        <Menu filtro={filtro} setFiltro={setFiltro} />
        <Header />
        <TimeLine searchValue={filtro} playlists={config.playlists} />
      </div>
    </>
  )
}

export default HomePage