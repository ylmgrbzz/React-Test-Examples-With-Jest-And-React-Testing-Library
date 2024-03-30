import axios from "axios";

export const getPosts = async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.data;
    });
};

const getPost = async (id) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
      return response.data;
    });
};

const postService = {
  getPosts,
  getPost,
};

export default postService;
