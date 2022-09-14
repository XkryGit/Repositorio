export const dayValidator = ({ value }) => {
    const succeeded = parseInt(value) > 0 && parseInt(value) <= 31;

    return {
        succeeded,
        message: succeeded
        ?''
        :'Introduce un número que sea correcto',
    };
}


export const monthValidator = ({ value }) => {
    const succeeded = parseInt(value) > 0 && parseInt(value) <= 12;

    return {
        succeeded,
        message: succeeded
        ?''
        :'Introduce un número que sea correcto',
    };
}


export const yearValidator = ({ value }) => {
    const succeeded = parseInt(value) > 1900 && parseInt(value) <= 2022;

    return {
        succeeded,
        message: succeeded
        ?''
        :'Introduce un año correcto',
    };
}