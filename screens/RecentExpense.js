import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useContext, useEffect, useState } from 'react';
import { ExpenseContext } from '../store/expense-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpense } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

function RecentExpense() {
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);

    const expenseCtx = useContext(ExpenseContext);

    useEffect(() => {
        async function getExpenses() {
            setIsFetching(true);
            try {
                const expenses = await fetchExpense();
                expenseCtx.setExpenses(expenses);
            } catch (error) {
                setError("Couldn't fetch expenses!");
            } finally {
                setIsFetching(false);  
            }
        }
        getExpenses();
    }, []);

    function errorHandler() {
        setError(null);
    }

    if (error && !isFetching) {
        return <ErrorOverlay message={error} onConfirm={errorHandler} />;
    }

    if (isFetching) {
        return <LoadingOverlay />;
    }

    const recentExpenses = expenseCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        return expense.date >= date7DaysAgo && expense.date <= today;
    });

    return (
        <ExpensesOutput
            periodName="Recent Expenses"
            expenses={recentExpenses}
            fallBackText="No expenses registered for the last 7 days."
        />
    );
}

export default RecentExpense;
