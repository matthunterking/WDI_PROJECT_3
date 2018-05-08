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
    image: 'https://www.biography.com/.image/t_share/MTE1ODA0OTcxNTQ2ODcxMzA5/jane-austen-9192819-1-402.jpg',
    location: 'E1 7QX'
  },{
    firstname: 'Emily',
    surname: 'Brontë',
    email: 'emily@email.com',
    password: 'password',
    passwordConfirmation: 'password',
    bio: 'I love walking, shopping and am quite good at gardening. I hate cooking.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Emily_Bront%C3%AB_by_Patrick_Branwell_Bront%C3%AB_restored.jpg',
    location: 'E1 6JQ'
  },{
    firstname: 'Arthur',
    surname: 'Conan Doyle',
    email: 'arthur@email.com',
    password: 'password',
    passwordConfirmation: 'password',
    bio: 'If you need a hand moving something, I\'m your man! Also good at pet-sitting. Unfortunately, I am bad at gardening and often need help mowing my lawn.' ,
    image: 'https://collectionimages.npg.org.uk/large/mw01926/Arthur-Conan-Doyle.jpg',
    location: 'E1 1BB'
  },{
    firstname: 'Charles',
    surname: 'Dickens',
    email: 'charles@email.com',
    password: 'password',
    passwordConfirmation: 'password',
    bio: 'I love cooking. Don\'t have time to shop though - far too busy.',
    image: 'https://www.telegraph.co.uk/content/dam/news/china-watch/china-watch-migration/charles-dickens_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwZwVSIA7rSIkPn18jgFKEo0.jpg?imwidth=450',
    location: 'E1 6BX'
  }])
  .then(users => {
    console.log(`${users.length} users created`);

    return Job
      .create([
        {category: 'conversation',
          description: 'Would be grateful if someone could have tea with me every Friday.',
          duration: 'ongoing',
          startdate: 'Wed Oct 18 2017 12:41:34 GMT+0000 (UTC)',
          enddate: 'Wed Oct 18 2018 12:41:34 GMT+0000 (UTC)',
          location: { lat: 51.517, lng: -0.078 },
          createdBy: users[0],
          applicants: [],
          messages: [{message: 'I am great!', createdBy: users[1]}, {content: 'I am better!', createdBy: users[2]}]
        },

        {category: 'DIY',
          description: 'I have a wobbly desk and I hope someone handy can take a look at it!',
          duration: 'once',
          startdate: 'Wed Oct 18 2017 12:41:34 GMT+0000 (UTC)',
          enddate: 'Wed Oct 18 2018 12:41:34 GMT+0000 (UTC)',
          location: { lat: 51.517, lng: -0.079 },
          createdBy: users[0],
          applicants: [],
          messages: [{message: 'I fix stuff good!', createdBy: users[2]}, {content: 'I fix stuff better!', createdBy: users[3]}]
        }

      ]);
  })

  .then(jobs => {
    console.log(`${jobs.length} jobs created!`);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
