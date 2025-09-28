import {Routes, Route} from "react-router-dom"
import NovasMensagens from "./pages/whatsApp/novasMensagens"
import SideBar from "./layout/SideBar"
import Conversas from "./pages/whatsApp/conversas";
import Favoritos from "./pages/whatsApp/favoritos";
import Conectar from "./pages/whatsApp/conectar";
import Grupos from "./pages/interno/grupos";
import ConversasInterno from "./pages/interno/conversas";
import ClientesPage from "./pages/clientes";
import DashboardPage from "./pages/internos";
import SuportePage from "./pages/suporte";

function MainRoutes () {
  return (
    <Routes>
      <Route element={<SideBar />}>
        <Route path="/whatsapp/novasmensagens" element={<NovasMensagens />} />
        <Route path="/whatsapp/conversas" element={<Conversas />} />
        <Route path="/whatsapp/favoritos" element={<Favoritos />} />
        <Route path="/whatsapp/conectar" element={<Conectar />} />
        <Route path="/interno/grupos" element={<Grupos />} />
        <Route path="/interno/conversas" element={<ConversasInterno />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/interno" element={<DashboardPage />} />
        <Route path="/suporte" element={<SuportePage />} />
        {/* <Route path="/outra" element={<Outra />} /> */}
      </Route>
    </Routes>
  )
}

export default MainRoutes