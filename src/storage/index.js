let storage = {


    init() {
        if (!this.get().allNotes.length)
            localStorage.setItem('state', JSON.stringify(InitialState));
    },

    get() {
        let state = localStorage.getItem('state');
        return state ? JSON.parse(state)
            : InitialState;
    },


    write(entity) {
        let state = this.get();

        if (entity instanceof Array) {
            state.allNotes = entity;
        } else state.allNotes.push(entity)

        localStorage.setItem('state', JSON.stringify(state));

    },
}

export default storage;



let InitialState = {
    allNotes: [
        {
            "id": 1,
            "title": "note1",
            "note": "textnote"
        },
        {
            "id": 2,
            "title": "note2",
            "note": "textnote"
        },
        {
            "id": 3,
            "title": "note3",
            "note": "textnote"
        },
        {
            "id": 4,
            "title": "note4",
            "note": "textnote"
        },
        {
            "id": 5,
            "title": "note5",
            "note": "textnote"
        },
        {
            "id": 6,
            "title": "note6",
            "note": "textnote"
        },
        {
            "id": 7,
            "title": "note7",
            "note": "textnote"
        },
        {
            "id": 8,
            "title": "note8",
            "note": "textnote"
        },
        {
            "id": 9,
            "title": "note9",
            "note": "textnote"
        },
        {
            "id": 10,
            "title": "note10",
            "note": "textnote"
        },
        {
            "id": 11,
            "title": "note11",
            "note": "textnote"
        },
        {
            "id": 12,
            "title": "note12",
            "note": "textnote"
        },
        {
            "id": 13,
            "title": "note13",
            "note": "textnote"
        },
        {
            "id": 14,
            "title": "note14",
            "note": "textnote"
        },
        {
            "id": 15,
            "title": "note15",
            "note": "textnote"
        }
    ]
}






