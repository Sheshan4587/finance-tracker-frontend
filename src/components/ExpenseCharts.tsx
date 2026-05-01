import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import type { ExpenseResponse } from '../types/Expense';

/**
 * The BarChart component from the Recharts library is used to create a bar chart that visualizes the total expenses for each date.
 * The BarChart component is configured with a width of 350 pixels and a height of 300 pixels, and it uses the dateData array as its data source.
 * The CartesianGrid component adds a grid to the chart for better readability, with a stroke color of #1f2937.
 * The XAxis component defines the x-axis of the chart, using the "date" property from the data as the key for the x-axis labels. The stroke color is set to #6b7280, and the tick labels are styled with a font size of 10.
 * The YAxis component defines the y-axis of the chart, with a stroke color of #6b7280.
 * The Tooltip component provides interactive tooltips that display additional information when hovering over the bars. The contentStyle and labelStyle properties customize the appearance of the tooltip.
 * The Bar component represents the bars in the chart, using the "total" property from the data as the key for the bar heights. The fill color is set to #06b6d4, and the radius property gives the bars rounded corners on the top.
 */

interface ExpenseChartsProps {
    expenses: ExpenseResponse[]; // An array of ExpenseResponse objects representing the expenses to be visualized in the charts.
}

function ExpenseCharts(props: ExpenseChartsProps) {
    const { expenses } = props; // Destructuring the expenses prop to access the array of ExpenseResponse objects.

    // Group by date
    // For the Bar Chart
    // Group expenses by date and sum the amounts for each date
    // The reduce function iterates through the expenses array and accumulates the total amount for each unique date.
    // The result is an array of objects, where each object contains a date and the corresponding total amount spent on that date.
    // The reduce function initializes an empty array (acc) to store the aggregated data.
    // For each expense, it checks if there is already an entry in the accumulator array for the expense's date. If there is, it adds the expense amount to the existing total. If there isn't, it creates a new entry with the date and the initial amount.

    const dateData = expenses.reduce((acc: { date: string, total: number }[], expense) => {
        const existing = acc.find(item => item.date === expense.date)
        if (existing) {
            existing.total += expense.amount
        } else {
            acc.push({ date: expense.date, total: expense.amount })
        }
        return acc
    }, []);
    return (
        <div className="bg-gray-900 border border-cyan-800 rounded-2xl p-6 shadow-lg shadow-cyan-900/20">
            <h2 className="text-cyan-400 text-lg font-semibold mb-4 tracking-widest uppercase">
                Expenses by Date
            </h2>
            <BarChart width={350} height={300} data={dateData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="date" stroke="#6b7280" tick={{ fontSize: 10 }} />
                <YAxis stroke="#6b7280" />
                <Tooltip
                    contentStyle={{ backgroundColor: '#111827', border: '1px solid #06b6d4' }}
                    labelStyle={{ color: '#06b6d4' }}
                />
                <Bar dataKey="total" fill="#06b6d4" radius={[4, 4, 0, 0]} />
            </BarChart>
        </div >
    );
}

export default ExpenseCharts;
