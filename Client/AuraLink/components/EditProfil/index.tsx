import React, { useState } from 'react';
import {
    Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Interet from '../Interet';
import { Picker } from '@react-native-picker/picker';


const locations: string[] = [
  "Chicago", "Alabama", "Connecticut", "Texas", "Bowdoin College", "MD", "Southern California", "London, England",
  "Palm Springs, California", "94115", "Argentina", "England", "Cincinnati, Ohio", "Miami", "Milan - Italy",
  "Georgia, USA", "New York", "california", "Washington DC", "New Jersey", "Ann Arbor, MI", "Hong Kong", "new york",
  "Iowa", "California", "Westchester, NY", "Non Renseigner", "Washington, DC", "Boston", "new jersey", "Michigan",
  "SIngapore", "Brazil", "Brandeis University", "Cincinnati, OH", "Los Angeles", "SF Bay Area, CA", "China",
  "San Francisco(home)/Los Angeles(undergrad)", "Spain", "Israel", "Switzerland", "Italy", "Philadelphia", "Houston",
  "Brooklyn", "Florida", "Tuscaloosa, Alabama", "Albuquerque, NM", "Palo Alto, California", "Boston, MA", "Mexico",
  "Torrance, CA", "St. Louis, MO", "London, UK", "Minnesota", "Ohio", "India/Venezuela", "Washington State", "Panama",
  "spain", "Arizona", "Minneapolis, MN", "NJ", "NY", "P. R. China", "San Francisco", "Bangladesh", "Long Island",
  "Brooklyn, NY", "India", "Canada", "Colorado", "Ann Arbor", "Philippines", "Milwaukee, Wisconsin", "brooklyn ny",
  "France", "Long Island, NY", "Puerto Rico", "Memphis, TN", "Louisiana", "Maryland", "Staten Island", "New York, NY",
  "Massachusetts", "India, Holland", "china", "Pougkeepsie NY", "sofia, bg", "Greenwich, CT", "Taiwan", "Europe",
  "Colombia", "Albania", "PA", "Cherry Hill, NJ", "Minneapolis", "NYC", "ottawa, canada", "Philadelphia, PA",
  "Atlanta, GA", "Cleveland", "NYC (Staten Island)", "Greece", "North Carolina", "State College, PA", "Detroit",
  "Washington DC Metro Region", "colorado", "Berkeley, CA", "Buffalo, NY", "Pennsylvania", "San Diego, CA", "taiwan",
  "Uzbekistan", "Nebraska", "Queens", "Kansas", "nyc", "Atlanta", "Uruguay", "Azerbaijan", "Los Angeles, CA",
  "new york city", "Rochester, NY", "Taipei, Taiwan", "Berkeley", "Northern California", "Silver Spring, MD",
  "Vestal", "Texas & Boston", "Cameroon", "Bulgaria", "New York City", "New York Area/ New Jersey", "Baltimore",
  "Russia/Germany", "DC", "Germany", "Wash DC (4 yrs)", "Sweden", "Pittsburgh", "Detroit, Michigan, USA", "J.P. Morgan",
  "Virginia", "Indiana", "lOS aNGELES", "Wisconsin", "Born in Montana, raised in South Jersey (nr. Philadelphia)",
  "uruguay", "Portland, Oregon", "Seattle", "Lexington, MA", "brooklyn, ny", "Shanghai, China", "Chile",
  "Toronto, London, India", "Japan", "Boulder, Colorado", "Northern Virginia", "I am from NYC", "Malaysia, then Massachusetts",
  "Katonah, NY (more recently, Boston)", "Warsaw, Poland", "Washington, D.C.", "Toronto", "czech republic", "Siberia",
  "New Hope, PA", "boston, ma", "Las Vegas, Nevada", "Budapest", "Russia", "UNCC", "Iceland", "International Student",
  "Nepal", "Northern New Jersey", "NYC-6 yrs. Grew up in Nebraska", "philippines", "Cambridge, Massachusetts",
  "New Delhi, India", "way too little space here. world citizen.", "Ottawa, Canada", "France  / New York",
  "Tokyo and Texas", "Erie, PA", "Westchester, new York", "USA/American", "Great Neck, NY", "California (West Coast)",
  "japan", "Portland, OR", "New York/South Korea/Japan", "Dallas, Texas", "Bombay, India", "Palo Alto, CA",
  "New Mexico", "WASHINGTON, D.C.", "CALIFORNIA", "Manhattan", "atlanta, ga", "California and New York", "Bronx Science",
  "nashville, TN", "Australia", "Toronto, Canada", "UK/Turkey", "Midwest USA", "Costa Rica", "SOUTH KOREA", "Yugoslavia",
  "los angeles", "NYC, San Francisco", "Oregon", "San Francisco, CA", "Florida and Virginia", "San Francisco Bay Area",
  "Hawaii and Los Angeles", "Korea", "Paris", "france", "Austin, TX", "Woburn, MA", "Greece/Germany", "TN", "Pittsburgh, PA",
  "Hastings-on-Hudson, NY", "Milano, Italy", "poland", "Burlington, Vermont", "Bogota, Colombia", "Singapore", "Asia, Singapore",
  "Santa Barbara, California", "india", "Cambridge, MA", "Texas/London", "CT, FL, TN", "Detroit suburbs", "Tokyo, Japan",
  "south carolina", "California, New Jersey", "Belgium", "alabama", "Westchester County, N.Y.", "Romania",
  "South Orange, New Jersey", "Colombia, South America", "Boston, Ma", "Kansas City, Missouri", "Upstate New York",
  "Manila, Philippines", "working", "San Diego", "Hawaii", "Salt Lake City", "Saratoga, NY", "HKG", "BEIJING, CHINA",
  "San Francisco/LA", "Born in Iran", "Persia", "Indonesia", "India and NJ", "Genova, Italy", "Milan, Italy",
  "UK", "London & New York"
];


function EditProfil({userProfil, setUserProfil}:any): React.JSX.Element {

  const [selectedGenre, setSelectedGenre] = useState(userProfil.gender);
  const [selectedEthnie, setSelectedEthnie] = useState(userProfil.race);
  const [selectedGoal, setSelectedGoal] = useState(userProfil.goal);
  const [selectedFrom, setSelectedFrom] = useState(userProfil.from);
  const [selectedEtud, setSelectedEtud] = useState(userProfil.field_cd);
  const [selectedCarreer, setSelectedCarreer] = useState(userProfil.career_c);

  const [value, onChangeText] = useState(userProfil.age.toString());
  

  return (
    <View style={{flexDirection:'column', marginHorizontal:30, gap:10, marginVertical:50, justifyContent:'center', flexGrow:1}}>
      <View style={{flexDirection:'row', alignItems:'center', gap:5}}>
      <Text style={{fontWeight:'bold', fontSize:20, color:"#000"}}>Vous,</Text><TextInput style={{fontWeight:"200", fontSize:20, color:"#6a6a6a"}} value={value} maxLength={3} keyboardType="numeric"
        onChangeText={(text) => {const t = userProfil;t.age = +text;onChangeText(text)}}></TextInput>
      </View>
        
        
        <View style={{flexDirection:'column', gap:5}}>
          
        <View>
            <Text style={{fontWeight:'bold', color:colors.primary}}>Genre</Text>
            <Picker style={{ height: 50, width: 250 }} mode={"dialog"} selectedValue={selectedGenre} onValueChange={(itemValue, itemIndex) =>{const t = userProfil;t.gender = itemValue;setSelectedGenre(itemValue)}}>
              <Picker.Item label="Non Renseigner" value="Non Renseigner" />
              <Picker.Item label="Homme" value="Homme" />
              <Picker.Item label="Femme" value="Femme" />
            </Picker>
          </View>

          <View>
            <Text style={{fontWeight:'bold', color:colors.primary}}>Ethnie</Text>
            <Picker style={{ height: 50, width: 250 }} mode={"dialog"} selectedValue={selectedEthnie} onValueChange={(itemValue, itemIndex) =>{const t = userProfil;t.race = itemValue;setSelectedEthnie(itemValue)}}>
              <Picker.Item label="Non Renseigner" value="Non Renseigner" />
              <Picker.Item label="Asian" value="Asian" />
              <Picker.Item label="European" value="European" />
              <Picker.Item label="Other" value="Other" />
              <Picker.Item label="Latino" value="Latino" />
              <Picker.Item label="Black" value="Black" />
            </Picker>
          </View>
          
          <View>
            <Text style={{fontWeight:'bold', color:colors.primary}}>Vous cherchez</Text>
            <Picker style={{ height: 50, width: 250 }} mode={"dialog"} selectedValue={selectedGoal} onValueChange={(itemValue, itemIndex) =>{const t = userProfil;t.goal = itemValue;setSelectedGoal(itemValue)}}>
            <Picker.Item label="Meet new people" value="Meet new people" />
            <Picker.Item label="Fun night out" value="Fun night out" />
            <Picker.Item label="Other" value="Other" />
            <Picker.Item label="Get a date" value="Get a date" />
            <Picker.Item label="Serious relationship" value="Serious relationship" />
            <Picker.Item label="Non Renseigner" value="Non Renseigner" />
            <Picker.Item label="Say i did it" value="Say i did it" />

            </Picker>
          </View>

          <View>
            <Text style={{fontWeight:'bold', color:colors.primary}}>Pays</Text>
            <Picker style={{ height: 50, width: 250 }} mode={"dialog"} selectedValue={selectedFrom} onValueChange={(itemValue, itemIndex) =>{const t = userProfil;t.from = itemValue;setSelectedFrom(itemValue)}}>
              <Picker.Item label="Non Renseigner" value="Non Renseigner" />
              {locations.map((element, index) => (
                  <Picker.Item label={element} value={element} />
                ))}
            </Picker>
          </View>

          <View>
            <Text style={{fontWeight:'bold', color:colors.primary}}>Etude</Text>
            <Picker style={{ height: 50, width: 250 }} mode={"dialog"} selectedValue={selectedEtud} onValueChange={(itemValue, itemIndex) =>{const t = userProfil;t.field_cd = itemValue;setSelectedEtud(itemValue)}}>
            <Picker.Item label="Law" value="Law" />
        <Picker.Item label="Math" value="Math" />
        <Picker.Item label="Political Science" value="Political Science" />
        <Picker.Item label="Business" value="Business" />
        <Picker.Item label="Engineering" value="Engineering" />
        <Picker.Item label="Education" value="Education" />
        <Picker.Item label="Psychologist" value="Psychologist" />
        <Picker.Item label="Social Work" value="Social Work" />
        <Picker.Item label="Non Renseigner" value="Non Renseigner" />
        <Picker.Item label="Undergrad" value="Undergrad" />
        <Picker.Item label="Pharmaceuticals" value="Pharmaceuticals" />
        <Picker.Item label="History/Religion/Philosophy" value="History/Religion/Philosophy" />
        <Picker.Item label="Journalism" value="Journalism" />
        <Picker.Item label="Biological" value="Biological" />
        <Picker.Item label="Film" value="Film" />
        <Picker.Item label="Languages" value="Languages" />
        <Picker.Item label="Arts" value="Arts" />
        <Picker.Item label="Architecture" value="Architecture" />
        <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>

          <View>
            <Text style={{fontWeight:'bold', color:colors.primary}}>Travail</Text>
            <Picker style={{ height: 50, width: 250 }} mode={'dialog'} selectedValue={selectedCarreer} onValueChange={(itemValue, itemIndex) =>{const t = userProfil;t.career_c = itemValue;setSelectedCarreer(itemValue)}}>
            <Picker.Item label="Non Renseigner" value="Non Renseigner" />
            <Picker.Item label="Lawyer" value="Lawyer" />
            <Picker.Item label="Creative Arts/Entertainment" value="Creative Arts/Entertainment" />
            <Picker.Item label="Humanitarian Affairs" value="Humanitarian Affairs" />
            <Picker.Item label="Academic/Research" value="Academic/Research" />
            <Picker.Item label="Business" value="Business" />
            <Picker.Item label="Undecided" value="Undecided" />
            <Picker.Item label="Engineer" value="Engineer" />
            <Picker.Item label="Psychologist" value="Psychologist" />
            <Picker.Item label="Doctor/Medicine" value="Doctor/Medicine" />
            <Picker.Item label="Pro sports/Athletics" value="Pro sports/Athletics" />
            <Picker.Item label="Social Work" value="Social Work" />
            <Picker.Item label="Real Estate" value="Real Estate" />
            <Picker.Item label="Other" value="Other" />
            <Picker.Item label="Speech Pathology" value="Speech Pathology" />
            <Picker.Item label="Architecture" value="Architecture" />
            <Picker.Item label="Politics" value="Politics" />
            <Picker.Item label="Journalism" value="Journalism" />
            </Picker>
          </View>
        </View>
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

export default EditProfil;
