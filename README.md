# TECH-LINK NEWS BLOG
![Express](https://img.shields.io/badge/-Express-blue.svg)
![Passport-Local](https://img.shields.io/badge/Passport-Local-green.svg)
![Bcrypt](https://img.shields.io/badge/-Bcrypt-darkblue.svg)
![Mysql](https://img.shields.io/badge/-MySQL-darkgreen.svg)
![Sequelize](https://img.shields.io/badge/-Sequelize-blue.svg) 
![Handlebars](https://img.shields.io/badge/-Handlebars-ff69b4.svg)
![Dotenv](https://img.shields.io/badge/-Dotenv-lightblue.svg)
![Heroku](https://img.shields.io/badge/-Heroku-purple.svg)
![MIT license](https://img.shields.io/badge/License-MIT-green.svg)
![badge](https://img.shields.io/github/languages/top/yogibruce/tech-link)

## Description
 Tech-Link is a CMS style tech-blog site hosted on Heroku. It allows users to post interesting ideas and share their favorite tech news. 

 ## Table of Contents
- [Installation](#installation)
- [Heroku](#heroku)
- [Github Repository](#github-repo)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

#
## Installation
<a id="installation"></a>
No installation is needed to view deployed app. If user would like to use locally, GitHub repo may be cloned. If so, user will need to follow these steps to seed data and open app on localhost:3001:
#
1. In your CLI, enter npm install.
2. Enter "mysql -u root -p" and then enter your mysql password.
3. Enter "source db/schema.sql" and then quit mysql to your CLI.
4. Enter "npm run seed"
5. Enter "npm start" and navigate browser to localhost:3001

#
## Heroku App
<a id="heroku"></a>

#
Heroku link: [Tech-Link](https://infinite-journey-25034.herokuapp.com/)

#
## GitHub Repository
<a id="github-repo"></a>
You may clone this repo to begin using application: [GitHub Repo](https://github.com/YogiBruce/tech-link)

#
## Usage
<a id="usage"></a>
User may view public posts when arriving on landing page. By clicking on Login, User is taken to Login page. If User has not previously created a profile, they may Sign Up as a new User. Once logged in, User will view their Dashboard displaying Posts by User. By clicking on Home, User is taken to full page of Posts. User may Comment on a Post by clicking on title and entering Comment into form. From User Dashboard, User may Create a Post by clicking Add Post. If User would like to Update or Delete a previous Post, they may do so by clicking on title of Post and then submitting an Update or selecting Delete Post. If User is done using app, they may Logout which ends Session and returns User to Homepage.

#
## Screenshots
<a id="screenshot"></a>

#### Homepage
<img src="public\images\homepage.jpg" width="400px">
<br>

#### Login 
<img src="public\images\login.jpg" width="400px">
<br>

#### Dashboard
<img src="public\images\login.jpg" width="400px">
<br>

#### Add Post
<img src="public\images\new-post.jpg" width="400px">
<br>

#### View and Comment on Other Posts
<img src="public\images\post-by-id-comment.jpg" width="400px">
<br>

#### Update or Delete User Post
<img src="public\images\update-delete-user-post.jpg" width="400px">
<br>



#
## Tests
<a id="tests"></a>
There are no tests for this application, all input data is validated for models.

#
## License
<a id="license"></a>

#### MIT License [vist link](https://choosealicense.com/licenses/mit/)
Copyright 2022 - Robert B Arnold Jr

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#
## Questions
<a id="questions"></a>

For any questions regarding this application or any other project by YogiBruce:

### Email: [Gmail](mailto:da.bruce.jr@gmail.com)

### Gihub Profile: [YogiBruce](https://github.com/YogiBruce) 
