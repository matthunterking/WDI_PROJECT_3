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
  }])
  .then(users => {
    console.log(`${users.length} users created`);

    return Job
      .create([
        {category: 'Social',
          description: 'Would be grateful if someone could have tea with me every Friday.',
          duration: '1-2 hours',
          frequency: 'Weekly',
          startdate: 'Fri May 11 2018 12:41:34 GMT+0000 (UTC)',
          enddate: 'Fri Jun 29 2018 12:41:34 GMT+0000 (UTC)',
          location: { lng: -0.080964, lat: 51.516282 },
          createdBy: users[0],
          applicants: [],
          messages: []
        },

        {category: 'DIY',
          description: 'I have a wobbly desk and I hope someone handy can take a look at it!',
          duration: 'Half a day',
          frequency: 'Once',
          startdate: 'Sat May 12 2018 12:41:34 GMT+0000 (UTC)',
          enddate: 'Sat May 12 2018 12:41:34 GMT+0000 (UTC)',
          location: { lng: -0.073664, lat: 51.517862 },
          createdBy: users[1],
          applicants: [],
          messages: []
        },

        {category: 'Gardening',
          description: 'My garden is so overgrown I\'ve lost my hound in it, need help sorting it out every month.',
          duration: 'Full day',
          frequency: 'Monthly',
          startdate: 'Wed Jun 20 2018 12:41:34 GMT+0000 (UTC)',
          enddate: 'Wed Jun 20 2018 12:41:34 GMT+0000 (UTC)',
          location: { lng: -0.077249, lat: 51.515546 },
          createdBy: users[2],
          applicants: [],
          messages: []
        },

        {category: 'Pet-sitting',
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
