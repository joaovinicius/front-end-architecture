# This is an example of DDD concept to front-end development. (I'm still working here).

![The sample application is divided into four: Infrastructure, Domain, Application, Interfaces](http://dddsample.sourceforge.net/images/layers.jpg)

My infrastructure is currently organized as follows:

- [Domain](https://github.com/joaovinicius/front-end-architecture/tree/master/Domain)
- [Application](https://github.com/joaovinicius/front-end-architecture/tree/master/Application)
- [web](https://github.com/joaovinicius/front-end-architecture/tree/master/web)

## Requirements
- Node
- Npm
- TheMovieDb account. [Link](https://www.themoviedb.org/)
- Create TheMovieDb API KEY (v3 auth). [Link](https://www.themoviedb.org/settings/api)

Learn more about TheMovieDb [here](https://developers.themoviedb.org/3/getting-started).

## How to run project

Create env file
`make env key=YOUR_THE_MOVIE_DB_API_KEY_V3`

Install all user interface dependencies
`make install`

Run application in development mode
`make dev`

Acess nuxt-app in your browser:
`http://localhost:3000/`

