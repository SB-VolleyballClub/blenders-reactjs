== Installation
Initial installation done in mid-2018 on a macOS-10.13.5 laptop

Below are the commands issued:
```
which npx
which npm
brew install npm
brew install node
npm -v
node -v
npx -v
mkdir testing
cd testing
npx create-react-app sbvc
cd sbvc
npm start
```

== Adding Redux
Used the following as a guide:
* https://code.likeagirl.io/tutorial-for-adding-redux-to-a-react-app-1a94cc1738e5

```
git checkout -b addRedux  # create new branch
npm add redux
npm add react-redux
npm add redux-thunk
```

Having trouble sorting out how to implement the StuffList.  Getting confused with store, stuff and stuffs.  In the code.likeagirl tutorial, there were some typos and a few example files not fleshed out.  

== Pass 2
* https://github.com/tarique93102/react-redux-starter-template
* https://reactjs.org/docs/react-component.html
* https://github.com/reduxjs/redux/blob/master/docs/introduction/Examples.md
* https://hackernoon.com/a-basic-react-redux-introductory-tutorial-adcc681eeb5e
* https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a

Want to take a look at this in more detail and maybe see about having a control panel page at the entry point which determines the # of teams in each pool and how those behave.  The submit would take you to the next page with the pools.
