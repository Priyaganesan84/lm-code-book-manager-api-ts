import { Book } from "../models/book";
import { deleteBook } from '../controllers/books_controller';

export const getBooks = async () => {
	return Book.findAll();
};

export const getBook = async (bookId: number) => {
	return Book.findOne({
		where: { bookId },
	});
};

export const saveBook = async (book: Book) => {
	return Book.create<Book>(book);
};

// User Story 4 - Update Book By Id Solution
export const updateBook = async (bookId: number, book: Book) => {
	return Book.update(book, {
		where: {
			bookId,
		},
	});
};


//user story 5 -- Delete book by id solution
export const deletebook = async (bookId: number) => {
	return Book.destroy({
		where: { bookId },
	});
};