import {
    nameValue,
    descriptionValue,
    imageValue,
    name,
    description,
    image
} from './selectors.js';

const setValue = () => {
    if (nameValue.value && descriptionValue.value && imageValue.value) {
        name.innerHTML = nameValue.value;
        description.innerHTML = descriptionValue.value;
        image.src = imageValue.value;
    }
};

export default setValue;
