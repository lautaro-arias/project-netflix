import { ReactNode } from "react";

export interface MainContextProps {
    page: number;
    movies: Movie[];
    loadMoreMovies: () => void;
    video: Video | any;
    movie: MovieDetails | any;
    trailerId: number | undefined;
    handleClickredirectToMovie: (id: number) => void;
}

export interface MainProviderProps {
    children: ReactNode;
  }
  

// useMainHandler
export interface Movie {
    id: number;
    poster_path: string;
    title: string;
    overview: string;
    runtime: number;
    genres: { id: number; name: string }[];
    release_date: string;

}
export interface MovieDetails {
    id: number;
    overview: string;
    poster_path: string;
    title: string;
    runtime: number;
    genres: { id: number; name: string }[];
    release_date: string;
    movieId: number;

}

export interface Video {
    key: string | number;
    site: string;

}

export interface Props {
    movieId: number;
}
  //