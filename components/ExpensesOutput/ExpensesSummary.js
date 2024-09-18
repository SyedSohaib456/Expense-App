import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constans/styles";

function ExpensesSummary({ periodName, expenses }) {
    // Check if expenses is defined and is an array
    const expensesSum = Array.isArray(expenses) ? 
        expenses.reduce((sum, expense) => sum + expense.amount, 0) : 0;

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    period: {
        fontSize: 12,
        color: GlobalStyles.colors.primary400,
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    },
});

export default ExpensesSummary;
