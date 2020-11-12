# RAWShot (aka 499px)

A full-stack app, with multiple relationships and CRUD functionality, cloning key parts of the photo-sharing website 500px

Built solo, this is my fourth and final project during the Software Engineering Immersive at General Assembly.

## Goal

Build a full-stack React app using Python, Django and PostgreSQL.

### Timescale

* 8 days

### Technologies used

* Python
* Django
* PostgreSQL
* React
* rest_framework
* Axios
* SASS
* Semantic UI React
* HTTP-proxy-middleware
* JSON Web Tokens
* PyJWT
* Git, and GitHub

### Installation

* Clone or download the repo
* Install Python packages: `pipenv`
* Load seeds data from the multiple seeds files, using `python manage.py loaddata foldername/seeds.json` and replacing `foldername` with:
  * `photo_categories`
  * `jwt_auth`
  * `photos`
  * `comments`
* Move to the frontend: `cd frontend`
* In frontend, install dependencies: `npm i`
* Back in the project root (main directory), `pipenv shell` to activate the project's virtualenv
* Start the app with `python manage.py runserver`
* Navigate in your browser to `localhost:8000/`. You should see the frontend being served to the browser.

## The App: 499px

### Live version

https://rawshot-499px.herokuapp.com/photoshome

499px (aka RAWShot) attempts to clone key features and styles of the photo-sharing website 500px (https://500px.com/). In particular with 499px users can post, comment on and like photos, as well as follow photographers.

### Wireframe and Entity Relationship Diagram

To define the key features to clone from 500px, I developed the following wireframe and entity relationship diagram (ERD) - note that join table (and the many-to-many relationship) for followers is also shown in the ERD for clarity.

#### ***Wireframe***:
![Wireframe Screenshot](./Readme_Screenshots/Wireframe_Readme_Screenshot.png)

#### ***ERD***:
![ERD Screenshot](./Readme_Screenshots/ERD_Readme_Screenshot.png)

As implied by the ERD, there are several models on the backend:
  * User
  * Photo
  * Photo_category
  * Comment

#### ***Relationships***
To build a follower system (the many-to-many relationship for followers shown in the ERD), the User model includes a `ManyToManyField`:
```javascript
class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    profile_image = models.CharField(max_length=400)
    followed_by = models.ManyToManyField(
        'self',
        related_name='following',
        symmetrical=False,
        blank=True
    )
```
There is also a many-to-many relationship between User and Photo that represents 'likes': a photo can be liked by many users, and many photos can be liked by a user. Another many-to-many relationship exists between Category and Photo. The Photo model is shown below.

```javascript
class Photo(models.Model):
    title = models.CharField(max_length = 75)
    description = models.TextField(max_length=300, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    taken_at = models.DateTimeField(null=True, blank=True)
    camera = models.CharField(max_length = 50, blank=True)
    lens = models.CharField(max_length = 50, blank=True)
    image = models.CharField(max_length=400)
    location = models.CharField(max_length = 75)
    categories = models.ManyToManyField(
        'photo_categories.PhotoCategory',
        related_name='photos'
    )
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name='created_photo',
        on_delete=models.CASCADE
    )
    liked_by = models.ManyToManyField(
        'jwt_auth.User',
        related_name='liked_photos',
        blank=True
    )
```
