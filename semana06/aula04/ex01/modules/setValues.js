import {
    nameValue,
    descriptionValue,
    imageValue,
    name,
    description,
    image
} from './selectors.js';

const setValues = () => {
    name.innerHTML = nameValue.value;
    description.innerHTML = descriptionValue.value;
    image.src = imageValue.value;
}

export default setValues;
