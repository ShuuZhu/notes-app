# Notes App Highlights

## Yargs

To handle params in terminal.

### Example

Use in terminal according to function setting down below.

```
 node app.js <command> --<builders>=<value>
```
JS

```javascript
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
```

## Chalk

To  edit console color and font.

### How to use

```javascript
 console.log(isRemoved ? chalk.green.inverse('Notes removed') : chalk.red.inverse("Notes not found"))
```

## JSON

### stringify

To turn JSON to String.

```
JSON.stringify(notes) // notes will be Obj or Arr
```

### parse
To turn JSON to Object or Array.

```
JSON.parse(fs.readFileSync('notes.json').toString())
```