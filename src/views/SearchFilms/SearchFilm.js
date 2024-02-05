import onChange from "on-change";
import { View } from "../../common/View.js";
import { Header } from "../../components/header/header.js";
import { CardList } from "../../components/cardList/cardList.js";

export class SearchFilm extends View {
    constructor(globalState) {
        super();
        this.globalState = globalState;
        this.globalState = onChange(this.globalState, this.globalStateHook.bind(this))
    }

    globalStateHook(path, value) {
        if (path == 'searchQueryResult' || path == 'loading') {
            this.render()
        }
    }

    render() {
        this.app.innerHTML = '';
        this.setTitle('Поиск фильмов')
        const main = document.createElement('div');
        main.append(new Header(this.globalState).render())
        main.append(new CardList(this.globalState).render())
        this.app.append(main)
    }
}