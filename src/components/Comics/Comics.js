import {API_URL, IMG_NOT_AVAILABLE, IMG_STANDARD_XLARGE, URL_CHARACTERS, URL_COMICS} from "../../constants/api";
import {getDataApi} from "../../utils/getDataApi";
import {ROOT_INDEX} from "../../constants/root"

import Error from "../Error/Error";
import Characters from "../Characters/Characters";

import './Comics.css';


class Comics {
    renderComics(data) {
        let htmlContent = '';

        data.forEach(({id, title, thumbnail: {extension, path}}) => {

            if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
                const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;
                const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;

                htmlContent += `
                    <li class="comics__item" data-uri="${uri}">
                        <span class="comics__name">${title}</span>
                        <img class="comics__img" src="${imgSrc}" alt="">
                    </li>
                `;
            }
        });

        ROOT_INDEX.innerHTML = `
            <ul class="comics__container">
                ${htmlContent}
            </ul>
        `;


    }

    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);

        // >>>>>
        // if (data) {
        //     this.renderComics(data);
        // } else {
        //     Error.render();
        // }
        // === тоже самое что и сверху но с тернарным оператором
        data ? this.renderComics(data) : Error.render();
        // <<<<<

        this.renderComics(data);
    }

    eventListener() {
        document.querySelectorAll('.comics__item').forEach(element => {
            const uri = element.getAttribute('data-uri');

            element.addEventListener('click', () => {
                Characters.render(uri);
            });
        });
    }
}

export default new Comics();








