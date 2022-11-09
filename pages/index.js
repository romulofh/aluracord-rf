import { CSSReset } from "../src/components/CSSReset"
import Header from "../src/components/header"
import Menu from "../src/components/Menu"
import TimeLine from "../src/components/Timeline"
import config from '../config.json'

function HomePage() {
  const styleHome = {
    display: "flex",
    flexDirection: 'column',
    flex: 1,
   }

  return (
    <>
    <CSSReset />
      <div style={styleHome}>
        <Menu />
        <Header />
        <TimeLine playlists={config.playlists} />
      </div>
    </>
  )
}

export default HomePage