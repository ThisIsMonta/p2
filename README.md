Run npm install to verify node modules existance

**then, RUN npm start to run the server**

page path : http://localhost:3000/getRestaurants

data structure : 
  -api
    -models
      restaurants.js{
        this file contains mongoose document schema, it's needed to get data from the database
      },
     -routes
      restaurants.js{
        this file contains the GET REQUEST
      },
  -app.js{
    equals to MainActivity
  }
  -server.js{
    this is the GLOBAL server script that keeps the server running 
  }
