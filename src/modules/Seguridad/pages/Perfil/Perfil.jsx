import MenuLateral from '@/components/MenuLateral'
import FormSeguridad from '../../components/FormSeguridad'
import {
  DEFAULT_VALUES_PERFIL,
  FORM_SCHEMA_PERFIL
} from './constants/PerfilConstants'

const PerfilPrueba = () => {
  return (
    <MenuLateral>
      <FormSeguridad
        edit={true}
        DEFAULT_VALUES={DEFAULT_VALUES_PERFIL}
        FORM_SCHEMA={FORM_SCHEMA_PERFIL}
      />
    </MenuLateral>
  )
}

export default PerfilPrueba
