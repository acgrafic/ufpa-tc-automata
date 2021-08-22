class Moore {
    constructor(states, initialState) {
        this.states = states;
        this.initialState = initialState;
    }
    run(values, showOutput = true) {
        var ret = [];
        var actualState = this.states[this.initialState];
        var valid = false;
        for (let i = 0; i < values.length; i++) {
            valid = false;
            for (let t = 0; t < actualState.transitions.length; t++) {
                if (actualState.transitions[t][0] == values[i]) {
                    //console.log(actualState, actualState.transitions[t][1]);
                    actualState = this.states[actualState.transitions[t][1]];
                    if (showOutput) console.log(values[i], actualState.value);
                    ret.push({ value: values[i], done: actualState.value });
                    valid = true;
                    break;
                }
            }
            // caso o automato não tenha conseguido identificar o valor
            if (!valid) {
                if (showOutput) console.log(exp, "Value invalid (broken)");
                return false;
                break;
            }
        }
        return ret;
    }
}