export const mapMovementsListApiToVm = movements =>
 Array.isArray(movements)
 ? movements.map(movements => mapMovementsApiToVm(movements))
 : [];
 
const mapMovementsApiToVm = movements => ({
    transaction: new Date(movements.transaction).toLocaleDateString(),
    realTransaction: new Date(movements.realTransaction).toLocaleDateString(),
    description: movements.description,
    amount: `${movements.amount} €`,
    balance: `${movements.balance} €`,
});


