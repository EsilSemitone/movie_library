import { Component } from "../../common/Component";
import { Card } from "../card/card";
import './cardList.css';

export class CardList extends Component {
    constructor(globalState) {
        super();
        this.globalState = globalState;
    }

    render() {
        console.log(this.globalState.loading)
        this.el.innerHTML = '';
        this.el.classList.add('card__list');
        this.el.innerHTML = `
            ${this.globalState.loading
                ? '<div class="loading">Идет загрузка</div>' 
                : ''
            }
            <div class="card_container__innner"></div>
        `
            
        const container = this.el.querySelector('.card_container__innner');
        this.globalState.searchQueryResult.forEach(el => {
            container.append(new Card(this.globalState, el).render())
        });

        return this.el;
    }
}
