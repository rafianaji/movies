import AxiosMovieDB from "../AxiosMovieDB";

export const getNowPlaying = async (page) => {
  try {
    const result = await AxiosMovieDB({
      method: "GET",
      url: `/movie/now_playing?page=${page}`,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

export const getSimiliarMovie = async (id, page) => {
  try {
    const result = await AxiosMovieDB({
      method: "GET",
      url: `/movie/${id}/similar?page=${page}`,
    });
    return result;
  } catch (error) {
    throw error;
  }
};
