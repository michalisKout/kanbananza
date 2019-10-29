import {cards as defaultCards } from '../state-normalizer';
import { CREATE_CARD } from '../actions/card-actions';
import { addEntity } from './_utilities';

const cardsReducer = (cards = defaultCards, action) => {
    if(action.type === CREATE_CARD ) {
        const {card, cardId} = action.payload;

        return addEntity(cards, card, cardId);
    }
    return cards;
}

export default cardsReducer;