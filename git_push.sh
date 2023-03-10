#!/bin/sh
# ref: https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/
#
# Usage example: /bin/sh ./git_push.sh token user_id "release note" 

git_token=$1
git_user_id=$2
release_note=$3
git_repo_id="videoengager-javascript-sdk"
git_host="github.com"
git_repo_user_id="videoengager"



if [ "$git_user_id" = "" ]; then
    git_user_id="videoengager"
    echo "[INFO] No command line input provided. Set \$git_user_id to $git_user_id"
fi


if [ "$release_note" = "" ]; then
    release_note="Minor update"
    echo "[INFO] No command line input provided. Set \$release_note to $release_note"
fi

# Initialize the local directory as a Git repository
git init

# Adds the files in the local repository and stages them for commit.
git add .

# Commits the tracked changes and prepares them to be pushed to a remote repository.
git commit -m "$release_note"

# Sets the new remote
git_remote=$(git remote)
if [ "$git_remote" = "" ]; then # git remote not defined
        git remote add origin https://$github.com:"${git_token}"@github.com/VideoEngager/${git_repo_id}.git

fi

git pull origin main

# Pushes (Forces) the changes in the local repository up to the remote repository
echo "Git pushing to https://${git_host}/VideoEngager/${git_repo_id}.git"
git push origin main 2>&1 | grep -v 'To https'
