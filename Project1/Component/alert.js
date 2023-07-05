import {Text,View,Button,StyleSheet} from "react-native";

export default function Alert(props){
    return(
        <View style={styles.con}>
            <Text style={styles.text}>Alert!</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    con:{
        flex:1,
        height:40,
        backgroundColor:'yellow',
    },
    text:{
        color:'green',
        margin:7,
        fontWeight:'bold',
        fontSize:18
    }
})