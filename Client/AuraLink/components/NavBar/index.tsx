import React from 'react';
import {
    Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



function NavBar({currentPage, navFunction}:any): React.JSX.Element {

  switch (currentPage){
    case "Best":
      return (
        <View style={{flexDirection:'row', marginHorizontal:20, gap:10, marginVertical:10, alignItems:'center', justifyContent:'center', height:102}}>
          <TouchableOpacity onPress={()=>navFunction("Best")}>
          <LinearGradient colors={[colors.primary, "#FF7AA8"]}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}
            style={{aspectRatio:1/1, height:60, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
              <Image style={{aspectRatio:1/1, height:25}} source={require("../../images/whitelight.png")}></Image>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navFunction("Profil")}>
            <View style={{aspectRatio:1/1, height:50, backgroundColor:colors.pale, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
              <Image style={{aspectRatio:1/1, height:30}} source={require("../../images/pinkHearth.png")}></Image>
              </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navFunction("Edit")}>
            <View style={{aspectRatio:1/1, height:50, backgroundColor:colors.pale, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
              <Image style={{aspectRatio:2/1, maxWidth:25, height:25}} source={require("../../images/profil.png")}></Image>
            </View>
          </TouchableOpacity>
      </View>);
    case "Edit":
      return (
        <View style={{flexDirection:'row', marginHorizontal:20, gap:10, marginVertical:10, alignItems:'center', justifyContent:'center', height:102}}>
            <TouchableOpacity onPress={()=>navFunction("Best")}>
              <View style={{aspectRatio:1/1, height:50, backgroundColor:colors.pale, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
                <Image style={{aspectRatio:1/1, height:25}} source={require("../../images/ligth.png")}></Image>
              </View>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={()=>navFunction("Profil")}>
              <View style={{aspectRatio:1/1, height:50, backgroundColor:colors.pale, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
                <Image style={{aspectRatio:1/1, height:30}} source={require("../../images/pinkHearth.png")}></Image>
              </View>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={()=>navFunction("Edit")}>
              
            <LinearGradient colors={[colors.primary, "#FF7AA8"]}
              start={{x: 0, y: 1}}
              end={{x: 0, y: 0}}
              style={{aspectRatio:1/1, height:60, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
                <Image style={{aspectRatio:2/1, maxWidth:25, height:25}} source={require("../../images/whiteprofil.png")}></Image>
              </LinearGradient>
            </TouchableOpacity>
        </View>);
    default:
      return (
        <View style={{flexDirection:'row', marginHorizontal:20, gap:10, marginVertical:10, alignItems:'center', justifyContent:'center', height:102}}>
            <TouchableOpacity onPress={()=>navFunction("Best")}>
              <View style={{aspectRatio:1/1, height:50, backgroundColor:colors.pale, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
                <Image style={{aspectRatio:1/1, height:25}} source={require("../../images/ligth.png")}></Image>
              </View>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={()=>navFunction("Profil")}>
              <LinearGradient colors={[colors.primary, "#FF7AA8"]}
              start={{x: 0, y: 1}}
              end={{x: 0, y: 0}}
              style={{aspectRatio:1/1, height:60, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
                <Image style={{aspectRatio:1/1, height:30}} source={require("../../images/whiteHearth.png")}></Image>
              </LinearGradient>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={()=>navFunction("Edit")}>
              <View style={{aspectRatio:1/1, height:50, backgroundColor:colors.pale, borderRadius:50, alignItems:'center', justifyContent:'center'}}>
                <Image style={{aspectRatio:2/1, maxWidth:25, height:25}} source={require("../../images/profil.png")}></Image>
              </View>
            </TouchableOpacity>
        </View>
      );
  }
}

const colors = {
  dark:"#1c1d25",
  primary:"#f54a80",
  secondary:"#f589ae",
  pale:"#ebebeb",
  white:"#f5f5f5"
}

export default NavBar;
