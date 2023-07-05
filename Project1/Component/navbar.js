
import React, {useState} from 'react';
import { Text, View, Button, StyleSheet,Switch ,FlatList} from "react-native";
import { useSelector,useDispatch } from 'react-redux';
import { setColor } from '../Reducer/Mode';

export default function Navbar() {
    const color=useSelector(state=>state.mode.color)
    const dispatch=useDispatch()
  const toggleSwitch = () =>  {
    let newColor=color==='#b3d9ff'?'#004080':'#b3d9ff'
    dispatch(setColor(newColor));
  }
  const navbar = ["TextUtils", "Home", "About"]
  return (
    <View style={[styles.navbar,{backgroundColor:color}]} >
    <View>
      <FlatList horizontal={true}
       data={navbar}
        renderItem={({ item }) => <Text style={[styles.items,{color:color==='#b3d9ff'?'#004080':'white'}]}>{item}</Text>}
      />
      </View>
      
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        style={styles.swt}
        thumbColor={color==='#b3d9ff' ? '#004080' : '#f4f3f4'}
        ios_backgroundColor="white"
        onValueChange={toggleSwitch}
        value={color=='#b3d9ff'?false:true}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flex:1,
    flexDirection:'row',
    height:40,
    
    // backgroundColor:'grey'
  },
  items: {
   fontSize:25,
   margin:6,
   fontWeight:'bold',
  //  color:'white',
  },
  swt:{
    flex:1,
    alignItems:'center',
    // marginTop:-620 
  }
});
