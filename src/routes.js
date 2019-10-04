import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';
import Cadastro from './pages/Cadastro';
import Livros from './pages/Livros';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Main,
        Cadastro,
        Livros,
    })

);