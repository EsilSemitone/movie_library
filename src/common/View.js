export class View {
    constructor(globalState) {
        this.globalState = globalState;
        this.app = document.getElementById('root');
    }

    setTitle(title) { 
        document.title = title;
    }

    render() {
        return;   
    }

    destroy() {
        return;
    }
}