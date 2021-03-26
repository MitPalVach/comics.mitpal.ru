import {ROOT_MODAL} from "../../constants/root";

import './Notification.css';


class Notification {
    render() {
        const htmlWrapper = `
            <div class="notification__container">
                <span>Нет контента</span>
                <button class="notification__close" onclick="modal.innerHTML = ''">&times;</button>
            </div>
        `;

        ROOT_MODAL.innerHTML = htmlWrapper;
    }
}

export default new Notification();

