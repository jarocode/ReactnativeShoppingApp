import React from 'react';
import {useFormikContext} from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import AppPicker from '../AppPicker';

const AppFormPicker = ({name, items, placeholder, PickerItemComponent, numberOfColumns}) => {
    const {setFieldTouched, errors, touched, setFieldValue, values} = useFormikContext();
    return (
        <>
        <AppPicker 
            placeholder= {placeholder} 
            items={items} 
            selectedItem={values[name]} 
            onSelectItem={item => setFieldValue(name, item)}
            onBlur={() => setFieldTouched(name)}
            PickerItemComponent={PickerItemComponent}
            numberOfColumns={numberOfColumns}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>  
        </>
    )
}

export default AppFormPicker;