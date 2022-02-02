import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AtividadesConsultar from './pages/atividadesConsultar'
import AtividadesAdicionar from './pages/atividadesAdicionar'

import store from './redux/store'

export default function routesjs () {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<AtividadesConsultar />} />
                    <Route path='/Adicionar' exact element={<AtividadesAdicionar />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}