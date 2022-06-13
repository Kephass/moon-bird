# Moon Bird APP

Relaxing breathing exercises convieniently in your hands. Moon biird is your breathing coach that helps you reset into a
relaxing state of mind.

# How to run it

- Execute yarn in the root of the project to install all app dependencies: `yarn`
- change absolute url in services/appollo.js to your own IP address.
- run api: `yarn start:api`
- run app: `yarn start:app`

# Some screenshots of the app

![Journeys] <img src="https://user-images.githubusercontent.com/45005547/172835649-5800f841-d228-4833-a3b8-d9527a9a9a77.PNG" width="80" >
![Episodes] <img src="https://user-images.githubusercontent.com/45005547/172835661-baf203c1-9592-4c08-9020-69eeea970617.PNG" width="80" >

# Things I could/will do better

- use .env to store the url for deployment optimization purposes
- Abtsract some of the logic into functions instead of inside the JSX
- Create a babel config to allow me to use ES6 fetaure `import` instead of `require`
- Probably use React Context for the user fetching component in case I'd need to fetch the user in a deeply nested component also
- Move some data defined in specific files to their own separate files.
- Instead of paasing episodes data needed from the journeys through the url, I should create a function that gets the journey I need and render its episodes that way.
