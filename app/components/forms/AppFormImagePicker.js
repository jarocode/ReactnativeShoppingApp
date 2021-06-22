import React from 'react';
import { StyleSheet, View } from 'react-native';
import {useFormikContext} from 'formik';

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';


const AppFormImagePicker = ({name}) => {
 const {setFieldTouched, errors, touched, setFieldValue, values} = useFormikContext();
 const imageUris = values[name];

 const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  }
 
 const handleRemove = (uri) => {
   setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri));
  }
 
  return (
    <>
        <ImageInputList 
            imageUris={values[name]}
            onAddImage={handleAdd}
            onRemoveImage={handleRemove}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>  
    </>
 )
}
export default AppFormImagePicker;

const styles = StyleSheet.create({
 Container: {

 }
});