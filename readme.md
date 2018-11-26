# WDI Project 3 - NeighbourGood <img style='float: right' src='https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png'>
---
<a href='https://neighbourgood.herokuapp.com/#!/'>
<img style='width: 100%;' src='/screenshots/Logo_neighbourGood.png' alt='logo screenshot'></a>

### Project Overview and Motivation
NeighbourGood is a job board where users can volunteer to help other people from their community with day to day tasks. Users can filter jobs by location and manage applicants for their posted jobs.

This was our third project as part of the General Assembly Web Development Immersive course. The objective was to build a full stack web application using Angular.


### Contributors
<table>
  <thead>
    <th><img src='/screenshots/MHK.jpg' width=70px /></th>
    <th><img src='/screenshots/OB.jpeg' width=90px /></th>
    <th><img src='/screenshots/SY.jpeg' width=90px /></th>
  </thead>
  <tbody>
    <td>
    <strong>Matt Hunter-King</strong>
    <p>Web Development</p>
    </td>
    <td>
    <strong>Ozzie Balesaria</strong>
    <p>Web Development</p>
    </td>
    <td>
    <strong>Stephanie Ye</strong>
    <p>Web Development</p>
    </td>
  </tbody>
</table>

### Timeframe
10 days (May 2018)

--------------

### Technologies used
* AngularJS
* Sass/CSS
* JavaScript
* HTML5
* Bulma
* Google Maps
* Gmail Oauth
* Filestack
* Balsamiq
* Trello
* Insomnia

---

### User Journey

On entering the site users can choose to register or log in via the form on the right or using their Gmail account.

![screenshot1](/screenshots/screenshot1.png)

After registering or logging in they are show a list of available jobs in their area.

![screenshot2](/screenshots/screenshot2.png)

Clicking on the markers on the map reveals more information on the job. Users can also filter jobs by distance from their current location.

![screenshot3](/screenshots/screenshot3.png)

Once a job is selected users are shown more details of the user who created it, directions to the job from their current location and can post messages and apply for the job.

![screenshot4](/screenshots/screenshot4.png)

After a job has been posted the user who created it can choose which applicant they would like to complete the job.

![screenshot5](/screenshots/screenshot5.png)

Once a job is marked as complete the users can rate each other as either a helper (the user who completed the job) or asker (the user who posted the job).

![screenshot6](/screenshots/screenshot6.png)

---

### Approach

After a brainstorm we decided that we would like to make an app which would be community focussed. After creating some initial wireframes using Balsamiq we mapped out our project using Trello.

![screenshot7](/screenshots/screenshot7.png)

We decided to work together on the backend of the app before we moved onto the front end. We also identified what features where part of our MVP (Minimum Viable Product) and which would be nice to have but not essential.

We broke the development process down into sprints. During each sprint, we focussed on small, specific parts of the project. After completing each sprint, we evaluated our work and discussed our goals for the next sprint, before continuing the process. Each sprint lasted about 3-4 hours.

### Filtering By Distance

The filtering by distance is handled in the backend of the application. The varible `radians` takes the input from the user and divides it but the equatorial radius of the earth. I then feed this into MongoDB's geospatial query operator to filter the database entries and return only those which are within the radius.

```
function jobsIndexFilter(req, res, next) {
  //max distance is in km!
  const radians = (parseFloat(req.body.maxDistance) / 6378.1);
  Job
    .find({
      location: {
        $geoWithin: {
          $centerSphere: [ [ parseFloat(req.body.lng), parseFloat(req.body.lat) ], radians ]
        }
      }
    })
    .populate('createdBy')
    .exec()
    .then(jobs => res.json(jobs))
    .catch(next);
}
```

---

### Challenges

This was the first time in the course that we had worked on a project in a group. As such a lot of our challenges came from differences in naming conventions and in working out how to evenly split the workload. Filtering by distance involved reading a lot of documentation online but I was really pleased that we managed to include the feature.

### Wins

One of the best parts of this projects came early on. All three of us had been working on parts of the backend which would eventually communicate and work with each other. The moment when we merged all the branches together for the first time (and it worked) was really rewarding.

---

### Future features

If we had more time we would like to have built a private messaging system and to include email notifications to users. There is also scope for an achievements system rewarding users for posting or helping with jobs. Finally we would have really liked to incorporate a payment API so users can transfer money for jobs that require money.
