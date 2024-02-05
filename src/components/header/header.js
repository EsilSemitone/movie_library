import { Component } from "../../common/Component";
import './header.css';
import { KEY } from "../../../dist/key";

export class Header extends Component {
    constructor(globalState) {
        super();
        this.globalState = globalState;
    }

    async search(event) {
        console.log(event)
        const value = document.getElementById('search').value

        if (!value) {
            return;
        }
        this.globalState.loading = true;

        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${value}`);
            this.globalState.loading = false;
            const res = await response.json()
            if (!res) {
                return;
            }
    
            if (res.Response == 'False') {
                console.log(res.Error);
                return;
            }
            this.globalState.searchQueryResult = res.Search;
        }
        catch {
            throw new Error('ошибка при попытке сделать запрос на сервер')
        }
        
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
        this.el.querySelector('#search').addEventListener('keydown',  (event) =>  {
            if (event.key === "Enter") {
                this.search.bind(this)()
            }})
        return this.el;
    }


}