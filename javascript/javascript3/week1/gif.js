const searchWord = document.getElementById("search-word");
const btnSearch = document.getElementById("search-btn");

const div = document.getElementById("giphy-content");
btnSearch.addEventListener("click", getGiph);
function getGiph() {
  const giphSearch = searchWord.value;
  const countNumber = document.getElementById("count-number").value;
  if (searchWord === "") div.innerHTML = "pl enter valid search";
  else {
    let url;
    if (countNumber > 0)
      url = `http://api.giphy.com/v1/gifs/search?q=${giphSearch}&api_key=EmYRO1VcBqwrBZ9EQrRORj7YAzAEy68V&limit=${countNumber}`;
    else
      url = `http://api.giphy.com/v1/gifs/search?q=${giphSearch}&api_key=EmYRO1VcBqwrBZ9EQrRORj7YAzAEy68V`;
    console.log(url);
    console.log(countNumber);
    getGiphy(url);
  }
}
function getGiphy(url) {
  fetch(url)
    .then((response) => response.json())
    .then((content) => {
      console.log(content.data);
      console.log("META : ", content.meta);
      const giphyData = content.data;
      const giphyUrl = giphyData.map((gif) => gif.images.original.url);
      console.log("URL : ", giphyUrl);
      loadGiphy(giphyUrl);
    })
    .catch((err) => {
      console.error(err);
    });
}
function loadGiphy(giphyUrl) {
  giphyUrl.forEach((giphyUrl) => {
    const giphyLi = document.createElement("li");
    const giphyImg = document.createElement("img");
    giphyImg.src = giphyUrl;
    giphyLi.appendChild(giphyImg);
    div.appendChild(giphyLi);
  });
}
