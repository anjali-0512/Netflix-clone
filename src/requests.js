const API_KEY = "47b6418ef9d402256029c3c1ce1b3ac3";

const requests={

    fetchtrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `discover/tv?api_key=${Api_KEY}&with_networks=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre=99`,

}

export default requests;