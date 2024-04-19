import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Profil from './components/Profil';
import EditProfil from './components/EditProfil';
import { getHost, getPort } from './config';

const maleNames: string[] = [
  "Jean",
  "Pierre",
  "Paul",
  "Jacques",
  "Thomas",
  "Nicolas",
  "Vincent",
  "Louis",
  "Mathieu",
  "Étienne",
  "Guillaume",
  "Alexandre",
  "Antoine",
  "Sébastien",
  "François",
  "Michel",
  "Philippe",
  "Olivier",
  "David",
  "Charles"
];

const femaleNames: string[] = [
  "Marie",
  "Sophie",
  "Anne",
  "Émilie",
  "Julie",
  "Claire",
  "Alice",
  "Charlotte",
  "Sarah",
  "Laura",
  "Camille",
  "Emma",
  "Léa",
  "Manon",
  "Chloé",
  "Elise",
  "Caroline",
  "Margot",
  "Lucie",
  "Aurélie"
];

const API_HOST = getHost();
const API_PORT = getPort();



function getAge(n:Number):Number{
  switch (n) {
    case 1:
      return Math.floor(Math.random() * (20 - 17) + 17);
    case 2:
      return Math.floor(Math.random() * (25 - 20) + 20);
    case 3:
      return Math.floor(Math.random() * (35 - 25) + 25);
    case 4:
      return Math.floor(Math.random() * (45 - 35) + 35);
    default:
      return Math.floor(Math.random() * (70 - 45) + 45);
  }
}

function getAgeCategorie(age:number):number{
  if (age < 20) {
    return 1;
  } else if (age < 25) {
    return 2;
  } else if (age < 35) {
    return 3;
  } else if (age < 45) {
    return 4;
  } else {
    return 5;
  }
}

const getRandomName = (names: string[]): string => {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

function App(): React.JSX.Element {

  const defaultProfil:Profil = {
    name:"String",
    gender:"String",
    age:1,
    field_cd:"String",
    race:"String",
    goal:"String",
    from:"String",
    career_c:"String",
    pourcent:0.5
  }

  const [currentPage, setCurrentPage] = useState("Profil");
  const [userProfil, setUserProfil] = useState(defaultProfil);
  const [userBestMatchProfil, setUserBestMatchProfil] = useState(defaultProfil);

  const [currentpoint, setPoint] = useState(0);
  const [indexCurrent, setIndexCurrent] = useState(0);
  const [profilsList, setProfilsList] = useState([]);
  const [profil, setProfil] = useState(defaultProfil);

  const getProfilsAsync = () => {
    const request = "http://" + API_HOST + ":" + API_PORT + "/profiles?gender=" +  ((userProfil.gender) == "Homme" ? "H":"F") + "&age=" + getAgeCategorie(userProfil.age.valueOf()) + "&field_cd=" + userProfil.field_cd + "&race=" + userProfil.race + "&goal=" + userProfil.goal + "&from=" + userProfil.from + "&career_c=" + userProfil.career_c;
    fetch(request)
    .then((response)=>response.json())
    .then((data)=>{
      setIndexCurrent(0)
      setProfilsList(data);
      setProfil(data[0]);
    });
  }

  const getBestMatchRateAsync = ()=>{
    const request = "http://" + API_HOST + ":" + API_PORT + "/profiles/best?gender=" +  ((userProfil.gender) == "Homme" ? "H":"F") + "&age=" + getAgeCategorie(userProfil.age.valueOf()) + "&field_cd=" + userProfil.field_cd + "&race=" + userProfil.race + "&goal=" + userProfil.goal + "&from=" + userProfil.from + "&career_c=" + userProfil.career_c;
    fetch(request)
    .then((response)=>response.json())
    .then((data)=>{
      setUserBestMatchProfil(data[0]);
    });
  }

  useEffect(() => {
    console.log(userProfil)
    getProfilsAsync();
    getBestMatchRateAsync();
    },[currentPage]
  );
  
  function onValide(point:number){
    if (indexCurrent == profilsList.length-1){
      setIndexCurrent(0);
      getProfilsAsync();
    }else {
      setIndexCurrent(indexCurrent+1);
    }

    giveRecompense(profil.pourcent.valueOf(), 2-point)

    setProfil(profilsList[indexCurrent]);
  }

  function giveRecompense(objectif:number, selection:number){
    objectif = +objectif.toFixed(2)
    selection = +selection.toFixed(2)
    if (selection > objectif-0.05 && objectif+0.05 > selection ){
      setPoint(currentpoint+100);
    }else if (selection > objectif-0.2 && objectif+0.2 > selection ){
      setPoint(currentpoint+50)
    }else {
      setPoint(currentpoint-10)
    }
  }

  
  return (
    <SafeAreaView style={{backgroundColor:colors.white, flexDirection:'column', flex:1, gap:4}}>
      <StatusBar
        backgroundColor={colors.white}
      />
      <Header/>
      <View style={{flexDirection:'column', flexGrow:1, marginHorizontal:15, gap:10}}>
        <View style={{flexDirection:'row', gap:2, margin:10, alignItems:'center'}}>
          <Image source={require("./images/pinkHearth.png")} style={{width:26, aspectRatio:1/1}}></Image>
          <View style={{minWidth:87, flexDirection:'row', alignItems:'center', justifyContent:'flex-end', paddingHorizontal:14, paddingVertical:5, borderColor:colors.primary, borderWidth:2, borderRadius:50}}>
            <Text style={{fontSize:12}}>{currentpoint}</Text>
          </View>
        </View>
        {currentPage == "Profil" ? 
        <Profil onValid={onValide} name={profil.gender == "H" ? getRandomName(maleNames) : getRandomName(femaleNames)} gender={profil.gender} age={getAge(profil.age)} field_cd={profil.field_cd} race={profil.race} goal={profil.goal} from={profil.from} career_c={profil.career_c} pourcent={profil.pourcent}/> 
        : currentPage == "Edit" ? <EditProfil userProfil={userProfil} setUserProfil={setUserProfil}/>
        : <Profil name={userBestMatchProfil.gender == "H" ? getRandomName(maleNames) : getRandomName(femaleNames)}  gender={userBestMatchProfil.gender} age={getAge(userBestMatchProfil.age)} field_cd={userBestMatchProfil.field_cd} race={userBestMatchProfil.race} goal={userBestMatchProfil.goal} from={userBestMatchProfil.from} career_c={userBestMatchProfil.career_c}></Profil>}
      </View>
      <NavBar currentPage={currentPage} navFunction={setCurrentPage}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

const colors = {
  dark:"#1c1d25",
  primary:"#f54a80",
  secondary:"#f589ae",
  pale:"#ebebeb",
  white:"#f5f5f5"
}

export default App;
