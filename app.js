const chalk = require('chalk') // edit console color and font
const yargs = require('yargs') // handle params in terminal
const notes = require('./notes')

// Setting Yargs version

yargs.version('1.0.0')

// node app.js <command> --<builders>=<value>

// Create add command

yargs.command({
    command: 'add',
    describe: 'add some notes',
    builder: {
      title: {
        describe: "some title",
        demandOption: true,
        type: 'string'
      },
      body: {
        describe: "some body value",
        demandOption: true,
        type: 'string'
        
      }
    },
    handler({title, body}) {
      notes.addNotes(title, body)
    } 
})

// Create remove command

yargs.command({
  command: 'remove',
  describe: 'remove some notes',
  builder: {
    title: {
      describe: "title",
      demandOption: true,
      type: 'string'
    }
  },
  handler({title}) {
    const isRemoved = notes.removeNotes(title)
    console.log(isRemoved ? chalk.green.inverse('Notes removed') : chalk.red.inverse("Notes not found"))
  } 
})

// Create list command

yargs.command({
  command: 'list',
  describe: 'list all notes',
  handler() {
    notes.listNotes()
  } 
})

// Create read command

yargs.command({
  command: 'read',
  describe: 'read some notes',
  builder: {
    title: {
      describe: 'read title',
      demandOption: true,
      type: "string"
    }
  },
  handler({title}) {
    console.log(notes.readNotes(title))
  } 
})

yargs.parse()