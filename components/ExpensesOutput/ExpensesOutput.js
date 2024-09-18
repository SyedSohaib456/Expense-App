import {View,StyleSheet,Text} from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constans/styles'



function ExpensesOutput({expenses,expensePeriod,fallBackText}) {
    
  let content = <Text style={styles.infotext} >{fallBackText}</Text>
   
  if (expenses.length > 0) {
    content= <ExpensesList expenses={expenses} />
  }

  return (
   <View style={styles.ctn} >
      <ExpensesSummary  periodName={expensePeriod} expenses={expenses} />
      {content}
   </View>
  )
}

const styles=StyleSheet.create({
ctn:{
    flex:1,
    paddingHorizontal:24,
    paddingTop:24,
    backgroundColor:GlobalStyles.colors.primary700,
    paddingBottom:0
},
infotext:{
  fontSize:16,
  color:'white',
  textAlign:'center',
  marginTop:32
}
})

export default ExpensesOutput
