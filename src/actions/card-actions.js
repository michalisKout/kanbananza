export const CREATE_CARD = 'CREATE_CARD';

const defaultCardData = {
    title: '',
    description: '',
    assignedTo: ''
};

export const onCreateCard = (listId, cardData) => {
    const cardId = Date.now().toString();

    const card = {
        id: cardId,
        ...defaultCardData,
        ...cardData
    }
    
    return {
        type: CREATE_CARD,
        payload: {card, listId, cardId}
    }
}