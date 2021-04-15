function handleSearchClick() {
  const searchInput = document.getElementById('searchBar__input');

  const resultsContainer = document.getElementById('resultsContainer');

  // make API request for GIF search
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=y1JgTYudliHa7vdPq4kMhieC7MUk9jLM&q=${searchInput.value}`)
    .then(function(res) {
      return res.json();
    })
    .then(function(body) {
      // clear results on the page
      resultsContainer.innerHTML = '';

      // loop through each data item
      body.data.forEach((gifItem) => {

        // extract gif image URL
        const imageUrl = gifItem.images.fixed_width.url;

        // create image element with gif image for src
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;

        // add the new image element to the end of the results
        resultsContainer.appendChild(imageElement);
      });
    });
}

// attach a function to call when the user clicks on the search bar button
document.getElementById('searchBar__button').addEventListener('click', handleSearchClick);
