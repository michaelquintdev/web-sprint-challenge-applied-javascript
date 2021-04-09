import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  
  const div = document.createElement("div");
  const divHeadline = document.createElement("div");
  const divAuthor =  document.createElement("div");
  const divImg = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");

  div.classList.add("card");
  divHeadline.classList.add("headline");
  divAuthor.classList.add("author");
  divImg.classList.add("img-container");
  
  divHeadline.textContent = article.headline;
  img.src = article.authorPhoto;
  span.textContent = article.authorName;

  div.appendChild(divHeadline);
  div.appendChild(divAuthor);
  divAuthor.appendChild(divImg);
  divImg.appendChild(img);
  divAuthor.appendChild(span);

  div.addEventListener("click", click => {
    console.log(divHeadline);
  })

  return div;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const element = document.querySelector(selector);
  axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then(result => {
    console.log(result);
    const bootstrapObj = result.data.articles.bootstrap;
    const javascriptObj = result.data.articles.javascript;
    const jqueryObj = result.data.articles.jquery;
    const nodeObj = result.data.articles.node;
    const technologyObj = result.data.articles.technology;

    bootstrapObj.forEach(item => {
      const newCard = Card(item);
      element.appendChild(newCard);
    })
    javascriptObj.forEach(item => {
      const newCard = Card(item);
      element.appendChild(newCard);
    })
    jqueryObj.forEach(item => {
      const newCard = Card(item);
      element.appendChild(newCard);
    })
    nodeObj.forEach(item => {
      const newCard = Card(item);
      element.appendChild(newCard);
    })
    technologyObj.forEach(item => {
      const newCard = Card(item);
      element.appendChild(newCard);
    })
  })
  .catch(error => {
    console.log(error);
  })
}

export { Card, cardAppender }
