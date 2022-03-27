import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filmes from "./Componentes/Filmes";
import Horarios from "./Componentes/Horarios"
import Header from "./Componentes/Header";
// import Assentos from "./Componentes/Assentos"

export default function App() {
	return (
		
		<BrowserRouter>
		<Header />
			<Routes>
				<Route path="/" element={<Filmes />} />
                <Route path="/filme/:id" element={<Horarios />} />
				<Route path="/assentos/:idSessao" elemento={<Assentos />} />
			</Routes>
		</BrowserRouter>
	);
}