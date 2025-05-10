<!-- how to use mock api

1. npm i -g json-server (run this command)

2. inside src folder create api folder, inside that create db.json file (data should be in the form of object, in json format)
 {
 "activejobs":[
{}
],
}

3. npx json-server --watch src/api/db.json (run this command)

4. create Jobs.jsx file in src, in that (this below code there in website)
const [jobs,setJobs]=useState([])
const fetchjobs=async()=>{
try{
let data=await fetch("write url of first end point",{})
data.then((res)=>res.json()).then((tasks)=>setJobs(tasks))
}catch(err){
constole.log(err.name
}
}

isEffect(()=>{
fetchjobs()
return()=>{}
},[])


jobs?.activejobs.map(()=>{}))} to access the data from db.json -->

# How to Use Mock API (json-server)

- **Step 1:** Install `json-server` globally.

  ```bash
  npm i -g json-server
  ```

- **Step 2:** Inside the `src` folder, create a folder called `api`, inside that create file called `db.json`.

  - Data should be in the form of an object, following JSON format.

  Example:

  ```json
  {
    "activejobs": [
      {}
    ]
  }
  ```

- **Step 3:** Run the server.

  ```bash
  npx json-server --watch src/api/db.json 
  ```

  - After above step, in Terminal it would look like this, you would use Endpoints url in the next step
    ```bash
    Index:
    http://localhost:3000/

    Static files:
    Serving ./public directory if it exists

    Endpoints:
    http://localhost:3000/activejobs
    ```

- **Step 4:** Create a `Jobs.jsx` file inside `src/` folder.

  - In that file, use the following setup, this code available in official website:

  ```javascript
  import React, { useState, useEffect } from 'react';

  const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    const fetchjobs = async () => {
      try {
        let data = await fetch("http://localhost:3004/activejobs");
        data.then((res) => res.json()).then((tasks) => setJobs(tasks));
      } catch (err) {
        console.log(err.name);
      }
    };

    useEffect(() => {
      fetchjobs();
      return () => {};
    }, []);

    return (
      <div>
        {jobs?.map((job, index) => (
          <div key={index}>
            {/* Render job details */}
          </div>
        ))}
      </div>
    );
  };

  export default Jobs;
  ```

- **Step 5:** Access the data.

  - You can map through the `jobs` array and access the fields.

  Example:

  ```javascript
  jobs?.map((job) => {
    // Access job.Role, job.Name, job.Location, etc.
  })
  ```

---

## Notes:
- Make sure your fetch URL matches exactly like: `http://localhost:3004/activejobs`
- If you make any changes to `db.json`, you may need to restart the server.
- Check console for any errors if API call fails.

---

## How to Run Server: 
- In Terminal, while keeping the current terminal, open new terminal, click on the + icon in the bottom terminal, and then mention npm run dev


# Below is the Example on how to take input from user and update the db.json file
```jsx
import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    title: '',
    views: ''
  });
// This formData state stores the two input fields: title and views.
// Initially, both fields are empty strings.


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, // this is spread operator
      [name]: value
    }));
  };
// handleChange dynamically updates formData based on which input changed.
// name comes from the input field (name="title" or name="views"), so it updates that key in formData.


  const handlePostJob = async () => {
    const job = {
      title: formData.title, // the values are coming from useStates
      views: Number(formData.views)
    };
// Here, you prepare the job object to be posted. The views field is converted to a Number to avoid string storage.
// You're just creating a temporary JavaScript variable named job to hold the data you want to send.


    const response = await fetch('http://localhost:3000/jobs', { // This sends a POST request to the local json-server (running on port 3000) at the /jobs endpoint.
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job) // Convert the job JavaScript object into a JSON string, and send it as the body 
    });
// Here /jobs is not related to job variable you took while creating new object in line 162, it refers to the route (or endpoint) where data is stored in your backend, which in this case is a json-server.


    const data = await response.json();
    console.log('Job posted:', data);  // just for checking

    // Reset form
    setFormData({ title: '', views: '' });
  };
  return (
    <div>
      <h1>Post a Job</h1>
      <input
        type="text"
        name="title"
        placeholder="Job title"
        value={formData.title}
        onChange={handleChange}
        // onChange={(e)=>setFormData({...formData,name:e.target.value})}
      />
      <input
        type="number"
        name="views"
        placeholder="Views"
        value={formData.views}
        onChange={handleChange}
      />
      <button onClick={handlePostJob}>Submit</button>
    </div>
  );
};
export default App; 
```

# Below is how the db.json data would look
```json
{
  "jobs": [
    {
      "title": "Frontend Developer",
      "views": 500,
      "id": 1
    },
    {
      "title": "Backend Developer",
      "views": 320,
      "id": 2
    }
  ]
}

// Note : Each job automatically gets a unique id assigned by json-server.
```

## To Implement Delete Functionality
```js
fetch(`http://localhost:3000/jobs/${id}`, {
  method: 'DELETE'
});
```
```json
// Before
{
  "jobs": [
    { "id": 1, "title": "Frontend Developer", "views": 10 },
    { "id": 2, "title": "Backend Developer", "views": 8 }
  ]
}

// After deleting job with id: 1:
{
  "jobs": [
    { "id": 2, "title": "Backend Developer", "views": 8 }
  ]
}
```