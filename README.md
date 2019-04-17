# Vidly from Mosh's Node JS course

```
npm install
set vidly_jwtPrivateKey=mySecureKey
node index.js
```

## WebImblaze tests

Install WebImblaze, WebImblaze-FrameWork, then add `wif.pl` to path.

```
wif.pl test.test
```

## Deployment

Install heroku cli
```
https://devcenter.heroku.com/articles/heroku-cli
```

Login
```
heroku login
```

Create a local git repository, add a `.gitignore`, then commit locally.

.gitignore
```
node_modules/
coverage/
*.log
```

```
cd /git/vidly
git init
git add .
git commit -m "First commit."
```

Create in Heroku, optionally add a unique name
```
heroku create
```

```
Creating app... done, ⬢ dry-reaches-67963
https://dry-reaches-67963.herokuapp.com/ | https://git.heroku.com/dry-reaches-67963.git
```

`git remote -v`
```
heroku  https://git.heroku.com/dry-reaches-67963.git (fetch)
heroku  https://git.heroku.com/dry-reaches-67963.git (push)
```

Deploy
```
git push heroku master
```

Set Environment variables
```
heroku config:set vidly_jwtPrivateKey=12345
heroku config:set NODE_ENV=production
heroku config:set vidly_db=DB_CONNECTION_STRING
heroku config
```

## Debug Deployment

```
heroku logs
```

## Put on GitHub also

```
git remote add github https://github.com/Qarj/vidly.git
git push github master
```