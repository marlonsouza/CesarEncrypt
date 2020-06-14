import 'dotenv/config';
import Cesar from './src/Cesar';
import Postman from './src/Postman';
import Cryptor from './src/Cryptor';

class App{
  constructor(){
    this.challenge();
  }

  challenge(){
    Postman.getAnswer();
    Cesar.decode();
    Cryptor.encrypt();
    Postman.sendResolution();
  }
}

export default new App();