import React,{Component} from 'react';
import { StyleSheet,Dimensions,ImageBackground,color } from 'react-native';




const stiloCronometro = StyleSheet.create({
    container:{borderWidth:2,margin:3},
    botaoCronometroalinhaH:{flexDirection:'row', alignItems:'center'},
    botaoFlexHorizo:{flex:1,backgroundColor:'red',margin:1,alignItems:'center',marginTop:10},
    botaoText:{fontSize:20,color:'white'},
    contagemText:{fontSize:30,color:'black',fontWeight:'bold'},
    containerContagemLogo:{alignItems:'center'},
    margin20px:{margin:15},
    nRtempContainer:{flexDirection:'row',alignItems:'center',justifyContent:'center'},
    })


    const logoMarca = StyleSheet.create({
        imgbackground:{ flexDirection:'row',alignItems:'center',justifyContent:'center',height:130},
        textLogo:{fontSize:50,color:'#DCDCDC',fontWeight:'bold',borderWidth:5,borderColor:'white',padding:5,textAlign:'center'}
    
    })




export {stiloCronometro,logoMarca}
