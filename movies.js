fetch('./movies-list.json')
  .then((res) => res.json())
  .then((movieIds) => {
    movieIds.forEach((item) => {
      fetch(`./movies/${item}.json`)
        .then((res) => res.json())
        .then((movie) => {
          const div = document.createElement('div');
          div.innerHTML = `<h2>${movie.title}</h2>
                          <p>${movie.userRating.rating}</p>
                          <p>${movie.userRating.votes}</p>
                          <p>${movie.releaseYear}</p>
                          <p>${movie.description}</p>
                          <p>${movie.genres}</p>
                          <p>${movie.directors}</p>
                          <p>${movie.stars}</p>`;
          document.body.append(div);
        });
    });
  });
