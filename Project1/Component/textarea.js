import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {} from 'react-native';
import store from '../store';
import {useSelector, useDispatch} from 'react-redux';
import { appendText,setText } from '../Reducer/statetext';

//const text = store.getState().value;
export default function Textform() {
  const text1=useSelector(state=>state.text.text)
  const color=useSelector(state=>state.mode.color);
  const dispatch=useDispatch()
  // const text = store.getState().value;
  // const [text,setText]=useState("");

  const onChangeText = async textvalue => {
    dispatch(setText(textvalue))
  };
  
  const convertUpperCase = async () => {
    dispatch(setText(text1.toUpperCase()))
  };

  const convertLowerCase = async () => {
    dispatch(setText(text1.toLowerCase()))
  };

  const Capitalise = async () => {
    let random = '';
    let ans = '';
    console.log(text1);
    let arr = text1.split(' ');
    for (let i = 0; i < arr.length; i++) {
      let str = arr[i];
      str = str.charAt(0).toUpperCase() + str.slice(1);
      ans += str + ' ';
    }
    //store.dispatch({type: 'settext', payload: ans})
    dispatch(setText(ans))
  }
  const ClearText = () => {
    // let word = '';
    // store.dispatch({type: 'Settext', payload: {word}});
    dispatch(setText(""))
  };
  const CopyText = () => {
    navigator.clipboard.writeText(text1);
  };

  const RemoveextraSpaces = () => {
    let word = text1.replace(/\s+/g, ' ').trim();
    dispatch(setText(word))
  };

  return (
    <View style={[styles.text,{backgroundColor:color==='#b3d9ff'?'#004080':'#b3d9ff'}]}>
      <TextInput
        style={[styles.area,{backgroundColor:'white'}]}
        editable
        multiline
        numberOfLines={10}
        onChangeText={text => onChangeText(text)}
        placeholder="Enter Your Text"
        textAlignVertical="top"
        value={text1}
      />
      <View style={styles.button}>
      {/* <View>
          <Text>
            {
              text.split(/\s+/).filter(element => {
                return element.length !== 0;
              }).length
            }{' '}
            words and {text.length} characters
          </Text>
        </View> */}
        {/* <Text></Text> */}
        {/* <View> */}
        <TouchableOpacity style={styles.btn} onPress={convertUpperCase}>
          <Text style={styles.textitem}> UpperCase</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={convertLowerCase}>
          <Text style={styles.textitem}>LowerCase</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={Capitalise}>
          <Text style={styles.textitem}>Capitalise</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={ClearText}>
          <Text style={styles.textitem}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={RemoveextraSpaces}>
          <Text style={styles.textitem}>Remove Extra Spaces </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={CopyText}>
          <Text style={styles.textitem}>Copy</Text>
        </TouchableOpacity>
        {/* </View> */}
        {/* <View>
          <Text>
            {
              text.split(/\s+/).filter(element => {
                return element.length !== 0;
              }).length
            }{' '}
            words and {text.length} characters
          </Text>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    flex: 13,
    // height:45,
    // backgroundColor: '#E6E6FA',
  },
  area: {
    backgroundColor: '#F0FFF0',
    margin: 18,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor:'orange',
    flexWrap: 'wrap',
    // justifyContent:'space-between',
    margin: 18,
  },
  btn: {
    padding: 5,
    color: 'white',
    margin: 6,
    borderRadius: 7,
    fontSize: 22,
    backgroundColor: '#00e64d',
    borderColor: 'white',
    borderWidth: 3,
  },
  textitem: {
    color: '#004080',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
