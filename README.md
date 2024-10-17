## Local dev setup
1. Create github account using your pears email.
2. Clone repo - git clone https://github.com/Pears-co-za/pears.co.za.git
3. Run `npm install` to ensure all the dev dependencies are downloaded
4. Use .env.example to create your own .env file
5. Use `npm start` to run the app locally. Open http://localhost:3000 to view it in your browser.

## Staging Git flow - (Netlify builds and deploys staging when you push to the branch)
### `Deploy feature branch to staging`
1. Create (`git checkout -b branch-name`) and push your work onto feature branch
2. `git checkout staging`
3. `git pull && git reset --hard origin/main && git push --force` (resets staging branch & merges main into staging)
4. Merge your branch into the staging branch - `git merge branch-name`
5. Push your changes on to the staging branch - `git push` 

### `Deploy direcly from the staging branch`
1. `git checkout staging` & do your work.
2. `git stash` to store your work and avoid merge conflicts later
3. git pull && git reset --hard origin/main && git push --force (resets staging branch & merges main into staging)
4. `git stash pop` (restore work)
5. a) `git add .` or `git add -p`
   b) `git commit -m 'commit message'`
   c) `git push`

## Production Git flow - (Netlify builds and deploys production when you push to the main branch)
### `Create a PR (pull request)`
1. Create (`git checkout -b branch-name`) and push your work onto feature branch
2. Push changes to feature branch and create PR
     a) `git add .` or `git add -p`
     b) `git commit -m 'commit message'`
     c) `git push`
     d) Create PR by clicking the link on the terminal after pushing to the feature branch or going to [repo](https://github.com/Pears-co-za/pears.co.za) and clicking on `create pull request` for your branch.
3. Get reviews and merge to production.

### `Push direcly from the staging branch`
1. Navigate to main branch `git checkout main`
2. Pull latest changes - git pull
3. Do your work and push changes to main branch

## Netlify staging and production sites
- https://pears-staging.netlify.app/
- https://wearepears.co.za/

TODO - Wiki for sensitive information 👀 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
