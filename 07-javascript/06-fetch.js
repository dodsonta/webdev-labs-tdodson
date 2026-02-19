const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const addToDom = (book) => {
  let bookElement = document.createElement("div");
  let title = document.createElement("div");
  let author = document.createElement("div");
  let year = document.createElement("div");
  let pages = document.createElement("div");

  title.textContent = book.name;
  author.textContent = `by ${book.authors[0]}`;
  year.textContent = book.released.split("-")[0];
  pages.textContent = `${book.numberOfPages} pages`;

  bookElement.append(title);
  bookElement.append(author);
  bookElement.append(year);
  bookElement.append(pages);

  app.append(bookElement);
};

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((book) => {
        const year = book.released.split("-")[0];
        console.log(
          `${book.name}\n by ${book.authors[0]}\n ${year}\n${book.numberOfPages} pages`,
        );
        addToDom(book);
      });
    })
    .catch((error) => {
      console.error(error);
      let element = document.createElement("div");
      element.textContent = "An error occurred.";
      app.append(element);
    })
    .finally(() => {
      let loading = document.querySelector("#loading");
      app.removeChild(loading);
    });
};

fetchData(url);
