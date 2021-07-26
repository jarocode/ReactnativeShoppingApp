import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { View, StyleSheet} from 'react-native';
import colors from '../config/colors';

const ActivityIndicator = ({visible = false}) => {
 if(!visible) return null;
 return (
   <View style={styles.overlay}>
     <AnimatedLottieView 
      autoPlay 
      loop
      source={require('../assets/animations/loader.json')}
    /> 
   </View>
 )
}
export default ActivityIndicator;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
    zIndex: 1,
    opacity: 0.8
  }
})

