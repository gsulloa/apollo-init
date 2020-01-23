/* eslint-disable */
const books = [{ title: 'initial book' }];

export const Query = {
  book: (parent, params, context) => {
    const { title } = params;
    return books.find(book => book.title === title);
  },
  books: (parent, params, context) => {
    return books;
  },
};

export const Mutation = {
  createBook: (parent, params, context) => {
    const { title } = params;
    books.push({ title });
    return { title };
  },
};
