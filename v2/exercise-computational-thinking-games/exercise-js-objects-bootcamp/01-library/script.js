const books = [
  {
    "title": "The vegetarian",
    "author": "Han Kang",
    "numPages": "252",
  },
  {
    "title": "The world without us",
    "author": "James Bond",
    "numPages": "324",
  },
  {
    "title": "Sapiens",
    "author": "Noa Yuval Harari",
    "numPages": "294",
  },
  {
    "title": "Walden",
    "author": "Henry Thoraux",
    "numPages": "321",
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "numPages": "252",
  },
];

function searchBook(booksObj, key) {

      let found = false;

      booksObj.forEach((book) => {
            if (book.title.toLowerCase().includes(key.toLowerCase())) {
                  console.log(book.title)

                  found = true;
            }
      });
      if (!found) {
            console.log(null);
      }
}
searchBook(books, "sApiens" );