# GOT-project
this should be continued... work from SIIT

# app features:

the app has 2 routes:
-list view(/characters) => show the list of persons
-detail view(/characters/${id}) => user can edit the person from this route

usage of CRUD operations:
- Create -> Add button - show a popup and insert details into each field, if URL is set correctly as it comes from json the image will be displayed too at card creation
- Read   -> show list of 30 people from GOT (used a free api from GOT series)
- Update -> Edit cards (the image cannot be updated yet, but you can add another card with same inputs and that specific image that must have been updated)
- Delete -> Delete an individual card 

*in order for the things to actually work you need to run npm i from both backend and frontend and then start by:
json-server --watch db.json
and 'npm run start'
have fun!
