const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return 'Your notes...'
}
const readNote = (title) => {
    const notes = loadNotes();
    const noteS = notes.find((notes) => note.title === title);
    if (noteS === undefined) {
        console.log("not found");
    }
    else {
        console.log(chalk.inverse(notes.title))
        console.log(note.body)
    }



}
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    const duplicateNote = notes.find((note) => note.title === title)

    if (duplicateNote === undefined) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = () => {
    const notes = loadNotes();
    console.log("here is your notes")
    notes.forEach(element => {
        console.log(element.title)
    });
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notestoKeep = notes.filter((notes) => notes.title != title)

    if (notes.length === notestoKeep.length) {
        console.log(chalk.red.inverse('no item deleted'))
    }
    else {
        console.log(chalk.green.inverse('deleted item'))
    }
    saveNotes(notestoKeep)

}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}