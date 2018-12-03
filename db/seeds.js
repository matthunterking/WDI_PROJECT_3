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
    firstname: 'Derrick',
    surname: 'Sanders',
    email: 'derrick@neighbourgood.com',
    password: 'd',
    passwordConfirmation: 'd',
    bio: 'I enjoy reading, walking, chatting and having a cup of tea.',
    image: '../../assets/images/derrick.jpg'
  },{
    firstname: 'Liz',
    surname: 'Smith',
    email: 'liz@neighbourgood.com',
    password: 'l',
    passwordConfirmation: 'l',
    bio: 'I\'m a journalist and work long hours, but am always happy to help on the weekends with removals or gardening.',
    image: '../../assets/images/liz.jpeg'
  },{
    firstname: 'Hannah',
    surname: 'Murray',
    email: 'hannah@neighbourgood.com',
    password: 'h',
    passwordConfirmation: 'h',
    bio: 'I love dogs and cats, and would love any opportunity to pet-sit!',
    image: '../../assets/images/hannah.jpg'
  },{
    firstname: 'Jingwen',
    surname: 'Wang',
    email: 'wang@email.com',
    password: 'a',
    passwordConfirmation: 'a',
    bio: 'I love cooking, shopping and playing with cats!',
    image: '../../assets/images/wangjingwen.jpg'
  },{
    firstname: 'Nisha',
    surname: 'Mok',
    email: 'nisha@neighbourgood.com',
    password: 'n',
    passwordConfirmation: 'n',
    bio: 'I like tinkering with things and can fix anything from an armchair to a zipper.',
    image: '../../assets/images/nisha.jpg'
  },{
    firstname: 'Alan',
    surname: 'Marsh',
    email: 'alan@email.com',
    password: 'a',
    passwordConfirmation: 'a',
    bio: 'My favourtie past time is watching the football, especially the mighty arsenal!',
    image: '../../assets/images/alan.jpg'
  },{
    firstname: 'Ralph',
    surname: 'Spencer',
    email: 'raplh@email.com',
    password: 'a',
    passwordConfirmation: 'a',
    bio: 'Back in the day I used to be a top cricket player. Now I struggle with doing the house work. My knees arent what they used to be',
    image: '../../assets/images/ralph.jpg'
  },{
    firstname: 'Kate',
    surname: 'Jackson',
    email: 'kate@email.com',
    password: 'a',
    passwordConfirmation: 'a',
    bio: 'I love gardening. Any time of the year I\'m available to help assist in making your garden look presentbale' ,
    image: '../../assets/images/kate.jpg'
  },{
    firstname: 'Carl',
    surname: 'Doyle',
    email: 'carl@email.com',
    password: 'a',
    passwordConfirmation: 'a',
    bio: 'Cooking is a real hobbie of mine. I spend most of my time in the kitchen trying out new recipes. I make a mean chicken tikka massala!' ,
    image: '../../assets/images/carl.jpg'
  },{
    firstname: 'Tony',
    surname: 'Vesin',
    email: 'tony@email.com',
    password: 'a',
    passwordConfirmation: 'a',
    bio: 'Plumbing is what I do. If there\'s a leak, I\'ll plug it!',
    image: '../../assets/images/tony2.jpeg'
  },{
    firstname: 'Mavis',
    surname: 'Hutton',
    email: 'mavis@neighbourgood.com',
    password: 'a',
    passwordConfirmation: 'a',
    bio: 'I\'m a retired nurse and my family have all moved away. So I\'m looking for some help around the house',
    image: '../../assets/images/mavis.jpg'
  },{
    firstname: 'Rose',
    surname: 'Wiltshire',
    email: 'rose@email.com',
    password: 'a',
    passwordConfirmation: 'a',
    bio: 'I\'m a freelance artist so have lots of time to help other people!',
    image: '../../assets/images/rose.jpg'
  },{
    firstname: 'Sam',
    surname: 'Butcher',
    email: 'sam@email.com',
    password: 'a',
    passwordConfirmation: 'a',
    bio: 'I love living in London and really want to give something back to the community',
    image: '../../assets/images/sam.jpg'
  },{
    firstname: 'Steve',
    surname: 'McDonald',
    email: 'steve@email.com',
    password: 'a',
    passwordConfirmation: 'a',
    bio: 'I am originally from sweden but now live in London.',
    image: '../../assets/images/steve.jpg'
  },{
    firstname: 'Caroline',
    surname: 'Smith',
    email: 'caroline@email.com',
    password: 'a',
    passwordConfirmation: 'a',
    bio: 'I like to be active and want to be part of the community.',
    image: '../../assets/images/caroline.jpg'
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
        createdBy: users[6],
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
        createdBy: users[7],
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
        createdBy: users[10],
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
        category: 'Meet-up',
        description: 'Would be grateful if someone could have tea with me every Friday.',
        duration: '1-2 hours',
        frequency: 'Weekly',
        startdate: 'Fri May 11 2018 12:41:34 GMT+0000 (UTC)',
        enddate: 'Fri Jun 29 2018 12:41:34 GMT+0000 (UTC)',
        location: { lng: -0.080964, lat: 51.536282 },
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
        location: { lng: -0.073664, lat: 51.521862 },
        createdBy: users[12],
        applicants: [],
        messages: []
      },{
        category: 'Gardening',
        description: 'My garden is so overgrown I\'ve lost my hound in it, need help sorting it out every month.',
        duration: 'Full day',
        frequency: 'Monthly',
        startdate: 'Wed Jun 20 2018 12:41:34 GMT+0000 (UTC)',
        enddate: 'Wed Jun 20 2018 12:41:34 GMT+0000 (UTC)',
        location: { lng: -0.077659, lat: 51.515546 },
        createdBy: users[8],
        applicants: [],
        messages: []
      },{
        category: 'Pet-sitting',
        description: 'Need someone to feed my cat Miss Havisham when I\'m in America on a book tour.',
        duration: '1-2 hours',
        frequency: 'Daily',
        startdate: 'Mon May 28 2018 12:41:34 GMT+0000 (UTC)',
        enddate: 'Mon Jul 30 2018 12:41:34 GMT+0000 (UTC)',
        location: { lng: -0.077624, lat: 51.519810 },
        createdBy: users[9],
        applicants: [],
        messages: []
      },{
        category: 'Removals',
        description: 'Am buying an armchair off Gumtree, would appreciate it if someone with a van could help me pick it up from Islington and drive it to my home in Whitechapel.',
        duration: '1-2 hours',
        frequency: 'Once',
        startdate: '2018-05-19T12:41:34.000Z',
        enddate: '2018-07-11T12:41:34.000Z',
        location: { lng: -0.082364, lat: 51.5161582 },
        createdBy: users[13],
        applicants: [],
        messages: []
      },{
        category: 'DIY',
        description: 'I have a wobbly desk and I hope someone handy can take a look at it!',
        duration: 'Half a day',
        frequency: 'Once',
        startdate: '2018-05-20T12:41:34.000Z',
        enddate: '2018-05-20T12:41:34.000Z',
        location: { lng: -0.073564, lat: 51.517322 },
        createdBy: users[2],
        applicants: [],
        messages: []
      },{
        category: 'Gardening',
        description: 'My lawn grows really fast... could someone help mow it every month?',
        duration: 'Half a day',
        frequency: 'Monthly',
        startdate: '2018-05-20T12:41:34.000Z',
        enddate: '2019-05-11T12:41:34.000Z',
        location: { lng: -0.076749, lat: 51.535546 },
        createdBy: users[10],
        applicants: [],
        messages: []
      },{
        category: 'Pet-sitting',
        description: 'Need someone to feed my cat while I am on holiday in South America.',
        duration: '1-2 hours',
        frequency: 'Daily',
        startdate: '2018-05-20T12:41:34.000Z',
        enddate: '2018-06-11T12:41:34.000Z',
        location: { lng: -0.2206, lat: 51.4183 },
        createdBy: users[11],
        applicants: [],
        messages: []
      },{
        category: 'Meet-up',
        description: 'Would like someone to accompany me to the hospital every Friday.',
        duration: '1-2 hours',
        frequency: 'Weekly',
        startdate: '2018-05-11T12:41:34.000Z',
        enddate: '2018-07-11T12:41:34.000Z',
        location: { lng: -0.083250, lat: 51.53522 },
        createdBy: users[7],
        applicants: [],
        messages: []
      },{
        category: 'Miscellaneous',
        description: 'I am changing careers and could do with someone having a look at my CV.',
        duration: '1-2 hours',
        frequency: 'Weekly',
        startdate: '2018-05-11T12:41:34.000Z',
        enddate: '2018-07-11T12:41:34.000Z',
        location: { lng: -0.0982, lat: 51.3762 },
        createdBy: users[7],
        applicants: [],
        messages: []
      }]);
  })

  .then(jobs => {
    console.log(`${jobs.length} jobs created!`);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
