import React,{useState} from 'react'
import {View,Button,Text,StyleSheet} from 'react-native'

export default function header(){
    return(
        <View style={Styles.header} >
            <Text style={Styles.heading}> TODO  </Text>
        </View>
    )
}

const Styles=StyleSheet.create({

    header:{
        backgroundColor: 'orange',
        paddingTop:38,
        height:100,
        justifyContent:'center'
    },

    heading:{
        textAlign:'center',
        fontSize: 20,
        fontWeight: "bold",
    }

})
