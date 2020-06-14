import crypto from "crypto";

import State from "./State";

class Cryptor {
  encrypt() {
    const answer = State.readContent();

    const hash = crypto.createHash("sha1");

    const encrypted = hash.update(answer.decifrado, "utf8");

    answer.resumo_criptografico = encrypted.digest("hex");

    console.log("Encrypted: ");
    console.log(answer.resumo_criptografico);

    State.saveContent(answer, 'Cryptor');
  }
}

export default new Cryptor();
