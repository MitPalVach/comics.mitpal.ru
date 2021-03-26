import {getDataApi} from "../../utils/getDataApi";
import {IMG_STANDARD_XLARGE} from "../../constants/api";
import {ROOT_MODAL} from "../../constants/root";
import Notification from "../Notification/Notification";

import './Characters.css';


class Characters {
    renderContent(data) {
        let htmlContent = '';

        data.forEach(({name, thumbnail: {path, extension}}) => {
            const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;
            htmlContent += `
                <li class="characters__item">
                    <img class="characters__img" src="${imgSrc}" alt="">
                    <span class="characters__name">${name}</span>
                </li>   
            `;
        });

        const htmlWrapper = `
            <div class="wrapper">
                <ul class="characters__container">
                    ${htmlContent}    
                </ul>
                <button class="characters__close" onclick="modal.innerHTML = ''">&times;</button>
            </div>
        `;


        ROOT_MODAL.innerHTML = htmlWrapper;
    }

    async render(uri) {
        const data = await getDataApi.getData(uri);


        data.length ? this.renderContent(data) : Notification.render();
    }
}

export default new Characters();




















