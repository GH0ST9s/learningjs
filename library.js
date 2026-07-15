const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    price: 14.99,
    available: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    price: 12.5,
    available: false,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    price: 15.75,
    available: true,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    price: 10.99,
    available: true,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    price: 11.49,
    available: false,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    price: 13.99,
    available: true,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
    price: 16.25,
    available: true,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    price: 14.5,
    available: false,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    year: 2003,
    price: 18.99,
    available: true,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    price: 20.0,
    available: true,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    price: 29.99,
    available: false,
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    year: 2003,
    price: 17.25,
    available: true,
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    year: 2005,
    price: 15.99,
    available: true,
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2008,
    price: 16.49,
    available: false,
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    year: 2012,
    price: 14.25,
    available: true,
  },
  {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    year: 1996,
    price: 24.99,
    available: true,
  },
  {
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    year: 1950,
    price: 21.5,
    available: false,
  },
  {
    title: "Life of Pi",
    author: "Yann Martel",
    year: 2001,
    price: 15.0,
    available: true,
  },
  {
    title: "The Shining",
    author: "Stephen King",
    year: 1977,
    price: 19.75,
    available: true,
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    year: 1943,
    price: 9.99,
    available: false,
  },
];

// HTML Elements
const bookList = document.getElementById("list-books");

// Function calls
// displayBooks(books, bookList);

// Functions
function displayBooks(books, bookList) {
  bookList.innerHTML = "";
  books.forEach(({ title, author, year, price, available }) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${title}</strong><br>
                            Author: ${author}<br>
                            Published Year: ${year}<br>
                            Price: $${price}<br>`;
    // Available: ` + (available? "Yes": "Out of stock!");
    bookList.appendChild(li);
  });
}

function availableBooks(value) {
  if (value) {
    const availability = books.filter((book) => book.available === true);
    displayBooks(availability, bookList);
  } else {
    const availability = books.filter((book) => book.available === false);
    displayBooks(availability, bookList);
  }
}

function searchBooks(searchBy) {
  const searchText = document.getElementById(searchBy).value.toLowerCase();
  console.log(searchBy);
  const filteredBooks = books.filter((book) =>
    book[searchBy].toLowerCase().includes(searchText)
  );
  displayBooks(filteredBooks, bookList);
  return false;
}
