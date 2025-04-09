import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);

import koalaPicture from './koala-picture-free.jpg'
const image = document.createElement('img')
image.src = koalaPicture

document.body.appendChild(image);