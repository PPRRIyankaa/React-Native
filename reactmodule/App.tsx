import { View, Text, NativeModules,Button, TouchableOpacity } from 'react-native'
import React from 'react'
const Module = NativeModules.Sample
export default function App() {
  return (
    <View>
      <TouchableOpacity onPress={()=>Module.createLoginPage()}><Text>Click Me</Text></TouchableOpacity>
      <Text>inwsnwn</Text>
    </View>
  )
}