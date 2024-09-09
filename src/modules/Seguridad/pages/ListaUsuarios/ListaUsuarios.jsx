import { useState } from 'react';

import MenuLateral from '@/components/MenuLateral';
import Listas from '@/components/Listas';

import { usuarioAPI } from '@/api/ApiRutas';
import { columnsValue } from './columnsListaUsuarios';
import FiltrosListaUsuarios from './FiltrosListaUsuarios';

import { paramsConstructor } from '@/utils/querys';

import './ListaUsuarios.scss';

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
          classNameTable='usuarios-table'
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
