import { lists as defaultLists } from '../state-normalizer';
import {addIdToChildren} from './_utilities';

// set(chainOfProperties, what you want to replace, the object);
const listsReducer =  (lists = defaultLists, action) => {
    if (action.type === 'CARD_CREATE') {
        const { cardId, listId } = action.payload;
        const entities = { ...lists.entities };
        const cards =  entities[listId].cards.concat(cardId);

        return addIdToChildren(listId, cards, lists, cardId);
        // entities[listId] = {
        //     ...entities[listId],
        //     cards: entities[listId].cards.concat(cardId)
        // }

        // return {
        //     lists,
        //     ...entities
        // }
    }
    return lists;
}

export default listsReducer;
