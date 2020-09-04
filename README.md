# Notes Api Docs

## Dependencies

### **Server**
- [`express`](https://www.npmjs.com/package/express)
- [`body-parser`](https://www.npmjs.com/package/body-parser) 
- [`nodemon`](https://www.npmjs.com/package/nodemon) 

### **db**
- [`notarealdb (mocked db)`](https://www.npmjs.com/package/notarealdb)

### **Other**
- [`moment (format date)`](https://www.npmjs.com/package/moment) 


## Instruction how to run API on Heroku
1. Login or SignUp account on Heroku and create new application
2. In deploy methods select Github(Connect to github)
3. Fork this repository or clone and push.
4. Find yr github and choice **branch(backend if u fork)**
5. Enable Automatic deploy, it's optional, but i recommend turn on
6. Click Deploy branch and wait a few minites
7. Congrat! Now u have own API service for notise! Happy Hack! 

# API Scheme

## Get All Notes
### GET
`https://notesttestapplication.herokuapp.com/notes/`

### Responce
```json
[
    {
        "id": "ryidAMg4v",
        "noteBody": "asdasdStart typeasdasdasd somethasdasding",
        "noteColor": "white",
        "lastEdit": true,
        "date": "September 4th 2020, 8:26:06 pm"
    },
    {
        "id": "BkW3kQeNP",
        "noteBody": "Start type something",
        "lastEdit": false,
        "noteColor": "white",
        "date": "September 4th 2020, 8:12:24 pm"
    }
]
```

## Get Special Note (by id)
### GET
`https://notesttestapplication.herokuapp.com/notes/[id]`

### Responce
```json
[
    {
        "id": "ryidAMg4v",
        "noteBody": "asdasdStart typeasdasdasd somethasdasding",
        "noteColor": "white",
        "lastEdit": true,
        "date": "September 4th 2020, 8:26:06 pm"
    }
]
```

## Create a new Note
### POST
`https://notesttestapplication.herokuapp.com/notes/`

### Body
```json
 {
    "notesBody": "Notes text",
    "noteColor": "color in hex format ex. #98eb34"
}
```
**P.S "noteColor" - is not required, u can skip this property**



### Responce
```json
[
    {
        "id": "ryidAMg4v",
        "noteBody": "asdasdStart typeasdasdasd somethasdasding",
        "noteColor": "white",
        "lastEdit": false,
        "date": "September 4th 2020, 8:26:06 pm"
    }
]
```


## Edit Note
### PUT
`https://notesttestapplication.herokuapp.com/notes/[id]`

### Body
```json
 {
    "notesBody": "New text for note",
    "noteColor": "New color for note" 
}
```
**P.S "noteColor" - is not required, u can skip this property**

### Responce
```json
[
    {
        "id": "ryidAMg4v",
        "noteBody": "asdasdStart typeasdasdasd somethasdasding",
        "noteColor": "white",
        "lastEdit": true,
        "date": "September 4th 2020, 8:26:06 pm"
    }
]
```



## Delete Note
### DELETE
`https://notesttestapplication.herokuapp.com/notes/[id]`


### Responce
```json
{
    "id": "Hy3Nc7gVD",
    "noteBody": "asd",
    "lastEdit": false,
    "noteColor": "asd",
    "date": "September 4th 2020, 8:57:24 pm"
}
```

