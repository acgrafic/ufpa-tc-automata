var statesMoore = [{
        label: "0",
        value: null,
        transitions: [
            [25, 1],
            [50, 2],
            [100, 7],
        ],
    },
    {
        label: "25",
        value: 0,
        transitions: [
            [25, 2],
            [50, 3],
            [100, 4],
        ],
    },
    {
        label: "50",
        value: 0,
        transitions: [
            [25, 3],
            [50, 7],
            [100, 5],
        ],
    },
    {
        label: "75",
        value: 0,
        transitions: [
            [25, 7],
            [50, 4],
            [100, 6],
        ],
    },
    {
        label: "125",
        value: 1,
        transitions: [
            [25, 2],
            [50, 3],
            [100, 4],
        ],
    },
    {
        label: "150",
        value: 1,
        transitions: [
            [25, 6],
            [50, 7],
            [100, 5],
        ],
    },
    {
        label: "175",
        value: 1,
        transitions: [
            [25, 7],
            [50, 4],
            [100, 6],
        ],
    },
    {
        label: "100",
        value: 1,
        transitions: [
            [25, 1],
            [50, 2],
            [100, 7],
        ],
    },
];