import InputForm from '@/components/InputForm'
import React from 'react'
// import { z } from 'zod';
// import { DEFAULT_VALUES_DATOS_PERSONALES, FORM_SCHEMA_DATOS_PERSONALES } from './constants/DatosPersonalesConstants';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';

import './Forms.scss'
import { data } from './data/UserDataData';

const UserData = (props) => {

    const { control } = props;

    return (
        <div className="crear-usuario__forms gap-5 p-5">
            {data.map(data => (
                <div key={data.name}>
                    <InputForm
                        control={control}
                        type={data.type}
                        name={data.name}
                        label={data.label}
                        placeholder={data.placeholder}
                    />
                </div>
            ))}
        </div>
    )
}

export default UserData