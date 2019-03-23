let storage = {

    init() {
        if (!this.get().length)
            localStorage.setItem('Notes', JSON.stringify(arrayNotes));
    },

    get() {
        let Notes = localStorage.getItem('Notes');
        let array = Notes ? JSON.parse(Notes) : [];
        return array;
    },


    write(entity) {
        let array = this.get();

        if (entity instanceof Array) {
            array = entity;
        } else array.push(entity)

        array = JSON.stringify(array);
        localStorage.setItem('Notes', array);

    },
}

export default storage;







let arrayNotes = [
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


