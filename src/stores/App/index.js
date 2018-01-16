import { observable, action } from 'mobx';

class AppStore {
    @observable timer = 0;

    constructor() {
    }
    @action resetTimer = () => {
        this.timer = 0;
    }
    @action addTimer = () => {
        console.log(this.timer)
        this.timer += 1;
    }
}

const appStore = new AppStore();

export default appStore;
export { AppStore };
