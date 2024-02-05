import { Component } from "../../common/Component";
import './card.css'

export class Card extends Component {
    constructor(globalState, cardState) {
        super();
        this.globalState = globalState;
        this.cardState = cardState;
    }

    render() {
        this.el.classList.add('card');
        this.el.innerHTML = `
            <div class="card__img">
                <img src="${this.cardState.Poster}">
            </div>
            <div class="card__title">${this.cardState.Title}</div>
            <div class="card__year">${this.cardState.Year}</div>
        `
        return this.el;
    }
}