import {Routes, Route} from "react-router-dom"
import NovasMensagens from "./pages/whatsApp/novasMensagens"
import SideBar from "./layout/SideBar"
import moment from "moment";

function MainRoutes () {
  moment.locale('pt-br');
  return (
    <Routes>
      <Route element={<SideBar />}>
        <Route path="/" element={<NovasMensagens />} />
        {/* <Route path="/outra" element={<Outra />} /> */}
      </Route>
    </Routes>
  )
}

export default MainRoutes