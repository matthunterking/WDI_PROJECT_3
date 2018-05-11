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
    firstname: 'Li-zhen',
    surname: 'Su',
    email: 'su@email.com',
    password: 'a',
    passwordConfirmation: 'a',
    bio: 'I enjoy reading, walking, chatting and having a cup of tea.',
    image: '../../assets/images/sulizhen.jpg'
  },{
    firstname: 'Mo-wan',
    surname: 'Chow',
    email: 'chow@email.com',
    password: 'a',
    passwordConfirmation: 'a',
    bio: 'I\'m a journalist and work long hours, but am always happy to help on the weekends with removals or gardening.',
    image: '../../assets/images/chowmowan.jpg'
  },{
    firstname: 'Qiwu',
    surname: 'He',
    email: 'he@email.com',
    password: 'a',
    passwordConfirmation: 'a',
    bio: 'I love dogs and cats, and would love any opportunity to pet-sit!',
    image: '../../assets/images/heqiwu.jpg'
  },{
    firstname: 'Jingwen',
    surname: 'Wang',
    email: 'wang@email.com',
    password: 'a',
    passwordConfirmation: 'a',
    bio: 'I love cooking, shopping and playing with cats!',
    image: '../../assets/images/wangjingwen.jpg'
  },{
    firstname: 'Blondie',
    surname: 'Mok',
    email: 'blondie@email.com',
    password: 'a',
    passwordConfirmation: 'a',
    bio: 'I like tinkering with things and can fix anything from an armchair to a zipper.',
    image: '../../assets/images/blondiemok.jpg'
  }])
  .then(users => {
    console.log(`${users.length} users created`);

    return Job
      .create([
        {category: 'Removals',
          description: 'Am buying an armchair off Gumtree, would appreciate it if someone with a van could help me pick it up from Islington and drive it to my home in Whitechapel.',
          duration: '1-2 hours',
          frequency: 'Once',
          startdate: '2018-05-19T12:41:34.000Z',
          enddate: '2018-07-11T12:41:34.000Z',
          location: { lng: -0.080964, lat: 51.516282 },
          createdBy: users[0],
          applicants: [],
          messages: []
        },

        {category: 'DIY',
          description: 'I have a wobbly desk and I hope someone handy can take a look at it!',
          duration: 'Half a day',
          frequency: 'Once',
          startdate: '2018-05-20T12:41:34.000Z',
          enddate: '2018-05-20T12:41:34.000Z',
          location: { lng: -0.073664, lat: 51.517862 },
          createdBy: users[1],
          applicants: [],
          messages: []
        },

        {category: 'Gardening',
          description: 'My lawn grows really fast... could someone help mow it every month?',
          duration: 'Half a day',
          frequency: 'Monthly',
          startdate: '2018-05-20T12:41:34.000Z',
          enddate: '2019-05-11T12:41:34.000Z',
          location: { lng: -0.077249, lat: 51.515546 },
          createdBy: users[2],
          applicants: [],
          messages: []
        },

        {category: 'Pet-sitting',
          description: 'Need someone to feed my cat while I am on holiday in South America.',
          duration: '1-2 hours',
          frequency: 'Daily',
          startdate: '2018-05-20T12:41:34.000Z',
          enddate: '2018-06-11T12:41:34.000Z',
          location: { lng: -0.071224, lat: 51.512810 },
          createdBy: users[3],
          applicants: [],
          messages: []
        },

        {category: 'Meet-up',
          description: 'Would like someone to accompany me to the hospital every Friday.',
          duration: '1-2 hours',
          frequency: 'Weekly',
          startdate: '2018-05-11T12:41:34.000Z',
          enddate: '2018-07-11T12:41:34.000Z',
          location: { lng: -0.088990, lat: 51.504642 },
          createdBy: users[4],
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
