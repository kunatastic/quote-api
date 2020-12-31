# quote-api

## What is this API?

This API contains 1600+ beautiful quotes and each quote is more deeper than the other one.

## Sample Snippet how to use this API in your project.

```
const fetchAPI = async () => {
  const data = await fetch("https://raw.githubusercontent.com/kunatastic/quote-api/main/data.json");
  const quotes = await data.json();
  console.log(quotes);
};
fetchAPI()
```

## Credits

All the credits goes to this [FreeCodeCamp forum](https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373) where I found this [API](https://type.fit/api/quotes) but I thought I should deploy it myself for future use if the original stops accepting requests.
