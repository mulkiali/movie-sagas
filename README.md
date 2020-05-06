# React-Redux with Sagas

For this weekend challenge I'll be building a movie application.
We'll be able to see movies that exist in our DB. We'll also be able to see detailed view for each individual movie, including genres associated with that movie. We'll also be able to edit our movie's information.

## Video Wireframe

[video ![Home Wireframe](/wireframes/home-wireframe.png)](https://vimeo.com/343530927)

## Database Setup

1. Create a database named `saga_movies_weekend`
2. Run the queries from `database.sql` on the `saga_movies_weekend` database.
3. You will need to create the junction table between the `movies` and `genres` tables!

## Install Dependencies

1. `npm install`
2. `npm run server`
3. `npm run client`

## Notes

### Movies
Added some movie posters in the `public/images` folder, and the database is set up to use them.

### Home / List Page

[x]This should display all of the movies in the movie database. When a movie poster is clicked, a user should be brought to the `/details` view.

### Details Page

This should show all details **including genres**, for the selected movie.

The details page should have the buttons:

[x]- `Back to List` button, which should bring the user to the Home Page
[x]- `Edit` button, which should bring the user to the Edit Page


### Edit Page

This should show:

[x]-an input field (for changing the movie title), for the selected movie.
[x]-a textarea (for changing the movie description)

The details page should have the buttons:

[x]`Cancel` button, which should bring the user to the Details Page
[]`Save` button, which should update the title and description in the database and bring the user to the Details Page


