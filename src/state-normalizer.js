import { normalize, schema } from 'normalizr';
import defaultState from './default-state.json';

const user = new schema.Entity('users');
const card = new schema.Entity('cards', { assignedTo: user });
const list = new schema.Entity('lists', { cards: [card]});

const normalizedUsers = normalize(defaultState.users, [user]);
const normalizedLists = normalize(defaultState.lists, [list]);
 

export const lists = {
    entities: normalizedLists.entities.lists,
    ids: normalizedLists.result
}

export const users = {
    entities: normalizedUsers.entities.lists,
    ids: normalizedUsers.result
}

export const cards = {
    entities: normalizedLists.entities.cards,
    ids: Object.keys(normalizedLists.entities.cards)
}

export default {
    lists,
    users,
    cards
}
