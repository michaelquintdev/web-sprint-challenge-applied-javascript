import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("topics")

  topics.forEach(item => {
    const newClass = document.createElement("div")
    newClass.classList.add("tab");
    newClass.textContent = item;
    mainDiv.appendChild(newClass);
  })

  return mainDiv;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios
  .get('https://lambda-times-api.herokuapp.com/topics')
  .then(res =>{
    const newArray = res.data.topics;
    const element = document.querySelector(selector);
    element.appendChild(Tabs(newArray));
  })
.catch(error => {
  console.log(error);
})
}
export { Tabs, tabsAppender }
