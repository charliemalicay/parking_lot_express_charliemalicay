# Parking Lot ExpressJS API

## Project Initialization
```bash
npm i
```


## Running Project
```bash
npm start
```


## API Information
### POST show park slot
body request
```json
{
	"entryPoints": "entryEast",
	"carSize": "smallCar"
}
```

json response
```json
[
  {
    "meSpE": {
      "available": true,
      "distance": {
        "entryEast": 1
      }
    }
  },
  {
    "smSpE": {
      "available": true,
      "distance": {
        "entryEast": 2
      }
    }
  },
  {
    "meSpD": {
      "available": true,
      "distance": {
        "entryEast": 2
      }
    }
  },
  {
    "laSpE": {
      "available": true,
      "distance": {
        "entryEast": 2
      }
    }
  },
  {
    "smSpD": {
      "available": true,
      "distance": {
        "entryEast": 3
      }
    }
  },
  {
    "meSpC": {
      "available": true,
      "distance": {
        "entryEast": 3
      }
    }
  },
  {
    "laSpD": {
      "available": true,
      "distance": {
        "entryEast": 3
      }
    }
  },
  {
    "smSpC": {
      "available": true,
      "distance": {
        "entryEast": 4
      }
    }
  },
  {
    "meSpB": {
      "available": true,
      "distance": {
        "entryEast": 4
      }
    }
  },
  {
    "laSpC": {
      "available": true,
      "distance": {
        "entryEast": 4
      }
    }
  },
  {
    "smSpB": {
      "available": true,
      "distance": {
        "entryEast": 5
      }
    }
  },
  {
    "meSpA": {
      "available": true,
      "distance": {
        "entryEast": 5
      }
    }
  },
  {
    "laSpB": {
      "available": true,
      "distance": {
        "entryEast": 5
      }
    }
  },
  {
    "smSpA": {
      "available": true,
      "distance": {
        "entryEast": 6
      }
    }
  },
  {
    "laSpA": {
      "available": true,
      "distance": {
        "entryEast": 6
      }
    }
  }
]
```

### POST select park slot
body request
```json
{
  "slotName": "meSpE"
}
```

json response
```json
{
  "message": "Parked Slot in meSpE "
}
```

### POST unselect park slot
body request
```json
{
  "slotName": "meSpE"
}
```

json response
```json
{
  "message": "Your total Parking Fee is 40 Php"
}
```