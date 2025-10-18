export const typeDefs = `
  type Book {
    id: ID!
    title: String!
    author: String!
    year: Int
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, year: Int): Book
    updateBook(id: ID!, title: String, author: String, year: Int): Book
    deleteBook(id: ID!): String
  }
`;
