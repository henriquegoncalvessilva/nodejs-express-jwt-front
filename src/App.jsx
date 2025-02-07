import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import ContainerLista from "./pages/Lista/ContainerLista";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route
                        path="/listar-usuarios"
                        element={<ContainerLista />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
