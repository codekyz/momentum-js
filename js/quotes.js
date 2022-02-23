const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

// random quote api
const updateQuote = async() => {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  if (response.ok) {
    quote.innerText = `"${data.content}"`;
    author.innerText = data.author;
  } else {
    quote.textContent = "An error occured";
    console.log(data);
  }
}

updateQuote();

// const quotes = [
//   {
//     quote: "Not the senses I have but what I do with them is my kingdom.",
//     author: "Helen Keller",
//   },
//   {
//     quote: "Study without desire spoils the memory, and it retains nothing that it takes in.",
//     author: "Leonardo da Vinci",
//   },
//   {
//     quote: "Only I can change my life. No one can do it for me.",
//     author: "Carol Burnett",
//   },
//   {
//     quote: "We have some salt of our youth in us.",
//     author: "William Shakespeare",
//   },
//   {
//     quote: "A mind troubled by doubt cannot focus on the course to victory.",
//     author: "Arthur Golden",
//   },
//   {
//     quote: "Whenever I hear, 'It can't be done,' I know I'm close to success.",
//     author: "Michael Flatley",
//   },
//   {
//     quote: "All you need in this life is ignorance and confidence; then success is sure.",
//     author: "Mark Twain",
//   },
//   {
//     quote: "Energy and persistence conquer all things.",
//     author: "Benjamin Franklin",
//   },
//   {
//     quote: "Every time we say, 'Let there be!' in any form, something happens.",
//     author: "Stella Terrill Mann",
//   },
//   {
//     quote: "Just because something doesn't do what you planned it to do doesn't mean it's useless.",
//     author: "Thomas A. Edison",
//   },
// ];

// const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// quote.innerText = todaysQuote.quote;
// author.innerText = todaysQuote.author;