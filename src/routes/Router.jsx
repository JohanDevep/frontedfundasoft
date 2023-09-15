import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { Root } from '../Componentes/Root/Root';
import Home from '../Componentes/Pages/Home/Home';
import Cursos from '../Componentes/Pages/Cursos/Cursos';
import Intructores from '../Componentes/Pages/Instructores/Instructores';
import Contacto from '../Componentes/Pages/Contacto/Contacto';
import IniciarSesion from '../Componentes/Login/IniciarSesion/IniciarSesion';
import Registrarme from '../Componentes/Login/Registro/Registro';
import PrivateRouter from './PrivateRouter/PrivateRouter';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Root />} path="/">
                <Route element={<Home />} index />

                <Route element={<PrivateRouter />}>
                <Route element={<Cursos />} path="/cursos" />
                <Route element={<Intructores />} path="/instructores" />
                </Route>

                <Route element={<Contacto />} path="/contactos" />
                <Route element={<IniciarSesion />} path="/login" />
                <Route element={<Registrarme />} path="/registrarme" />
            </Route>
        </>
    )
);