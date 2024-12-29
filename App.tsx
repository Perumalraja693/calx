import { Alert, SafeAreaView, StatusBar, StyleSheet, Switch, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import { ThemeContext } from "./context/ThemeContext";
import { useState } from "react";
import Button from "./components/Button";
import Keyboard from "./components/keyboard";


function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme == 'light' ? styles.rootContainer : [styles.rootContainer, { backgroundColor: '#000' }]}>
        <StatusBar backgroundColor={theme=='light'?'#efefef':'#000'} barStyle={theme=='light'?'dark-content':'light-content'}/>
      
        <Keyboard/>
       

      </SafeAreaView>
  
    </ThemeContext.Provider>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent:"flex-start"
  }
})

export default App;
