const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
  const notes = loadNotes()
  // const duplicateNotes = notes.filter((note) => note.title === title)
  const duplicateNote = notes.find(note => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })  
    console.log("add success!!")
  } else {
    console.log("its duplicate")
  }

  saveNotes(notes)
}

const removeNotes = (title) => {
  const notes = loadNotes()
  // course's way is better
  const newNotes = notes.filter(note => note.title !== title)
  saveNotes(newNotes)

  return notes.length > newNotes.length

  // my way
  /* 
  const titleIndex = notes.findIndex(note => note.title === title)
  
  if (titleIndex > -1) {
    notes.splice(titleIndex, 1)
    fs.writeFileSync('notes.json', JSON.stringify(notes))
    console.log("remove title: " + title)
  } else {
    console.log("title not found")
  }
  */
}

// JSON.stringify => turn JSON to String
// JSON.parse => turn JSON to Object or Array

const saveNotes = notes => {
  fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = () => fs.existsSync('notes.json') 
                      ? JSON.parse(fs.readFileSync('notes.json').toString())
                      : []

const listNotes = () => {
  const notes = loadNotes()
  notes.forEach(note => {
    console.log(note.title)
  })
}

const readNotes = title => {
  const notes = loadNotes()
  const findingNote = notes.find(note => note.title === title)

  return findingNote ? `Your title: ${chalk.green.inverse(title)}, Body: ${chalk.grey(findingNote.body)}`
                     : `Your title: ${chalk.green.inverse(title)} is ${chalk.red('not found!!')}`
}

module.exports = {
  addNotes,
  removeNotes,
  listNotes,
  readNotes
}