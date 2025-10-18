import { Book } from "../models/Book.js";

export const resolvers = {
  Query: {
    books: async () => await Book.find(),
    book: async (_, { id }) => await Book.findById(id),
  },
  Mutation: {
    addBook: async (_, { title, author, year }) => {
      const book = new Book({ title, author, year });
      await book.save();
      return book;
    },
    updateBook: async (_, { id, title, author, year }) => {
      return await Book.findByIdAndUpdate(id, { title, author, year }, { new: true });
    },
    deleteBook: async (_, { id }) => {
      await Book.findByIdAndDelete(id);
      return "Book deleted successfully";
    },
  },
};
