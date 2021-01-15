import React  , {useState}from "react"
import { Text 
    , View 
    , TouchableOpacity
    , FlatList
    , Button
    , TextInput
} from "react-native"

const Todo = ()=>{

   
    
   const handletodo = ()=>{
       settodo([...todo, {title: text , key: `todo: ${todo.length + 1}`}])
   }
    const [text ,settext] = useState("./")
    const [todo , settodo] = useState([])
    return(
        <View>
             <View style={{
            flexDirection: "row", 
            padding: 22,
            
        }}>
            <TextInput
            placeholder=" enter name "
            style={{height: 50 ,
                borderBottomColor: " red",
                flex:1,
                fontSize:20,
                borderBottomColor: "green",
                borderBottomWidth: 2
                  
                }}
              onChangeText={ (e)=> settext(e)}
            />
            </View>
            <Text>ff</Text>
            
              <Button  title="add" 
                     onPress={ handletodo}
            />
                
            <FlatList
             data={todo}
             keyExtractor={(itm)=> itm.key}
             renderItem={({itm})=>{
                 { <Text>{itm.title}</Text>}
                 
             }}
            />
           

        </View>
    )
}

export default Todo