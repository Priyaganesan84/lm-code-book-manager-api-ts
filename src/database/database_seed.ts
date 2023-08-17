import { Book } from "../models/book";
import { getBooks } from "../services/books";

export const populateDummyData = async () => {
	// Populate environment with some dummy data in dev
	console.log("🍼 Populating database with dummy data");
	await Book.sync({ force: true });
	await Book.create({
		bookId: 1,
		title: "The Hobbit",
		author: "J. R. R. Tolkien",
		description: "Someone finds a nice piece of jewellery while on holiday.",
	});
	await Book.create({
		bookId: 2,
		title: "The Shop Before Life",
		author: "Neil Hughes",
		description:
			"Before being born, each person must visit the magical Shop Before Life, where they choose what kind of person they will become down on Earth...",
	});
	await Book.create({
		bookId: 3,
		title: "The Great Expectation",
		author: "Charles Dickens",
		description:"A Nice story..",
	});
	await Book.create({
		bookId: 4,
		title: "The Tale of Two cities",
		author: "Charles Dickens",
		description:"A Nice story..",
	});
	await Book.create({
		bookId: 5,
		title: "Christmas Carol",
		author: "Charles Dickens",
		description:"A Christmas story..",
	});

   
   const bookCount = (await Book.findAll()).length;
	console.log(
		`📚 ${bookCount} book${bookCount !== 1 ? "s" : ""} added to table`
	);
};
