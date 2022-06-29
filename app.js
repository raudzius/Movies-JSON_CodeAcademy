const ul = document.querySelector('ul');

fetch('./movies.json')
  .then((res) => res.json())
  .then((movies) => {
    movies.forEach((movie) => {
      const movieLi = document.createElement('li');
      const headerDiv = document.createElement('div');
      const titleDiv = document.createElement('div');
      const movieTitleH2 = document.createElement('h2');
      const movieReleaseYearSpan = document.createElement('span');
      const userRatingDiv = document.createElement('div');
      const ratingSpan = document.createElement('span');
      const votesSpan = document.createElement('span');
      const bodyDiv = document.createElement('div');
      const bodyDivUl = document.createElement('ul');
      const genres = document.createElement('li');
      const genresUl = document.createElement('ul');
      const description = document.createElement('li');
      const directors = document.createElement('li');
      const directorsUl = document.createElement('ul');
      const stars = document.createElement('li');
      const starsUl = document.createElement('ul');
      movieLi.id = 'movieLi';
      headerDiv.id = 'headerDiv';
      genresUl.id = 'genresUl';

      movieTitleH2.textContent = movie.title;
      movieReleaseYearSpan.textContent = movie.releaseYear;
      ratingSpan.textContent = movie.userRating.rating;
      votesSpan.textContent = '/' + movie.userRating.votes;
      description.innerText = movie.description;

      movie.genres.forEach((genre) => {
        const li = document.createElement('li');
        li.textContent = genre;
        genresUl.append(li);
      });
      movie.directors.forEach((director) => {
        const li = document.createElement('li');
        li.textContent = director;
        directorsUl.append(li);
      });
      movie.stars.forEach((star) => {
        const li = document.createElement('li');
        li.textContent = star;
        starsUl.append(li);
      });

      stars.append(starsUl);
      directors.append(directorsUl);
      genres.append(genresUl);
      bodyDivUl.append(genres, description, directors, stars);
      bodyDiv.append(bodyDivUl);
      userRatingDiv.append(ratingSpan, votesSpan);
      titleDiv.append(movieTitleH2, movieReleaseYearSpan);
      headerDiv.append(titleDiv, userRatingDiv);
      movieLi.append(headerDiv, bodyDiv);
      ul.append(movieLi);
    });
  });
