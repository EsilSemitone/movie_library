import { SearchFilm } from "./views/SearchFilms/SearchFilm";

class App {

    globalState = {
        favorites: [],
        loading: false,
        searchQueryResult: []
    }

    routes = [
        {path: '', view: SearchFilm}
    ]

    constructor() {
        this.route();
        window.addEventListener('hashchange', this.route.bind(this))
    }

    route() {
        if (this.currentView) {
            this.currentView.destroy()
        }

        const view = this.routes.find(obj => obj.path === location.hash).view;
        this.currentView = new view(this.globalState);
        this.currentView.render()
    }
}

const app = new App()