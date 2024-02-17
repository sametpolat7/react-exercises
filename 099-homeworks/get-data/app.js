import axios from "axios";

async function getData() {
    const response = await axios('https://jsonplaceholder.typicode.com/users/1');
    console.log(response);
}
getData();