class Automato {
    constructor(states, initialState) {
        this.states = states;
        this.initialState = initialState;
    }
    run(exp, showOutput = true) {
        var characters = Array.from(exp);
        var actualState = this.states[this.initialState];
        var valid;
        for (let i = 0; i < characters.length; i++) {
            valid = false;
            for (let t = 0; t < actualState.transitions.length; t++) {
                valid = false;
                //console.log(characters, valid);
                if (actualState.transitions[t][0] == characters[i]) {
                    actualState = this.states[actualState.transitions[t][1]];
                    valid = true;
                    break;
                }
            }

            // caso o automato não tenha conseguido identificar algum caractere
            if (!valid) {
                if (showOutput) console.log(exp, "Is invalid (broken)");
                return false;
            }
        }
        // se o estado atual é final e a ultima cadeia foi validada ou se o automato aceita a cadeia vazia
        if (actualState.isfinal && valid | (characters.length == 0)) {
            if (showOutput) console.log(exp, "Is valid");
            return true;
        } else {
            if (showOutput) console.log(exp, "Is invalid");
            return false;
        }
    }
}