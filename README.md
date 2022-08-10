<p align="center">
  <h1>Admin Generator for Sunbird-RC</h1>
</p>

## About :open_book:

An automatic Code Generator for X-ADMIN which makes the Admin Panel out of the Schemas present in Sunbird-RC and has the ability to perform CRUD Operation from the generated Dashboard itself. 

## Features :dart:

- [x] Can connect to your custom APIs
- [x] Have beautiful themes and widgets
- [x] Run on any device, mobile or desktop, as long as it has a fairly modern browser
- [x] Performs CRUD operations from the Dashboard itself
- [x] Can be generated for multiple use cases. 
- [x] Provides No-Code solution to users who can update the Admin using Config files. 
- [ ] Has ability to serve monorepo archietecture for set of Software services.

## Use Case :rocket:

- Quickly Generates the Admin for different sections of Governments like Educational Bodies, HeathCare sections etc.
- Generator can serve as a common automative tool for creating the Softwares within a working body. 


## Requirements :scroll:

1. Your machine should have [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) or [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). 

2. Check the node and npm version by running following commands.
```sh
node -v
npm -v
```


## Installation Steps :walking:

### 1. Fork it :fork_and_knife:

You can get your own fork/copy of [admin-generator](https://github.com/Samagra-Development/generator-create-rc-admin) by using the <kbd><b>Fork</b></kbd> button.

### 2. Clone it :busts_in_silhouette:

You need to clone (download) it to a local machine using

```sh
git clone https://github.com/Your_Username/generator-create-rc-admin.git
```

> This makes a local copy of the repository in your machine.

Once you have cloned the `generator-create-rc-admin` repository in GitHub, move to that folder first using the change directory command.

```sh
# This will change directory to a folder generator-create-rc-admin
cd generator-create-rc-admin
```

Move to this folder for all other commands.

### 3. Set it up :arrow_up:

Run the following commands to see that _your local copy_ has a reference to _your forked remote repository_ in GitHub :octocat:

```sh
git remote -v
origin  https://github.com/Your_Username/generator-create-rc-admin.git (fetch)
origin  https://github.com/Your_Username/generator-create-rc-admin.git (push)
```
### 4. Run it :checkered_flag:


- Install Yeoman globally `npm install -g yo`
- Get required Node Modules `npm install`
- Link it with Yeoman `npm link`
- Go the any target directory where you want to create the admin.
- Check if the generator has been added or not. `yo --generators` It must output the name of generator which is `create-rc-admin`


### 5. For testing purpose 💥 

- Go to your target directory where you want the admin files to be generated. `mkdir test` and `cd test`.
- Now generate the files using the Yeoman generator for RC Admin. `yo create-rc-admin`.
- Select if you have your REST or GraphQL APIs or want to continue with Sunbird-RC.  
- Give the title to your Dashboard which will hold that particular Entity.
- Visit `localhost:3000` for viewing the site. 
- Try Performing the CRUD Operations from the Dashboard.

## Future Enhancements :rocket:

- Allowing dataProviders being made out from a Config file.
- Make default set of variables for more faster generation. 
- Have series of questions if user needs even more customizations.
- Use the Mock API server as the general purpose admin generator and make it more efficient. 
