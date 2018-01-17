import axios from 'axios';
import { observable, action } from 'mobx';

class Home {
    @observable id = 0;
    @observable list = [];

    @action
    async getlist() {
      const response = await axios.get('/api/users');
      console.log(response);
      this.list = response.data;
    }
}

const home = new Home();

export default home;
export { Home };
