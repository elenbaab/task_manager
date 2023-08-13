This web application allows users to create tasks, read their tasks, and delete tasks once completed.
It contains a home page, an about page, and a create-new-task page.

The back-end is built using NodeJS and Express (JS-based langauges).
The application uses MongoDB and Mongoose (ODM - Object Data Modeling, good for object modeling with NodeJS), a MongoDB Library.
The front-end is built with HTML and CSS.

The MVC (Models, Views, Controller) approach is used for structuring and readability purposes.
    - Model: Defines the data structure. Done in JS. (e.g. updates application to reflect a new task.)
    - Views: Defines the display (UI). Done in HTML/CSS, and ejs as the template engine (injecting non-static data into HTML, done in JS). (e.g. user clicks 'delete.')
    - Controller: Contains control logic, used in conjuntion with routes/router. (e.g. recieves update from view then notifies model to 'add task')

Additional Features:
    - Users can search for a specific task by ID ('/ID')
    - Users can delete tasks - delete button in top right
    - Tasks are orders on home page based on creation time, most recent to oldest.
    - The driver file (app.js) contains a heap of comments for future reference to understand the functionality of the libraries used, and the command options.

test
