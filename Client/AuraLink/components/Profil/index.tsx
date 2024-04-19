import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Interet from '../Interet';
import { Slider, Icon } from '@rneui/themed';



function Profil({ name, gender,age,field_cd,race,goal,from,career_c,pourcent,onValid }:any): React.JSX.Element {

  const [value, setValue] = useState(0);
  const [vertValue, setVertValue] = useState(0);


  if (race == "String"){
    return ( <View style={{flexDirection:'column', flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontWeight:'bold'}}>No profil receive</Text>
      <Text>Please check API and Wifi status</Text>
    </View>)
  }

  if ([name, gender,age,field_cd,race,goal,from,career_c].includes(0)){
    return ( <View style={{flexDirection:'column', flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontWeight:'bold'}}>No profil found</Text>
      <Text>Please edit your profil</Text>
    </View>)
  }




  return (
    <View style={{flexDirection:'row', flex:1, justifyContent:'space-between'}}>
      <View style={{flexDirection:'column', marginHorizontal:30, gap:10, marginVertical:50, justifyContent:'center'}}>      
        <Text style={{fontWeight:'bold', fontSize:20, color:"#000"}}>{name}, <Text style={{fontWeight:"200", fontSize:20, color:"#6a6a6a"}}>{age.toString()}</Text></Text>
        <Text style={{fontSize:12, color:"#000"}}><Text style={{color:colors.secondary, fontWeight:'bold', fontSize:16}}>♀ </Text>{gender == "H" ? "Homme" : "Femme"}</Text>
        
        <View style={{flexWrap:"wrap", flexDirection:'row', rowGap:10, columnGap:5, maxWidth:200}}>
            <Interet name={field_cd}></Interet>
            <Interet name={race}></Interet>
            <Interet name={goal}></Interet>
            <Interet name={from}></Interet>
            <Interet name={career_c}></Interet>
        </View>
      </View>
      {pourcent == undefined ? <Text></Text> : 
      <View style={{flexDirection:'column', alignItems:'center', justifyContent:'flex-end', gap:5}}>
        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
            <Slider
              value={value}
              onValueChange={setValue}
              maximumValue={2}
              minimumValue={0}
              minimumTrackTintColor={colors.pale}
              maximumTrackTintColor={colors.primary}
              step={0.01}
              orientation='vertical'
              trackStyle={{ width:20, backgroundColor: 'transparent', borderRadius:50 }}
              thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
              thumbProps={{
                children: (
                  <View style={{ bottom:3, right:-2.5, flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                    <Text style={{width:28, textAlign:'center'}}>{(2-value).toPrecision(2)}</Text>
                    <View style={{width:25, height:25, backgroundColor:colors.primary, borderRadius:50, borderColor:"white", borderWidth:5}}>
                    </View>
                  </View>
                ),
              }}/>
            </View>
            <TouchableOpacity onPress={()=>onValid(value)}>
              <View style={{backgroundColor:colors.primary, padding:10, borderRadius:10}}>
                <Text style={{color:colors.white}}>Valide</Text>
              </View>
            </TouchableOpacity>
      </View>}
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

export default Profil;
