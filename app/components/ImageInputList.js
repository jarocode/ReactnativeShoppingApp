import React, { useRef } from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';

import ImageInput from './ImageInput';

const ImageInputList = ({imageUris = [], onRemoveImage, onAddImage}) => {
 const scrollView = useRef();

 //ScrollView component enables scrolling when overflow occurs
 //scrollToEnd() causes the ScrollView comonent to scroll to the end, either  bottom or left

 return (
   <View>
     <ScrollView ref={scrollView} horizontal={true} onContentSizeChange={()=> scrollView.current.scrollToEnd()}>
      <View style={styles.Container}>
        {imageUris.map(uri => 
        <View  key={uri} style={styles.Image}>
          <ImageInput 
              imageUri={uri} 
              onChangeImage={() => onRemoveImage(uri)}
            />
        </View>
        )}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)}/>
      </View>
    </ScrollView>
   </View>
 )
}
export default ImageInputList;

const styles = StyleSheet.create({
 Container: {
    flexDirection: 'row'
 },
 Image: {
   marginRight: 10
 }
});