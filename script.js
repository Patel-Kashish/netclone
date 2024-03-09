const api = "api_key=4b9f5cf931aaf5b1763aaa3c9f695f8d";
const base_url = "https://api.themoviedb.org/3";
const img_url ="https://image.tmdb.org/t/p/w300";

// requests for movies data

const requests ={

    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

// Used to truncate the string

function truncate(str ,n) {
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
}

//movie rows

fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerHTML = "NETFLIX ORIGINALS";
        row.appendChild(title);
        const row__posters = document.createElement("div");
        row__posters.className = "row__posters";
        row.appendChild(row__posters);

    data.results.forEach((movie) => {
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";
        var s = movie.name.replace(/\s+/g, "");
        poster.id = s;
        poster.src = img_url + movie.poster_path;
        row__posters.appendChild(poster);
    });
});

//Trending

fetch(requests.fetchTrending)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerHTML = "Tops Rated";
        row.appendChild(title);
        const row__posters = document.createElement("div");
        row__posters.className = "row__posters";
        row.appendChild(row__posters);

    data.results.forEach((movie) => {
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.poster_path;
        row__posters.appendChild(poster);
    });
});

//   Action  Movies  

fetch(requests.fetchActionMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        const title = document.createElement("h2"); 
        title.className = "row__title";
        title.innerHTML = "Action Movies";
        row.appendChild(title);
        const row__posters = document.createElement("div");
        row__posters.className = "row__posters";
        row.appendChild(row__posters);

    data.results.forEach((movie) => {
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row__posters.appendChild(poster);
    });
});

//   comedy    

fetch(requests.fetchComedyMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerHTML = "Comedy Movies";
        row.appendChild(title);
        const row__posters = document.createElement("div");
        row__posters.className = "row__posters";
        row.appendChild(row__posters);

    data.results.forEach((movie) => {
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row__posters.appendChild(poster);
    });
});


//   horror     

fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerHTML = "Horror Movies";
        row.appendChild(title);
        const row__posters = document.createElement("div");
        row__posters.className = "row__posters";
        row.appendChild(row__posters);

    data.results.forEach((movie) => {
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row__posters.appendChild(poster);
    });
});

//   romance     

fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerHTML = "Romance Movies";
        row.appendChild(title);
        const row__posters = document.createElement("div");
        row__posters.className = "row__posters";
        row.appendChild(row__posters);

    data.results.forEach((movie) => {
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row__posters.appendChild(poster);
    });
});

//   documentry      

fetch(requests.fetchDocumentaries)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerHTML = "Documentaries";
        row.appendChild(title);
        const row__posters = document.createElement("div");
        row__posters.className = "row__posters";
        row.appendChild(row__posters);

    data.results.forEach((movie) => {
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row__posters.appendChild(poster);
    });
});
