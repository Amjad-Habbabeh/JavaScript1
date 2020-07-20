'use strict';
let myBooks = [
  { title: '1984', author: 'George Orwell', alreadyRead: false },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky.',
    alreadyRead: false,
  },
  {
    title: 'The forty rules of love',
    author: 'Elif Shafak',
    alreadyRead: true,
  },
];

myBooks.forEach((element) => {
  console.log('"' + element.title + ' by ' + element.author + '"');

  if (element.alreadyRead) {
    console.log('already I had read ' + '"' + element.title + '"');
  } else {
    console.log('I still have to read ' + '"' + element.title + '"');
  }
});
