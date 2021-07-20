import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import LottieView from 'lottie-react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';

const UploadScreen = ({progress = 0, visible = false, onDone}) => {
 return (
   <Modal visible={visible}>
       <View style={styles.Container}>
       { progress < 1 ?
           (
            <ProgressBarAnimated
                width={200}
                value={progress}
                backgroundColor={colors.primary}
                backgroundColorOnComplete="#6CC644"
            />
           )
          : (
              <LottieView
                autoPlay={true}
                loop={false}
                source={require('../assets/animations/done.json')}
                style={styles.animation}
                onAnimationFinish={onDone}
              />
            )
        }
           
       </View>
   </Modal>
 )
}
export default UploadScreen;

const styles = StyleSheet.create({
 animation: {
     width: 150
 },
 Container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
 }
});