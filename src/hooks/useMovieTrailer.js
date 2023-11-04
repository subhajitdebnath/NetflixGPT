import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieTrailer = (mainMovie) => {

    const dispatch = useDispatch();

    const getMovieTrailer = async() => {
        if(mainMovie) {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${mainMovie.id}/videos`, API_OPTIONS);
            const json = await data.json();
            // console.log(json.results);

            const trailer = json.results.find(item => item.type === "Trailer") || json.results[0];
            dispatch(addTrailerVideo(trailer));
            
        }
    }

    useEffect(() => {
        getMovieTrailer();
    }, [mainMovie]);
}

export default useMovieTrailer;