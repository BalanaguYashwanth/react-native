import React,{useState} from 'react'
import {View,Button,Text,StyleSheet} from 'react-native'

export default function lists({item}){
    return(
        <View>
            <Text style={Styles.texts} > {item.title}  </Text>
        </View>
    )
}

const Styles = StyleSheet.create({

    texts:{
        marginTop:20,
        textAlign:'center'
    }

})