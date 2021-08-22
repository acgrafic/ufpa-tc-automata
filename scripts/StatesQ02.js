var statesQ02A = [{
        label: "Q0",
        isfinal: true,
        transitions: [
            ["a", 1]
        ],
    },
    {
        label: "Q1",
        isfinal: true,
        transitions: [
            ["b", 1],
            ["a", 1],
            ["c", 2],
        ],
    },
    {
        label: "Q2",
        isfinal: true,
        transitions: [
            ["a", 1],
            ["c", 2],
        ],
    },
];

var statesQ02B = [{
        label: "Q0",
        isfinal: false,
        transitions: [
            ["a", 1],
            ["b", 4],
            ["c", 4],
        ],
    },
    {
        label: "Q1",
        isfinal: false,
        transitions: [
            ["a", 2]
        ],
    },
    {
        label: "Q2",
        isfinal: false,
        transitions: [
            ["a", 3]
        ],
    },
    {
        label: "Q3",
        isfinal: true,
        transitions: [
            ["b", 3],
            ["c", 3],
        ],
    },
    {
        label: "Q4",
        isfinal: false,
        transitions: [
            ["b", 4],
            ["c", 4],
            ["a", 5],
        ],
    },
    {
        label: "Q5",
        isfinal: false,
        transitions: [
            ["a", 6]
        ],
    },
    {
        label: "Q6",
        isfinal: false,
        transitions: [
            ["a", 7]
        ],
    },
    {
        label: "Q7",
        isfinal: true,
        transitions: [],
    },
];

var statesQ02C = [{
        label: "Q0",
        isfinal: false,
        transitions: [
            ["a", 1],
            ["b", 2],
        ],
    },
    {
        label: "Q1",
        isfinal: true,
        transitions: [
            ["a", 3],
            ["b", 5],
        ],
    },
    {
        label: "Q2",
        isfinal: true,
        transitions: [],
    },
    {
        label: "Q3",
        isfinal: false,
        transitions: [
            ["a", 3],
            ["b", 4],
        ],
    },
    {
        label: "Q4",
        isfinal: true,
        transitions: [],
    },
    {
        label: "Q5",
        isfinal: true,
        transitions: [
            ["b", 5]
        ],
    },
];
var statesQ02D = [{
        label: "Q0",
        isfinal: false,
        transitions: [
            ["a", 3],
            ["b", 1],
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
        isfinal: true,
        transitions: [
            ["c", 2]
        ],
    },
    {
        label: "Q3",
        isfinal: true,
        transitions: [
            ["a", 3],
            ["b", 1],
            ["c", 2],
        ],
    },
];