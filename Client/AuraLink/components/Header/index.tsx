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



function Header(): React.JSX.Element {

  return (
    <View style={{flexDirection:'row', marginHorizontal:20, gap:2, marginVertical:10, alignItems:'center'}}>
        <Image source={require("../../images/icon.png")} style={{width:25, height:23}}></Image>
        <Text style={{color:colors.primary, fontWeight:'bold', fontSize:16}}>AuraLink</Text>
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

export default Header;
