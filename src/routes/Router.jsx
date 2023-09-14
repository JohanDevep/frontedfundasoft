import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { Root } from '../Componentes/Root/Root';
import Home from '../Componentes/Pages/Home/Home';
import Cursos from '../Componentes/Pages/Cursos/Cursos';
import Intructores from '../Componentes/Pages/Instructores/Instructores';
import Contacto from '../Componentes/Pages/Contacto/Contacto';
import IniciarSesion from '../Componentes/Login/IniciarSesion/IniciarSesion';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Root />} path="/">
                <Route element={<Home />} index />
                <Route element={<Cursos />} path="/cursos" />
                <Route element={<Intructores />} path="/instructores" />
                <Route element={<Contacto />} path="/contactos" />
                <Route element={<IniciarSesion />} path="/login" />
            </Route>
        </>
    )
);