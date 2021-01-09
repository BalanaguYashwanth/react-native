import React,{useState} from 'react'
import {View,Button,Text,StyleSheet,TextInput, FlatList} from 'react-native'
import Lists from './lists'


export default function body(){

    const [todos,setTodo]=useState([
        {id:'0',title:'do walk'},
        {id:'1',title:'go work'}
    ])

    const [name,setName]=useState('')

    return(
        <View style={Styles.bodybox} >
            <TextInput style={Styles.input}   placeholder='enter the name' value={name} onChangeText={ (text) => setName(text) } />
            <Button title="submit" color="orange" 
            
            onPress={ ()=> (
                setTodo([...todos,
                {
                    id:todos.length,
                    title:name
                }]
                ),

                setName('')

            ) }  /> 
            <FlatList
                keyExtractor={(item) =>(item.id.toString())}
                data={todos}
                renderItem={({ item }) => ( 
                <Lists  item={item} /> 
                )}
            />

        </View>
    )
}


const Styles = StyleSheet.create({

    bodybox:{
        padding:40,
    },

    input:{      
        marginTop:100,
        padding:1,
        margin:10,
        borderBottomWidth:1,
        textAlign:"center",
        borderColor:'grey',
    }

})
