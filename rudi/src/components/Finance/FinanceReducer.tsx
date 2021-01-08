const financeReducer = (state, action) => {

    if (action.type === 'ADD_EXPENSE') {
        const newData = [...state.expenseList, action.payload]
        return {...state, showModal:true, modalContent: 'Insert Done', expenseList: newData};
    } else if (action.type === 'NO_FULL_DATA') {
        return {...state, showModal:true, modalContent: 'You forget to insert something'};
    }

    if (action.type === 'CLOSE_MODAL') {
        return {...state, showModal:false}
    }

    throw new Error('Reducer Failed');
};

export default financeReducer;