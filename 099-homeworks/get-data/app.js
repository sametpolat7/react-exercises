import axios from "axios";

async function getData(userId) {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users/' + userId);
    const { data: posts}  = await axios('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
    return console.log(data, posts);
}

export default getData;