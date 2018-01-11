import { observable, action } from 'mobx';

class Home {
    @observable id = 0;

    constructor() {

    }

    @action resetTimer = () => {
        this.id = 0;
    }
    @action addTimer = () => {
        this.id += 1;
    }
    @action cutTimer = () => {
        this.id -= 1;
    }
}

const home = new Home();

export default home;
export { Home };
