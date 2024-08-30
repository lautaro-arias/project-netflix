import {useEffect, useState,createContext, useContext} from 'react'
import { Movie } from '../services/interface';
import { API_HOST, API_KEY, LANG } from "../services/config";
import {MovieDetails, Video,MainContextProps} from '../services/interface'

const MainContext = createContext<MainContextProps | undefined>(undefined);

export const MainProvider = ({ children }:any) => {
//cards
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState<Movie[]>([]);
    
    const getNewsMoviesApi = async (page: number) => {
        const url = `${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${page}`;
    
        try {
        const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error fetching movie details');
            }
        const { results }: { results: Movie[] } = await response.json();
        
            setMovies((prevMovies) => {
                // Filtrar películas que ya están en el estado
                const uniqueMovies = results.filter(movie => !prevMovies.some(existingMovie => existingMovie.id === movie.id));

                // Limitar a las primeras 10 películas únicas
                const first10UniqueMovies = uniqueMovies.slice(0, 10);
                console.log(first10UniqueMovies)

                return [...prevMovies, ...first10UniqueMovies];
            });

        } catch (error) {
        console.log(error);
        }
    };
    
//muestra otra hoja de peliculas
    const loadMoreMovies = () => {
        setPage((prevPage) => prevPage + 1);
    };
    //

    useEffect(() => {
        getNewsMoviesApi(page);
        }, [page]);
//////    


//content trailer
    const [video, setVideo] = useState<Video[] | any >([]);
    const [movie, setMovie] = useState<MovieDetails[] | any>([]);
    const [trailerId, setTrailerId] = useState<number>();

    const getMovieIdApi = async (id: number) => {  
        const url = `${API_HOST}/movie/${id}?api_key=${API_KEY}&language=${LANG}`;
    
        try {
        const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error fetching movie details');
            }

        const result: MovieDetails = await response.json();

        setMovie(result);
        return (result)

        } catch (error) {
        console.log(error);
        }
    };

    const getVideoMovieApi = async (idMovie: number) => {
        const url = `${API_HOST}/movie/${idMovie}/videos?api_key=${API_KEY}&language=${LANG}`;
    
        try {
        const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error fetching movie details');
            }

        const { results }: { results: Video[] } = await response.json();
            for (let i = 0; i < results.length; i++) {
                const videos = results[i];
                if (videos.site === "YouTube") {

                setVideo(videos);

                break;
                }
                return (videos)
            }
        } catch (error) {
        console.log(error);
        }
    };

    //almacenamos el id de la pelicula seleccionada en setTrailerId
    const handleClickredirectToMovie = async (id: number) => {
        setTrailerId(id)
    //se llama ala api pasandole el id , si resivimos info OK ,la pelicula sellecionada
    //se le pasa ala api de videos y busca el video trailer si lo tiene
        const movieResult = await getMovieIdApi(id);
            if (movieResult && movieResult.id) {
            await getVideoMovieApi(movieResult.id);
            }
    };
    //

/////


    const contextValue:MainContextProps = {
        page,
        movies,
        loadMoreMovies,
        video,
        movie,
        trailerId,
        handleClickredirectToMovie,
    };

    return (
                    <MainContext.Provider value={contextValue}>
                        {children}
                    </MainContext.Provider>
        )
    
}


    export const useMainHandler = () => {
        const context = useContext(MainContext);
        if (!context) {
        throw new Error('useCart must be used within a CartProvider');
        }
        return context;
            
    };
    


