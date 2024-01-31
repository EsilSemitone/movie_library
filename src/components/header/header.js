import { Component } from "../../common/Component";
import './header.css';


export class Header extends Component {
    constructor(globalState) {
        super();
        this.globalState = globalState;
    }

    render() {
        this.el.innerHTML = '';
        this.el.classList.add('header');
        this.el.innerHTML = `
           <div class="inner__header">
                <div class="header__logo">
                    <img class="logo" src="/src/components/header/assets/icon.png">
                    <p class="title__logo">ФИЛЬМОПОИСК</p>
                </div>
                <div class="header__search">
                    <div class="header__search_inner">
                        <input type="text" placeholder="Фильмы, сериалы">
                    </div>
                </div>
           </div>
        `
        return this.el;
    }


}