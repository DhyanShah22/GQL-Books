const Book = require('../Models/book')

module.exports = {
    Query: {
        async book(_, {ID}) {
            return await Book.findById(ID)
        },
        async getBook(_, {amount}) {
            return await Book.find().sort({createdAt: -1}).limit(amount)
        }
    },
    Mutation: {
        async createBook(_, {bookInput: {BookName, Description, AuthorName, Review, Rating}}) {
            const createdBook = new Book ({
                BookName: BookName,
                Description: Description,
                AuthorName: AuthorName,
                Review: Review,
                Rating: Rating
            })

            const res = await createdBook.save()
            console.log(res._doc)

            return {
                id: res.id,
                ...res._doc
            }
        },
        async deleteBook(_, {ID}) {
            const wasDeleted = (await Book.deleteOne({_id :ID})).deletedCount
            return wasDeleted
        },
        async editBook(_, {ID, bookInput: {BookName, Description, AuthorName, Review, Rating}}) {
            const wasEdited = (await Book.updateOne({_id: ID}, {
                BookName: BookName,
                Description: Description,
                AuthorName: AuthorName,
                Review: Review,
                Rating: Rating
            })).modifiedCount
            return wasEdited
        }
    }
}