const TOKEN = "f2d274248f928c920b5c8847fcf42ff4f977193d";

import axios from "axios";
import FormData from "form-data";

import State from "./State";

class Postman {
  async getAnswer() {
    const url = `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${TOKEN}`;

    console.log(`Request on: ${url}`);

    try {
      const response = await axios.get(url);

      State.saveContent(response.data, 'Postman');
    } catch (error) {
      console.log("Error: ");
      console.log(error);
    }
  }

  async sendResolution() {
    const url = `https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=${TOKEN}`;

    const answer = State.read();

    const data = FormData();
    data.append("answer", answer, {
      filename: "answer",
      contentType: "application/json",
    });

    console.log(`Send on: ${url}`);

    try {
      const response = await axios.post(url, data, {
        headers: data.getHeaders(),
      });

      console.log("Sucess: ");
      console.log(response.data);
    } catch (error) {
      console.log("Error: ");
      console.log(error);
    }
  }
}

export default new Postman();
