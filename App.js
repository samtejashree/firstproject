import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <CompanyData />
      <Text style={{ fontSize: 30 }}>Components</Text>
      <UserData />
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

const CompanyData = () => {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>CompanyName : Dambaruu</Text>
      <Text style={{ fontSize: 20 }}>Total Emp : 100</Text>
      <Text style={{ fontSize: 20 }}>Product : ABC Product</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
