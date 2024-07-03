import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CompanyData from './components/CompanyData';
import { useState } from 'react';


export default function App() {
  let data = 100;
  const fruit = () => {
    console.warn("function called!");
  }
  const fruit1 = (val) => {
    data = 20;
    console.warn(data);
  }

  const [name, setName] = useState("teju");
  let data1 = "sam";
  function updateName() {
    setName("tejaswini")
    let data1 = "fruit";
  }

  return (
    <View style={styles.container}>
        {/* text shown  */}
      {/* <CompanyData />
      <Text style={{ fontSize: 30 }}>Components</Text>
      <UserData /> */}

         {/* button part */}
      {/* <Text style={{ fontSize: 30 }}>Button and onPress event</Text>
      <Button title='On Press' color={'green'} onPress={fruit}/>
      <Button title='On Press 2' color={'yellow'} onPress={()=>fruit1('Hello tejas')}/> */}
      
         {/* difference between state and variable */}
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Text style={{ fontSize: 30 }}>{data1}</Text>
      <Button title='Update Name' color={'green'} onPress={updateName} />

      <StatusBar style="auto" />
    </View>
  );
}

const UserData = () => {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Name : Teju</Text>
      <Text style={{ fontSize: 20 }}>Age : 24</Text>
      <Text style={{ fontSize: 20 }}>Email : Teju@gmail.com</Text>
    </View>
  )
}

// const CompanyData = () => {
//   return (
//     <View>
//       <Text style={{ fontSize: 20 }}>CompanyName : Dambaruu</Text>
//       <Text style={{ fontSize: 20 }}>Total Emp : 100</Text>
//       <Text style={{ fontSize: 20 }}>Product : ABC Product</Text>
//     </View>
//   )
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
