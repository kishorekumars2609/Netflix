const key = '5234fd398d16a8d13e43481d9314d6f9'
const similar= 843794
const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,

    requestAction:`https://api.themoviedb.org/3//discover/movie?api_key=${key}&with_genres=35`,
   //requestLatest:`https://api.themoviedb.org/3/movie/latest?language=en-US`,
     similarurl:`
     https://api.themoviedb.org/3/movie/315162/similar?api_key=5234fd398d16a8d13e43481d9314d6f9&language=en-US&page=1`
};

export default requests 