const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI);

const Job = require('../models/job');
const User = require('../models/user');


User.collection.drop();
Job.collection.drop();


User
  .create([{
    firstname: 'Jane',
    surname: 'Austen',
    email: 'jane@email.com',
    password: 'password',
    passwordConfirmation: 'password',
    bio: 'I enjoy reading, having tea, and matchmaking people. I love talking to people and don\'t get to do it enough!',
    image: 'https://www.biography.com/.image/t_share/MTE1ODA0OTcxNTQ2ODcxMzA5/jane-austen-9192819-1-402.jpg'
  },{
    firstname: 'Emily',
    surname: 'Brontë',
    email: 'emily@email.com',
    password: 'password',
    passwordConfirmation: 'password',
    bio: 'I love walking, shopping and am quite good at gardening. I hate cooking.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Emily_Bront%C3%AB_by_Patrick_Branwell_Bront%C3%AB_restored.jpg'
  },{
    firstname: 'Arthur',
    surname: 'Conan Doyle',
    email: 'arthur@email.com',
    password: 'password',
    passwordConfirmation: 'password',
    bio: 'If you need a hand moving something, I\'m your man! Also good at pet-sitting. Unfortunately, I am bad at gardening and often need help mowing my lawn.' ,
    image: 'https://collectionimages.npg.org.uk/large/mw01926/Arthur-Conan-Doyle.jpg'
  },{
    firstname: 'Charles',
    surname: 'Dickens',
    email: 'charles@email.com',
    password: 'password',
    passwordConfirmation: 'password',
    bio: 'I love cooking. Don\'t have time to shop though - far too busy.',
    image: 'https://www.telegraph.co.uk/content/dam/news/china-watch/china-watch-migration/charles-dickens_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwZwVSIA7rSIkPn18jgFKEo0.jpg?imwidth=450'
  },{
    firstname: 'Alan',
    surname: 'Marsh',
    email: 'alan@email.com',
    password: 'password',
    passwordConfirmation: 'password',
    bio: 'My favourtie past time is watching the football, especially the mighty arsenal!',
    image: ''
  },{
    firstname: 'Ralph',
    surname: 'Spencer',
    email: 'raplh@email.com',
    password: 'password',
    passwordConfirmation: 'password',
    bio: 'Back in the day I used to be a top cricket player. Now I struggle with doing the house work. My knees arent what they used to be',
    image: ''
  },{
    firstname: 'Kate',
    surname: 'Jackson',
    email: 'kate@email.com',
    password: 'password',
    passwordConfirmation: 'password',
    bio: 'I love gardening. Any time of the year I\'m available to help assist in making your garden look presentbale' ,
    image: ''
  },{
    firstname: 'Carl',
    surname: 'Doyle',
    email: 'carl@email.com',
    password: 'password',
    passwordConfirmation: 'password',
    bio: 'Cooking is a real hobbie of mine. I spend most of my time in the kitchen trying out new recipes. I make a mean chicken tikka massala!' ,
    image: ''
  },{
    firstname: 'Tony',
    surname: 'Vesin',
    email: 'tony@email.com',
    password: 'password',
    passwordConfirmation: 'password',
    bio: 'Plumbing is what I do. If there\'s a leak, i\'ll plug it!',
    image: ''
  }])
  .then(users => {
    console.log(`${users.length} users created`);

    return Job
      .create([{
        category: 'Gardening',
        description: 'I need some gardening done. My weeds have overgrown and the lawn needs mowing!',
        duration: 'Half a day',
        frequency: 'Once',
        startdate: 'Fri May 25 2018 12:41:34 GMT+0000 (UTC)',
        enddate: 'Fri May 25 2018 12:41:34 GMT+0000 (UTC)',
        location: { lng: -0.078696, lat: 51.571610 },
        createdBy: users[0],
        applicants: [],
        messages: []
      },{
        category: 'Cooking',
        description: 'Please could someone make me dinner',
        duration: '1-2 hours',
        frequency: 'Once',
        startdate: 'Sat May 12 2018 12:41:34 GMT+0000 (UTC)',
        enddate: 'Sat May 12 2018 12:41:34 GMT+0000 (UTC)',
        location: { lng: -0.051905, lat: 51.552635 },
        createdBy: users[1],
        applicants: [],
        messages: []
      },{
        category: 'Shopping',
        description: 'I need some eggs and milk please.',
        duration: '1-2 hours',
        frequency: 'Once',
        startdate: 'Wed Jun 20 2018 12:41:34 GMT+0000 (UTC)',
        enddate: 'Wed Jun 20 2018 12:41:34 GMT+0000 (UTC)',
        location: { lng: -0.101473, lat: 51.543348 },
        createdBy: users[2],
        applicants: [],
        messages: []
      },{
        category: 'Pet-sitting',
        description: 'Could someone feed my cat whilst i\'m in hospital for a week',
        duration: '1-2 hours',
        frequency: 'Daily',
        startdate: 'Mon May 21 2018 12:41:34 GMT+0000 (UTC)',
        enddate: 'Fri May 25 2018 12:41:34 GMT+0000 (UTC)',
        location: { lng: -0.061518, lat: 51.548498 },
        createdBy: users[3],
        applicants: [],
        messages: []
      },{
        category: 'Social',
        description: 'Would be grateful if someone could have tea with me every Friday.',
        duration: '1-2 hours',
        frequency: 'Weekly',
        startdate: 'Fri May 11 2018 12:41:34 GMT+0000 (UTC)',
        enddate: 'Fri Jun 29 2018 12:41:34 GMT+0000 (UTC)',
        location: { lng: -0.080964, lat: 51.516282 },
        createdBy: users[0],
        applicants: [],
        messages: []
      },{
        category: 'DIY',
        description: 'I have a wobbly desk and I hope someone handy can take a look at it!',
        duration: 'Half a day',
        frequency: 'Once',
        startdate: 'Sat May 12 2018 12:41:34 GMT+0000 (UTC)',
        enddate: 'Sat May 12 2018 12:41:34 GMT+0000 (UTC)',
        location: { lng: -0.073664, lat: 51.517862 },
        createdBy: users[1],
        applicants: [],
        messages: []
      },{
        category: 'Gardening',
        description: 'My garden is so overgrown I\'ve lost my hound in it, need help sorting it out every month.',
        duration: 'Full day',
        frequency: 'Monthly',
        startdate: 'Wed Jun 20 2018 12:41:34 GMT+0000 (UTC)',
        enddate: 'Wed Jun 20 2018 12:41:34 GMT+0000 (UTC)',
        location: { lng: -0.077249, lat: 51.515546 },
        createdBy: users[2],
        applicants: [],
        messages: []
      },{
        category: 'Pet-sitting',
        description: 'Need someone to feed my cat Miss Havisham when I\'m in America on a book tour.',
        duration: '1-2 hours',
        frequency: 'Daily',
        startdate: 'Mon May 28 2018 12:41:34 GMT+0000 (UTC)',
        enddate: 'Mon Jul 30 2018 12:41:34 GMT+0000 (UTC)',
        location: { lng: -0.071224, lat: 51.512810 },
        createdBy: users[3],
        applicants: [],
        messages: []
      }
      ]);
  })

  .then(jobs => {
    console.log(`${jobs.length} jobs created!`);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
