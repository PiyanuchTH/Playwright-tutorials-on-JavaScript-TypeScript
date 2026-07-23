var expenses = [2450, 860, 760, 3000, 900]
console.log(expenses)

var sum = 0
for (i = 0 ; i < expenses.length ; i++ )
{
    sum += expenses[i]
}
console.log(sum)


var maxExpenses = Math.max(...expenses)
console.log(maxExpenses)

var minExpenses = Math.min(...expenses)
console.log(minExpenses)