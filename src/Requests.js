const key = '5234fd398d16a8d13e43481d9314d6f9'


// const API_KEY = 'AIzaSyD8_8TwnY0YMBEPVZ-8OiOdSTRW7ANnaSs';
// const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=`;

// async function fetchYoutubeLink(title) {
//   const response = await fetch(SEARCH_URL + encodeURIComponent(title) + '&key=' + 'AIzaSyD8_8TwnY0YMBEPVZ');
//   const json = await response.json();
//   const video = json.items.find(item => item.id.kind === 'youtube#video');
//   if (!video) {
//     throw new Error('No video found with the given title.');
//   }
//   return `https://www.youtube.com/watch?v=${video.id.videoId}`;
// }


const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
   // requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
    requestAction:`https://api.themoviedb.org/3//discover/movie?api_key=${key}&with_genres=35`,
};

export default requests 