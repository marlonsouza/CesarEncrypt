import fs from 'fs';
import path from 'path';

const DataPath = path.resolve(__dirname, '..', 'data');
const AnswerFilePath = path.resolve(DataPath, 'answer.json');

class State{

  saveContent(content, whoCalling){
    this.lastUpdate = new Date();

    const contentString = JSON.stringify(content);

    console.log(`${whoCalling} - Saving answer: ${contentString}`);

    return fs.writeFileSync(AnswerFilePath, contentString);
  }

  readContent(){
    const fileBuffer = fs.readFileSync(AnswerFilePath, 'utf-8');
    const content = JSON.parse(fileBuffer);

    return content;
  }

  read(){
    return fs.createReadStream(AnswerFilePath);
  }

}

export default new State();