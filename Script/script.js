const fetchAPI = async () => {
  const data = await fetch("https://type.fit/api/quotes");
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
