import {
  View,
  Animated,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState,useRef} from 'react';
import {transformer} from '../metro.config';

export default function Char() {
  let value = new Animated.Value(0);
  const move=new Animated.Value(0);
  const [textStyle,setTextStyle]=useState({})

  const newstyle1 = () => {
    Animated.parallel([
    Animated.spring(move,{
        toValue:1,
        friction:0.01,
        tension:90
    }),
    Animated.timing(value, {
      toValue: 1.5,
      duration: 1500,
      useNativeDriver: true,
    })]).start();
  };
  const newstyle2 = () => {
    Animated.parallel([
        Animated.spring(move,{
            toValue:1,
            friction:0.01,
            tension:90
        }),
    Animated.timing(value, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    })]).start();
  };
  const newstyle3 = () =>{
    Animated.parallel([
        Animated.spring(move,{
            toValue:1,
            friction:0.01,
            tension:90
        }),
    Animated.timing(value, {
      toValue: 100,
      duration:2000,
      useNativeDriver: true,
    })]).start();
};
  const newstyle4 = () =>{
    Animated.parallel([
        Animated.spring(move,{
            toValue:1,
            friction:0.01,
            tension:90
        }),
    Animated.timing(value, {
      toValue: 200,
      duration:2000,
      useNativeDriver: true,
    })]).start()
};
  const newstyle5 = () =>{
    Animated.parallel([
        Animated.spring(move,{
            toValue:1,
            friction:0.01,
            tension:90
        }),
    Animated.spring(value, {
      toValue: 300,
      friction: 2,
      tension:20,
      useNativeDriver: true,
    })]).start();
}
  const newstyle6 = () =>{
    Animated.parallel([
        Animated.spring(move,{
            toValue:1,
            friction:0.01,
            tension:90
        }),
    Animated.spring(value, {
      toValue: 400,
      friction: 2,
      useNativeDriver: true,
    })]).start();
}
const newstyle7 = ()=>{
    Animated.parallel([
        Animated.spring(move,{
            toValue:1,
            friction:0.01,
            tension:90
        }),
    Animated.timing(value, {
        toValue: 150,
        duration: 1500,
        useNativeDriver: true,
      })]).start();
}
  const [tempstyle, setTempstyle] = useState({});
  return (
    <View style={styles.con}>
      <Animated.Image
        style={[tempstyle, styles.img]}
        source={require('../Images/B.png')}
      />
      <View style={styles.con1}>
        <Animated.Text
          style={[styles.text, {color: 'blue'},textStyle]}
          onPress={() => {
            setTempstyle({transform:[{scale: value}]})
            setTextStyle({transform:[{scale:move}]})
            newstyle1();
          }}>
          B
        </Animated.Text>
        <Animated.Text
          style={[styles.text, {color: 'green'},textStyle]}
          onPress={() => {
            setTempstyle({transform:[{scale: value}]});
            setTextStyle({transform:[{scale:move}]})
            newstyle2();
          }}>
          E
        </Animated.Text>
      </View>
      <View style={styles.con2}>
        <Animated.Text
          style={[styles.text1, {color: 'red'},textStyle]}
          onPress={() => {
            setTempstyle({
              transform: [
                {
                  rotateX: value.interpolate({
                    inputRange: [1, 100],
                    outputRange: ['0deg', '360deg'],
                  })
                }
              ]
            })
            setTextStyle({transform:[{scale:move}]})
            newstyle3();
          }}>
          H
        </Animated.Text>
        <Animated.Text
          style={[styles.text1, {color: 'purple'},textStyle]}
          onPress={() => {
            setTempstyle({
              transform: [
                {
                  rotateY: value.interpolate({
                    inputRange: [1, 200],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            });
            setTextStyle({transform:[{scale:move}]})
            newstyle4();
          }}>
          A
        </Animated.Text>
        <Animated.Text
          style={[styles.text1, {color: '#228b22'},textStyle]}
          onPress={() => {
            setTempstyle({
              transform: [
                {
                  rotate: value.interpolate({
                    inputRange: [1, 300],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            });
            setTextStyle({transform:[{scale:move}]})
              newstyle5();
            
          }}>
          P
        </Animated.Text>
        <Animated.Text
          style={[styles.text1, {color: '#000080'},textStyle]}
          onPress={() => {
            setTempstyle({
              transform: [
                {
                  rotate: value.interpolate({
                    inputRange: [1, 400],
                    outputRange: ['360deg', '0deg'],
                  }),
                },
              ],
            });
            setTextStyle({transform:[{scale:move}]})
            newstyle6();
          }}>
          P
        </Animated.Text>
        <Animated.Text
          style={[styles.text1, {color: 'orange'},textStyle]}
          onPress={() => {
            setTempstyle({
              transform: [
                {
                  rotate: value.interpolate({
                    inputRange: [1, 150],
                    outputRange: ['360deg', '0deg'],
                  }),
                },
              ],
            });
            setTextStyle({transform:[{scale:move}]})
            newstyle7();
          }}>
          Y
        </Animated.Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  con1: {
    // flex:3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItem: 'center',
    height: 100,
  },
  con2: {
    // flex:6,
    flexDirection: 'row',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 160,
  },
  img: {
    margin: 50,
  },
  text: {
    fontSize: 68,
  },
  text1: {
    fontSize: 88,
  },
});
