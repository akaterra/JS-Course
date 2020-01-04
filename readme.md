Requirements
------------

* NodeJS
* NPM

Structure
---------

```
./spec - specifications of lessons (unit tests)
./src - source code of lessons
```

Installation
------------

```sh
npm install
```

Running tests and lint
-------------
```sh
npm run karma:chrome
npm run lint
```

Syncronization with master branch
---------------------------------

Before pushing to your branch commit your changes and do syncronization with the master branch:

```sh
git commit -am "<COMMIT MESSAGE HERE>"
git pull --rebase origin master
```

If there are conflicts fix them then add these changes to the patch and continue rebasing (do multiple time of necessary):
```sh
git add .
git rebase --continue
```

Run tests and linter again:
```sh
npm run karma:chrome
npm run lint
```

If tests fail and you applied some fixes to your code commit them:
```sh
git commit -am "apply fixes"
```

Then push to your branch:
```sh
git push origin <BRANCH NAME HERE>
```
