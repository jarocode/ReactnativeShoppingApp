import React from 'react';
import {useFormikContext} from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFormField = ({name, ...otherProps}) => {
    const {setFieldTouched, setFieldValue, errors, touched, values} = useFormikContext();
    return (
        <>
          <AppTextInput
            onChangeText={text => setFieldValue(name, text)}
            value={values[name]}
            onBlur={() => setFieldTouched(name)}
            {...otherProps}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>  
        </>
    )
}

export default AppFormField;
