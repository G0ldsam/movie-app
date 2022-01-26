import axios from "axios";

const apiKey = "6de482bc8c5768aa3648618b9c3cc98a";

export const makeSearch = (keyword,page=1)=>(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&page=${page}`)

export const requestSearch = async (keyword,page=1)=> {
    const response = await axios.get(makeSearch(keyword,page));
    const results =response.data.results;
    return results;
}

export const makeImageUrl = (path) => {
    return path ? `https://image.tmdb.org/t/p/${path}` : null;
}

// https://image.tmdb.org/t/p/w500/vbk5CfaAHOjQPSAcYm6AoRRz2Af.jpg