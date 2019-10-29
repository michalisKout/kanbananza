import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import get from 'lodash/fp/get';

export const addEntity = (state, entity, id) => {
    return pipe(
        set(['entities', id], entity),
        set('ids', state.ids.concat(id))
    )();
}

export const addIdToChildren = (state, entityId, property, childId) => {
    const path = ['entities', entityId, property];
    const children = get(path)(state);
    return set(path, children.concat(childId), state);
}