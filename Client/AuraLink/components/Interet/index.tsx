import React from 'react';
import {
    Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



function Interet({name}:any): React.JSX.Element {

  return (
    <View style={{flexDirection:'row', paddingHorizontal:10, paddingVertical:7, gap:2, borderRadius:50, backgroundColor:"#f5d5e0"}}>
        <Text style={{fontSize:12, color:colors.white, fontWeight:'bold'}}>{name}</Text>
    </View>
  );
}

const colors = {
  dark:"#1c1d25",
  primary:"#f54a80",
  secondary:"#f589ae",
  pale:"#ebebeb",
  white:"#f5f5f5"
}

export default Interet;
