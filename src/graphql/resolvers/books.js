const books = [{ title: "initial book" }];

const Query = {
  book: (parent, params, context) => {
    const { title } = params;
    return books.find(book => book.title === title);
  },
  books: (parent, params, context) => {
    return books;
  }
};

const Mutation = {
  createBook: (parent, params, context) => {
    const { title } = params;
    books.push({ title });
    return { title };
  }
};

module.exports = {
  Query,
  Mutation
};
