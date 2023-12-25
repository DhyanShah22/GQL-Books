const {gql} = require('apollo-server')

module.exports = gql`
type Book{
    BookName: String
    Description: String
    AuthorName: String
    Review: String 
    Rating: Int
}

input BookInput {
    BookName: String
    Description: String
    AuthorName: String
    Review: String 
    Rating: Int
}
type Query {
    book(ID: ID!): Book!
    getBook(amount: Int): [Book]
}

type Mutation {
    createBook(bookInput: BookInput): Book!
    deleteBook(ID :ID! ): Boolean 
    editBook(ID: ID!, bookInput: BookInput): Boolean
}
`