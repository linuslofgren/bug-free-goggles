#bug-free-goggles
Front-end for Viscando sites built with react
##Developing
Use `$npm start` to start a web-pack web server.
Use `$npm run-script build` to compile and combine files, results are in `dist`
Use `$npm test` to run tests

To add a url, add the url name to `webpack.urls.js` and add a folder in `/urls` with the same name as the url
##Versioning
The two branches in use are `master` and `development`. Master is used to publish production-ready changes.

While developing use `development`
`$git checkout development`
`$git pull`

To push to `master` use
`$git checkout master`
`$git pull`
`$git pull origin development`
`$git push`

This will trigger final tests and a production build with `CircleCI`
