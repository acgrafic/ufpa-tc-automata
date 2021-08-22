("use strict");

// montando o menu
const menu = {
    q01a: {
        tittle: "Questão 1 - A",
        instructions: "Implemente AFDs, em uma linguagem de programação à sua escolha, que aceite todas as cadeias em {0,1}* que representam cada 1 seguido imediatamente de dois 0.",
    },
    q01b: {
        tittle: "Questão 1 - B",
        instructions: "Implemente AFDs, em uma linguagem de programação à sua escolha, que aceite todas as cadeias em {a,b}* de modo que o último símbolo seja b e o número de símbolos a seja par.",
    },
    q02a: {
        tittle: "Questão 2 - A",
        instructions: "Implemente um autômato finito que reconheça cadeias pertencentes a linguagem <strong>(ab*c*)*</strong>.<br> Esse autômato não deve conter não-determinismos, transições em vazio, estados inacessíveis e nem estados inúteis",
    },
    q02b: {
        tittle: "Questão 2 - B",
        instructions: "Implemente um autômato finito que reconheça cadeias pertencentes a linguagem <strong>aaa(b|c)*|(b|c)*aaa</strong>.<br> Esse autômato não deve conter não-determinismos, transições em vazio, estados inacessíveis e nem estados inúteis",
    },
    q02c: {
        tittle: "Questão 2 - C",
        instructions: "Implemente um autômato finito que reconheça cadeias pertencentes a linguagem <strong>a*b|ab*</strong>.<br> Esse autômato não deve conter não-determinismos, transições em vazio, estados inacessíveis e nem estados inúteis",
    },
    q02d: {
        tittle: "Questão 2 - D",
        instructions: "Implemente um autômato finito que reconheça cadeias pertencentes a linguagem <strong>a*b*(a|ac*)</strong>.<br>Esse autômato não deve conter não-determinismos, transições em vazio, estados inacessíveis e nem estados inúteis",
    },
    q03: {
        tittle: "Questão 3",
        instructions: "Implemente um autômato finito que reconheça todas as ocorrências da palavra computador no texto T. O programa deve apontar em quais posições ocorreram o casamento exato da palavra.<br> T = “O <strong>computador</strong> é uma máquina capaz de variados tipos de tratamento automático de informações ou processamento de dados. Entende-se por <strong>computador</strong> um sistema físico que realiza algum tipo de computação. Assumiu-se que os computadores pessoais e laptops são ícones da era da informação. O primeiro <strong>computador</strong> eletromecânico foi construído por Konrad Zuse (1910–1995). Atualmente, um microcomputador é também chamado <strong>computador</strong> pessoal ou ainda <strong>computador</strong> doméstico.”",
    },
    q04: {
        tittle: "Questão 04",
        instructions: "Implemente um transdutor finito (máquina de Moore ou Mealy) que, dada uma sequência de moedas de 25 e 50 centavos e de 1 real, forneça uma lata de refrigerante quando a sequência totalizar 1 real ou mais. Cada moeda inserida deverá corresponder a uma de duas saídas: 0, se uma lata não pode ser (ainda) liberada, ou 1, se uma lata deve ser liberada.",
    },
};

function makeMenu() {
    var drop = document.querySelectorAll(".dropdown-menu");
    for (var [key, value] of Object.entries(menu)) {
        drop[0].innerHTML +=
            '<li><a class="dropdown-item action" href="#" action="changeQuestion" question="' +
            key +
            '">' +
            value.tittle +
            "</a></li>";
    }
}

makeMenu();

(function() {
    ("use strict");
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var action = document.querySelectorAll(".action");

    // action to validade fields
    Array.prototype.slice.call(action).forEach(function(action) {
        action.addEventListener(
            "click",
            function(event) {
                var action = event.srcElement.attributes["action"];
                window[action.nodeValue](event);
            },
            false
        );
    });
})();

function changeQuestion(event) {
    var questionSelected = document.getElementById("questionSelected");
    var divInstructions = document.getElementById("instructions");
    var form = document.getElementById("form");

    form.className = "row g-3";

    var questionToSelect = event.srcElement.attributes["question"];
    questionSelected.value = questionToSelect.nodeValue;

    divInstructions.querySelector("h4").innerHTML =
        menu[questionToSelect.nodeValue].tittle;
    divInstructions.querySelector("p").innerHTML =
        menu[questionToSelect.nodeValue].instructions;

    clear();
}

function clear() {
    var questionSelected = document.getElementById("questionSelected");
    var divInstructions = document.getElementById("instructions");

    var questionToValidate = document.getElementById("questionToValidate");
    var result = document.getElementById("result");

    questionToValidate.value = "";
    result.innerHTML = "";

    var form = document.getElementById("form");
}

function runAutomato() {
    var questionSelected = document.getElementById("questionSelected");
    var questionToValidate = document.getElementById("questionToValidate");

    var automato;

    switch (questionSelected.value) {
        case "q01a":
            var automato = new Automato(statesQ01A, 0);
            if (automato.run(questionToValidate.value, false)) {
                result.innerHTML +=
                    '<div class="alert alert-success p-1 m-1" role="alert">' +
                    questionToValidate.value +
                    " (Validado)" +
                    "</div>";
            } else {
                result.innerHTML +=
                    '<div class="alert alert-danger p-1 m-1" role="alert">' +
                    questionToValidate.value +
                    " (Rejeitado)" +
                    "</div>";
            }
            break;
        case "q01b":
            var automato = new Automato(statesQ01B, 0);
            if (automato.run(questionToValidate.value, false)) {
                result.innerHTML +=
                    '<div class="alert alert-success p-1 m-1" role="alert">' +
                    questionToValidate.value +
                    " (Validado)";
            } else {
                result.innerHTML +=
                    '<div class="alert alert-danger p-1 m-1" role="alert">' +
                    questionToValidate.value +
                    " (Rejeitado)" +
                    "</div>";
            }
            break;
        case "q02a":
            var automato = new Automato(statesQ02A, 0);
            if (automato.run(questionToValidate.value, false)) {
                result.innerHTML +=
                    '<div class="alert alert-success p-1 m-1" role="alert">' +
                    questionToValidate.value +
                    " (Validado)" +
                    "</div>";
            } else {
                result.innerHTML +=
                    '<div class="alert alert-danger p-1 m-1" role="alert">' +
                    questionToValidate.value +
                    " (Rejeitado)" +
                    "</div>";
            }
            break;
        case "q02b":
            var automato = new Automato(statesQ02B, 0);
            if (automato.run(questionToValidate.value, false)) {
                result.innerHTML +=
                    '<div class="alert alert-success p-1 m-1" role="alert">' +
                    questionToValidate.value +
                    " (Validado)" +
                    "</div>";
            } else {
                result.innerHTML +=
                    '<div class="alert alert-danger p-1 m-1" role="alert">' +
                    questionToValidate.value +
                    " (Rejeitado)" +
                    "</div>";
            }
            break;
        case "q02c":
            var automato = new Automato(statesQ02C, 0);
            if (automato.run(questionToValidate.value, false)) {
                result.innerHTML +=
                    '<div class="alert alert-success p-1 m-1" role="alert">' +
                    questionToValidate.value +
                    " (Validado)" +
                    "</div>";
            } else {
                result.innerHTML +=
                    '<div class="alert alert-danger p-1 m-1" role="alert">' +
                    questionToValidate.value +
                    " (Rejeitado)" +
                    "</div>";
            }
            break;
        case "q02d":
            var automato = new Automato(statesQ02D, 0);
            if (automato.run(questionToValidate.value, false)) {
                result.innerHTML +=
                    '<div class="alert alert-success p-1 m-1" role="alert">' +
                    questionToValidate.value +
                    " (Validado)" +
                    "</div>";
            } else {
                result.innerHTML +=
                    '<div class="alert alert-danger p-1 m-1" role="alert">' +
                    questionToValidate.value +
                    " (Rejeitado)" +
                    "</div>";
            }

            break;
        case "q03":
            var automato = new Automato(statesQ03, 0);
            var texto =
                "O computador é uma máquina capaz de variados tipos de tratamento automático de informações ou processamento de dados. Entende-se por computador um sistema físico que realiza algum tipo de computação. Assumiu-se que os computadores pessoais e laptops são ícones da era da informação. O primeiro computador eletromecânico foi construído por Konrad Zuse (1910–1995). Atualmente, um microcomputador é também chamado computador pessoal ou ainda computador doméstico";
            //quebrando o texto em varias palavras para validar cada uma
            var textoArray = texto.split(" ");
            //console.log(textoArray);
            //contador das ocorrências
            var contOcorr = 0;
            var actualPosition = 0;
            for (i = 0; i < textoArray.length; i++) {
                if (automato.run(textoArray[i], false)) {
                    contOcorr++;
                    actualPosition = texto.indexOf(textoArray[i], actualPosition);
                    result.innerHTML +=
                        '<div class="alert alert-success p-1 m-1" role="alert">' +
                        "Ocorrência " +
                        contOcorr +
                        ": " +
                        "Palavra " +
                        textoArray[i] +
                        " encontrada na posição " +
                        actualPosition +
                        "</div>";
                    /* é necessário adicionar ao ultimo indice encontrado a quantidade 10,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 que corresponde ao tamanho da palavra computador */
                }
                actualPosition += textoArray[i].length;
            }
            break;
        case "q04":
            var automato = new Moore(statesMoore, 0);
            var values = questionToValidate.value.split(",");
            var ret = automato.run(values, true);
            for (i = 0; i < ret.length; i++) {
                if (ret[i].done == 1) {
                    result.innerHTML +=
                        '<div class="alert alert-success p-1 m-1" role="alert">' +
                        ret[i].value +
                        " --> " +
                        ret[i].done +
                        " (Refrigerante liberado)" +
                        "</div>";
                } else {
                    result.innerHTML +=
                        '<div class="alert alert-danger p-1 m-1" role="alert">' +
                        ret[i].value +
                        " --> " +
                        ret[i].done +
                        " (Refrigerante não liberado)" +
                        "</div>";
                }
            }

            break;
    }
}