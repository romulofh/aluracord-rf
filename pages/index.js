import {React, useState, useEffect} from "react"
import Header from "../src/components/Header"
import Menu from "../src/components/Menu/Menu"
import TimeLine from "../src/components/Timeline"
import config from '../config.json'
import { videoService } from "../src/services/videoServices"

function HomePage() {
  const styleHome = {
    display: "flex",
    flexDirection: 'column',
    flex: 1,
   }

   const [filtro, setFiltro] = useState("")

   const service = videoService()
   const [playlists, setPlaylists] = useState({})

   useEffect(() => {
    service
      .getAllVideos()
      .then((dados) => {
        const novasPlaylists = {...playlists}
        dados.data.forEach((video) => {
          if (!novasPlaylists[video.playlist]) {
            novasPlaylists[video.playlist] = []
          }
          novasPlaylists[video.playlist].push(video)
        })
        setPlaylists(novasPlaylists)
      })
   }, [])

   
  return (
    <>
      <div style={styleHome}>
        <Menu filtro={filtro} setFiltro={setFiltro} />
        <Header />
        <TimeLine searchValue={filtro} playlists={playlists} />
      </div>
    </>
  )
}

export default HomePage