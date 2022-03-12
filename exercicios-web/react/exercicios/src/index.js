import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva">
      {/* Como passo os componentes Filhos aqui? */}
      <Filho nome="Pedro" />
      <Filho nome="Paulo" sobrenome="Silva" />
      <Filho nome="Carla" sobrenome="Silva" />
    </Pai>
  </div>,
  document.getElementById('root')
)