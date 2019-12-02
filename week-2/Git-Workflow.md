# Git-Worklow

## Resourcen
- Git Cheatsheet by GitHub: https://services.github.com/on-demand/downloads/github-git-cheat-sheet/

## Ablauf

Change to the master branch: `git checkout master`

Create new branch and switch to it: `git checkout -b <branch-name>`

Make some changes and then add the files and commit them: 
`git add .`

```git commit -m "my commit message"```

Push to remote repository - if the branch does not exist on github it is created: 
```git push origin <branch-name>```

Go to the github repository and click on "New Pull Request"
The Pull Request gets reviewed by the other team member and merged

Then we have to pull in the changes from the github repo to our local branch

We change to the master branch:
```git checkout master branch```

We pull in the changes from the github repo:
```git pull origin master```

We switch to our own branch that we just pushed to github: 
```lgit checkout <branch-namw></branch-namw>```

Now we merge the master branch into this branch
$ git merge master