import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList , TouchableOpacity } from 'react-native';

export default function App(){

  const [datas,setData]=useState([
    { title:'yash',id:'0' },
    { title:'bash',id:'1' },
   ])

  const [name,setName]=useState('')
  function preview(dummy)
  {
    if(dummy.name)
    { 
      return (
        <View>
          <Text> {dummy.name} </Text>
        </View>
      )
    }
    else {
      return (
        <View>
          <Text> please enter the name</Text>
        </View>
      )
    }
  }
  

  function action(id){
   console.log(id)

  }

  return(
    <View  style={Styles.container}> 
      <Text style={{ paddingTop:190,margin:10,fontSize:50 }}  > Todo App </Text>
      
      <Text> preview :- { preview({name}) } </Text>
      
      <TextInput style={Styles.input} class="some" value={name}  onChangeText={ (text) => (setName(text))} 
      />
     
      <Button title="submit" onPress={()=> 
        (
          setData([...datas,{
              title:name,
              id:datas.length,
            }]),
            setName('')
          )} 
      />

  <FlatList 
       
        keyExtractor={(item) => item.id.toString()} 
        data={datas} 
        renderItem={({ item }) => ( 
          <TouchableOpacity onPress={() => (action(item.id)) } > 
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  )
}



const Styles = StyleSheet.create({

  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    width:230,
    margin:20,
    padding:5,
    borderWidth:1,
    borderColor:'grey',
    textAlign:'center',
  }


})

