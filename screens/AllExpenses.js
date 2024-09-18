import {View,Text} from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { useContext } from 'react'
import { ExpenseContext } from '../store/expense-context'

function AllExpenses() {

  const expenseCtx=useContext(ExpenseContext)

  return (
       <ExpensesOutput expenses={expenseCtx.expenses}  expensePeriod='Total' fallBackText="No registered expenses found!" />
  )
}

export default AllExpenses
