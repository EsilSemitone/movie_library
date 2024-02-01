import { Component } from "../../common/Component";
import './header.css';
import { KEY } from "../../../dist/key";

export class Header extends Component {
    constructor(globalState) {
        super();
        this.globalState = globalState;
    }

    async search(event) {
        const value = document.getElementById('search').value

        if (!value) {
            return;
        }

        const response = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${value}`)
        const {Response, Error, Search} = await response.json()
        console.log(Response, Error, Search)


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
                    <input id="search" type="text" placeholder="Фильмы, сериалы">
                    <span class="material-symbols-outlined search__icon">
                        search
                    </span>
                    <span class="material-symbols-outlined setting__icon">
                        tune
                    </span>
                </div>
           </div>
        `
        this.el.querySelector('.search__icon').addEventListener('click', this.search.bind(this))
        return this.el;
    }


}