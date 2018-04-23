import {articles} from '../fixtures';

export default (article, action) => {
    const { type } = action;
    switch(type) {
        case 'DELETE': return articles.find((elem, index) => elem === article)
    }
    return articles
}