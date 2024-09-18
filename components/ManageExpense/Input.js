import { Text, TextInput, View,StyleSheet } from 'react-native'
import { GlobalStyles } from '../../constans/styles'

function Input({label,textInputConfig,style,invalid}) {
    let inputStyles= [styles.input]
    if (textInputConfig && textInputConfig.multiline ) {
        inputStyles.push(styles.inputMultiline)
    }
    if (invalid) {
        inputStyles.push(styles.invalidInput)
    }
  return (
   <View style={[styles.inputCtn ,style ]} >
     <Text style={[styles.label , invalid && styles.invalidLabel ]} >
      {label}  
    </Text> 
    <TextInput style={inputStyles} {...textInputConfig} />
   </View>
  )
}

export default Input

const styles=StyleSheet.create({
    inputCtn:{
        marginHorizontal:4,
        marginVertical:16,
        
    },
    label:{
        fontSize:13,
        color:GlobalStyles.colors.primary100,
        marginBottom:4,
        fontWeight:'bold'
    },
    input:{
        backgroundColor:GlobalStyles.colors.primary100,
        color:GlobalStyles.colors.primary700,
        padding:6,
        borderRadius:6,
        fontSize:18,
    },
    inputMultiline:{
        minHeight:100,
        textAlignVertical:'top'
    },
    invalidLabel:{
        color:GlobalStyles.colors.error500
    },
    invalidInput:{
       backgroundColor:GlobalStyles.colors.error50
    },
})