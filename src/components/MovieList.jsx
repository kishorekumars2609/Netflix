import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import Cards from "./Cards"
const MovieList = (movie_no) => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()
    // useEffect(() => {
    //     getData()
    // }, [])
    useEffect(() => {
        getData()
    }, [type])

    const getData = async() => {
        console.log(movie_no)

       // fetch(`https://api.themoviedb.org/3/movie/${movie_id}646389/similar?api_key=5234fd398d16a8d13e43481d9314d6f9&language=en-US&page=1`)
     await   fetch(`https://api.themoviedb.org/3/movie/646389/recommendations?api_key=5234fd398d16a8d13e43481d9314d6f9&language=en-US&page=1`)
       .then(res => res.json())
        .then(data => setMovieList(data.results))
        
        
    }
console.log(movieList)
    return (
        <div >
            <div className=" flex flex-wrap justify-center">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList