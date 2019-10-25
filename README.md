# BE

made many different endpoints for this project

base url for heroku :  

Purpose: registration  
|request type: post  
|endpoint: /api/auth/register 
|required fields: familyNameID, username,name,password,role(parent or child - defaults to child if empty) 
|notes: username is unique so cant use same first name so to speak.. needs a unique name made for each user. - parents could use email as an example. child can makeup a name for themselves.

Purpose: login
|request type: post
|endpoint: /api/auth/login
|required fields: username and password
|notes: returns a number of items.. returns token, username(is unique cant repeat like usernames), name(not unique- you know in case a family has more than one george), users id, weclome message, familyNameID. store what's needed into local storage from frontend login page

Purpose: gets all users
|request type: get
|endpoint: 
|required fields:
|notes:

Purpose:
|request type:
|endpoint:
|required fields:
|notes:

Purpose:
|request type:
|endpoint:
|required fields:
|notes:

Purpose:
|request type:
|endpoint:
|required fields:
|notes:

Purpose:
|request type:
|endpoint:
|required fields:
|notes:

Purpose:
|request type:
|endpoint:
|required fields:
|notes:

Purpose:
|request type:
|endpoint:
|required fields:
|notes:

Purpose:
|request type:
|endpoint:
|required fields:
|notes:

Purpose:
|request type:
|endpoint:
|required fields:
|notes:

Purpose:
|request type:
|endpoint:
|required fields:
|notes:

Purpose:
|request type:
|endpoint:
|required fields:
|notes:

Purpose:
|request type:
|endpoint:
|required fields:
|notes:

Purpose:
|request type:
|endpoint:
|required fields:
|notes:

Purpose:
|request type:
|endpoint:
|required fields:
|notes:

Purpose:
|request type:
|endpoint:
|required fields:
|notes:

Purpose:
|request type:
|endpoint:
|required fields:
|notes:
