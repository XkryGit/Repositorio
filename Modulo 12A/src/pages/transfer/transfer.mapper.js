export const mapAccountVmToApi = transfer => ({
    sourceAccount: transfer.sourceAccount,
    iban: transfer.iban,
    name: transfer.name,
    amount: transfer.amount,
    concept: transfer.concept,
    notes: transfer.notes,
    date: transfer.date,
    email: transfer.email,
});