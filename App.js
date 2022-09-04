import React,{Component} from 'react'
import {
View, Text,StyleSheet,Image,
}from 'react-native'


import Cronometro from './src/componentes/cronometro';

class App extends Component{
  render(){
    return(
      <View>
              
 
        <Cronometro labelRegistro="N° Registro" labelTempo = "Tempo"/>

      </View>
    )
  }
}

export default App;