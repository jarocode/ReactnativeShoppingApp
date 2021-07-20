import React, { useState, useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import listingAPi from '../api/listings'
import useLocation from '../hooks/useLocation';
import CategoryPickerItem from '../components/CategoryPickerItem';
import {AppFormField, AppForm, SubmitButton, AppFormPicker, AppFormImagePicker} from '../components/forms';
import UploadScreen from './UploadScreen';

const categories = [
    {
      value: 0,
      label: 'Furniture',
      backgroundColor: '#fc5c65',
      icon: 'floor-lamp'
    },
    {
      value: 1,
      label: 'Cars',
      backgroundColor: '#fd9644',
      icon: 'car'
    },
    {
      value: 2,
      label: 'Cameras',
      backgroundColor: '#fed330',
      icon: 'camera'
    },
    {
      value: 3,
      label: 'Games',
      backgroundColor: '#26de81',
      icon: 'cards'
    },
    {
      value: 4,
      label: 'Clothing',
      backgroundColor: '#2bcbba',
      icon: 'shoe-heel'
    },
    {
      value: 5,
      label: 'Sports',
      backgroundColor: '#45aaf2',
      icon: 'basketball'
    },
    {
      value: 6,
      label: 'Movies & Music',
      backgroundColor: '#4b7bec',
      icon: 'headphones'
    },
    {
      value: 7,
      label: 'Books',
      backgroundColor: '#4ffbfc',
      icon: 'book'
    },
    {
      value: 8,
      label: 'others',
      backgroundColor: '#422b2c',
      icon: 'apps'
    },
  ]

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image")
});

const ListEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingAPi.addListing({...listing, location}, 
      (progress) => setProgress(progress));
    
    if(!result.ok) {
      setUploadVisible(false);
      alert('Could not save listing');
    }
    alert('Success');
    
  }
  
  return (
        <Screen style={styles.container}>
          <UploadScreen 
            progress={progress} 
            visible={uploadVisible}
            onDone = {() => setUploadVisible(false)}
          />
            <AppForm
                initialValues={
                    { 
                        title: '', 
                        price: '',
                        description: '',
                        category: null,
                        images: []
                    }
                }
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >

                <AppFormImagePicker name="images"/>
                <AppFormField
                    autoCapitalize="none"
                    maxLength={255}
                    autoCorrect={false}
                    placeholder="Title"
                    name="title"
                    textContentType="text"
                    />
                <AppFormField
                    autoCapitalize="none"
                    maxLength={8}
                    autoCorrect={false}
                    placeholder="Price"
                    name="price"
                    textContentType="text"
                    />
                            
                <AppFormPicker
                    items={categories}
                    name= "category"
                    placeholder= "Category"
                    PickerItemComponent={CategoryPickerItem}
                    numberOfColumns={3}
                />
                <AppFormField
                    autoCapitalize="none"
                    maxLength={255}
                    multiline
                    numberOfLines={3}
                    autoCorrect={false}
                    placeholder="Description"
                    textContentType="text"
                    name="description"
                /> 
                 <SubmitButton title="Post"/>
            </AppForm>

        </Screen>
    )
}

export default ListEditScreen;
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})
