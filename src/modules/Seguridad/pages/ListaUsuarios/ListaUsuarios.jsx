import { useState } from 'react';

import MenuLateral from '@/components/MenuLateral';
import Listas from '@/components/Listas';

import { usuarioAPI } from '@/api/ApiRutas';
import { columnsValue } from './columnsListaUsuarios';

import './ListaUsuarios.scss';
import FiltrosListaUsuarios from './FiltrosListaUsuarios/FiltrosListaUsuarios.jsx';
import { paramsConstructor } from '@/utils/querys';

const ListaUsuarios = () => {
  const [params, setParams] = useState({
    is_active: true,
    tipo_usuario: '',
    last_login: '',
    buscador: ''
  });

  let queryParams = paramsConstructor(params);

  return (
    <MenuLateral>
      <div className='usuarios h-full gap-3 min-w-[600px]'>
        <Listas
          api={usuarioAPI}
          queryParams={queryParams}
          columnsValue={columnsValue}
          classNameFiltros='usuarios-filtros'
          multiDelete={false}
        >
          <FiltrosListaUsuarios
            classNameFiltros='usuarios-filtros'
            setParams={setParams}
          />
        </Listas>
      </div>
    </MenuLateral>
  );
};

export default ListaUsuarios;
