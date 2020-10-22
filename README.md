# React + TypeScript Boilerplate

This project is a React + Redux + Typescript boilerplate that contains setup ideas I have picked up from 
years of writing React. 


This setup leverages atomic design concepts and uses several

## Tools used

#### [@emotion](https://emotion.sh/docs/introduction)

This project setup leverages atomic design principles and uses Emotion to create styled component.

#### [Redux](https://www.npmjs.com/package/redux)
Redux is used to manage global states in this project. I often use Redux to manage **only** data coming from the API. Anything other than this is undesirable. The project contains some helper functions that makes working with redux easier

#### [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
The storybook is used to document components as they are being built. 
Aside making it easy for my teammates to find components that exist easily, it has also made using the atomic approach a lot easier as folks can easily focus on building one component.

You can start up a storybook in this project by running: 
```bash
npm run storybook
```

#### [Antd](https://ant.design)
I have added this majorly for convenience, I tend to choose whatever CSS framework works for the team(or even if they don't want any). You should have no difficulty removing this one. 


## Starting the project
You can start the project by running: 

```bash
npm run start
```
Since the [create-react-app](https://create-react-app.dev/docs/getting-started) module was used to bootstrap initially, whatever command that worked there should work here as well.


## Linting
Linting has been setup using [eslint](https://www.npmjs.com/package/eslint). You can run fix up the files here by running:

```bash
npm run lint
```

## Commit Template
Once you clone the project you can decide to enforce a commit template by running 

```bash
git config --local commit.template .gitmessage
```
This would open up the `.gitmessage` file anytime you run `git commit`. 
The idea is to make following a commit convention a bit easier.
You can modify the conventions by simply modifying the `.gitmessage` file.
