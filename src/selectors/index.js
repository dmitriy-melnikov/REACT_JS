import { createSelector } from 'reselect';

const filtersGetter = (state) => state.filters;
const articlesGetter = (state) => state.articles;
const idGetter = (state, props) => props.id;
const commentsGetter = (state) => state.comments;


export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    console.log('____________', 'recomputing filtration');
    const {selected, dateRange: {from, to}} = filters;
    return articles.filters(article => {
        const published = Date.parse(article.date);
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    });
});

export const commentSelector = createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments.find(comment => comment.id === id)
});

