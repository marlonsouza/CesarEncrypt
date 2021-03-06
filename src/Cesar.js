import State from "./State";

class Cesar {
  decode() {
    const answer = State.readContent();
    const decodedArray = [];

    console.log(`Coded: ${answer.cifrado}`);

    for (const letter of answer.cifrado.toLowerCase().split("")) {
      if (letter.match(/^[A-Za-z]+$/)) {
        const applyDecode = (codeLetter, plus) => {
          const cl =
            codeLetter === "a".charCodeAt() ? "z".charCodeAt() : codeLetter - 1;

          if (plus < answer.numero_casas - 1) 
            return applyDecode(cl, ++plus);
          else
            return cl;
        };

        const charCodeLetter = applyDecode(letter.charCodeAt(), 0);

        const newLetter = String.fromCharCode(charCodeLetter);

        decodedArray.push(newLetter);
      } else {
        decodedArray.push(letter);
      }
    }

    answer.decifrado = decodedArray.join("");

    console.log(`Decoded: ${answer.decifrado}`);

    State.saveContent(answer, 'Cesar');
  }
}

export default new Cesar();
