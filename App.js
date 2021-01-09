import React,{useState} from 'react'
import {StyleSheet,View,Text,Button,TextInput, FlatList} from 'react-native'
import Header from './header'
import Body from './body'

export default function App(){

 

  return (
    <View style={Styles.container}  >
     
     <View id="header"> 
        <Header /> 
     </View>

     <View id="body" > 
      <Body />
     </View>

     <View>

    
     </View>

    </View>
  )
}

const Styles = StyleSheet.create({

  container:{
    flex:1,
  },

})

