//action creator
import {DELETE_ARTICLE, INCREMENT, CHANGE_DATE_RANGE, CHANGE_SELECTION} from '../constants';


export function increment() {
    return {
        type: INCREMENT
    }
}
export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}
export function changeDateRange() {
    return {
        type: CHANGE_DATE_RANGE
    }
}

export function changeSelection() {
    return {
        type: CHANGE_SELECTION
    }
}