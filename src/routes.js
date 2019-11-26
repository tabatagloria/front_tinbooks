import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Localizacao from './pages/Localizacao';
import Main from './pages/Main';
import Buscar from './pages/Buscar';
import Cadastro from './pages/Cadastro';
import Livros from './pages/Livros';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Localizacao,
        Main,
        Buscar,
        Cadastro,
        Livros,
    })

);