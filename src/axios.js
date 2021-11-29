import axios from "axios";
// base url to make requests to the movie database
// ******* u can only one export default but u can have many export const
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",

});
// instance.get('/foo-bar') take endpoint and append it to baseURL;
// https://api.themoviedb.org/3/foo-bar
export default instance;