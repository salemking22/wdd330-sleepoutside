// 📌 Wrapper for querySelector — returns the first matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// 📦 Retrieve data from localStorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// 💾 Save data to localStorage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// 👆 Set a listener for both touchend and click events
export function setClick(selector, callback) {
  const element = qs(selector);
  if (!element) return;
  element.addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  element.addEventListener("click", callback);
}

// 🔍 Get a URL parameter by name
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

// 🧩 Render a list of items using a template function
export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  if (!parentElement || !Array.isArray(list)) return;

  if (clear) {
    parentElement.innerHTML = "";
  }

  const htmlStrings = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

// 🧱 Load header and footer HTML into the page
export function loadHeaderFooter() {
  fetch("../partials/header.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("header").innerHTML = data;
    });

  fetch("../partials/footer.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("footer").innerHTML = data;
    });
}