var statesQ01A = [{
        label: "Q0",
        isfinal: true,
        transitions: [
            [0, 0],
            [1, 1],
        ],
    },
    {
        label: "Q1",
        isfinal: false,
        transitions: [
            [0, 2]
        ],
    },
    {
        label: "Q2",
        isfinal: false,
        transitions: [
            [0, 0]
        ],
    },
];

var statesQ01B = [{
        label: "Q0",
        isfinal: true,
        transitions: [
            ["b", 0],
            ["a", 1],
        ],
    },
    {
        label: "Q1",
        isfinal: false,
        transitions: [
            ["b", 1],
            ["a", 2],
        ],
    },
    {
        label: "Q2",
        isfinal: false,
        transitions: [
            ["b", 0],
            ["a", 1],
        ],
    },
];