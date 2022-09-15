import { addMovementRows } from './movements.helpers';
import { history } from '../../core/router/history';
import { getMovementList, getAllMovements } from './movements.api';
import { mapAccountApiToVm } from '../account/account.mappers';
import { mapMovementsListApiToVm } from './movements.mappers';
import { getAccountListMov } from '../account-list/account-list.api';


const params = history.getParams();
const isEditMode = Boolean(params.id);

    if (isEditMode) {
        getAccountListMov(params.id).then(apiAccount => {
            const account = mapAccountApiToVm(apiAccount);  

            document.getElementById('alias').innerHTML= account.alias;
            document.getElementById('iban').innerHTML= account.iban;
            document.getElementById('balance').innerHTML= `${account.balance} €`;
     
        });

        getMovementList(params.id).then(movements => {
            addMovementRows(mapMovementsListApiToVm(movements));
           
        });

        

            


} else { getAllMovements().then(allMovements => {
    addMovementRows(mapMovementsListApiToVm(allMovements));
        document.querySelector('.subtitulo_paginas').style.visibility = 'hidden';
        document.querySelector('.saldo_disponible').style.visibility ='hidden';
        document.querySelector('.iban').style.visibility='hidden';
})
};



