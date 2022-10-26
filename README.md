# LyricsSearch
a simple proof of concept, work in progress FastAPI application with a React frontend based on an idea by one of my friends.

### Current features
* Allows the user to search the MusixMatch API for a list of songs that contain the certain word(s) in their lyrics

### TODO
* Allow the user to add a Spotify playlist featuring those songs into their account

### Instructions to run
* Clone the repository
* Install the dependencies
```
$ pip install -r requirements.txt
```

#### If the virtual environment doesn't exist 
```
$ pip install virtualenv
$ virtualenv venv
```

#### Windows
```
$ .\venv\Scripts\activate.bat
```

#### Linux/MacOS/other Unix-like OS
```
$ source env/bin/activate
```

* Populate the .env file
```
# the API key you've acquired from MusixMatch
MUSIXMATCH_APIKEY= 
```

#### To run the backend
```
$ hypercorn main:app
```

#### Run the frontend 
```
$ cd lyricsearch
$ npm start
```
