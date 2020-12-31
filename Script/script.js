const fetchAPI = async () => {
  const data = await fetch("https://raw.githubusercontent.com/kunatastic/quote-api/main/data.json");
  const quotes = await data.json();
  localStorage.setItem("quotes", JSON.stringify(quotes));
  extract(quotes);
};

function toFetchAPI() {
  if (localStorage.getItem("quotes") == null) {
    fetchAPI();
    console.log("Fetched");
  } else {
    var retrievedObject = localStorage.getItem("quotes");
    var retrievedObject = JSON.parse(retrievedObject);
    extract(retrievedObject);
  }
}

function extract(quotes) {
  //here lies all the quotes
  console.log(quotes);
}
toFetchAPI();
