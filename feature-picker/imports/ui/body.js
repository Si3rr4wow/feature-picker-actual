import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  tasks: [
    {
      screenshotURL: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/559756_424951857587150_341858507_n.jpg?_nc_cat=0&oh=e5340c6b09639fe6658ecd499417be7e&oe=5C049A33',
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      voteCount: Math.floor(Math.random() * 100),
      hearted: Math.round(Math.random),
    },
    {
      screenshotURL: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/559756_424951857587150_341858507_n.jpg?_nc_cat=0&oh=e5340c6b09639fe6658ecd499417be7e&oe=5C049A33',
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      voteCount: Math.floor(Math.random() * 100),
      hearted: Math.round(Math.random),
    },
    {
      screenshotURL: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/559756_424951857587150_341858507_n.jpg?_nc_cat=0&oh=e5340c6b09639fe6658ecd499417be7e&oe=5C049A33',
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      voteCount: Math.floor(Math.random() * 100),
      hearted: Math.round(Math.random),
    },
    {
      screenshotURL: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/559756_424951857587150_341858507_n.jpg?_nc_cat=0&oh=e5340c6b09639fe6658ecd499417be7e&oe=5C049A33',
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      voteCount: Math.floor(Math.random() * 100),
      hearted: Math.round(Math.random),
    },
    {
      screenshotURL: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/559756_424951857587150_341858507_n.jpg?_nc_cat=0&oh=e5340c6b09639fe6658ecd499417be7e&oe=5C049A33',
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      voteCount: Math.floor(Math.random() * 100),
      hearted: Math.round(Math.random),
    },
  ],
});