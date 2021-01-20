To verify node modules existance,Run 
```
npm install
```

**then, to run the server**

```
npm start
```

page path : http://localhost:3000/getRestaurants

data structure : 
  -api
   -models
    restaurants.js{
      this file contains mongoose document schema, it's needed to get data from the database
    }
   -routes
    restaurants.js{
      this file contains the GET REQUEST
    }
  -app.js{
   equals to MainActivity
  }
  -server.js{
   this is the GLOBAL server script that keeps the server running 
  }
