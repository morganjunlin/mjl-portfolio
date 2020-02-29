module.exports = [
  {
    title: 'Platonic.ly',
    subtitle: 'Event Finder Social Media Application',
    stacks: 'React Native | Express | PostgreSQL',
    description: [
      'Provided users with multiple sign-in options, including Facebook, by utilizing OAuth 2.0 as the authentication protocol',
      'Routed individual user profile pages to be viewed from event listings with React Navigation, as well as dynamically render events the user is attending',
      'Designed relational database schema for complex SQL operations while adhering to RESTful API'
    ],
    images: [
      'https://mjl-portfolio.s3.us-east-2.amazonaws.com/IMG_4693+copy.png'
    ],
    css: 'mvp',
    link: 'https://github.com/morganjunlin/platonic.ly'
  },
  {
    title: 'Grubhub Clone',
    subtitle: 'Legacy UX Clone System Optimization',
    stacks: 'Express | PostgreSQL | MongoDB | AWS EC2 | NGINX | Loader',
    description: [
      'Optimized database to handle queries containing over 10,000,000 records by indexing the database to the data’s lookup ID to allow for faster lookup',
      'Increased throughput queries of 1000 rps to 2000 rps with a latency of 15 ms for 1 minute by horizontally scaling the service to 3 deployed EC2 instances for scalability',
      'Load-balancing traffic using NGINX through continuous testing for stability of heavy incoming user traffic using load tester tools such as Artillery.io and Loader.io'
    ],
    images: [
      'https://mjl-portfolio.s3.us-east-2.amazonaws.com/sdc-2.png'
    ],
    css: 'sdc',
    link: 'https://github.com/morganjunlin/time-sponsored'
  },
  {
    title: 'Nordstrom Clone',
    subtitle: 'Microservice Architecture UX Clone',
    stacks: 'React | Express | MongoDB',
    description: [
      'Recreated functionality of the nav-items by storing individual department into categories and mathematically dividing these categories through CSS widths and floats',
      'Incorporated a micro-service architecture to isolate maintainability of data and error handling',
      'Recreated the search bar by conditionally rendering search results based on keywords drawn from self-generated data within MongoDB and speeding up search times by indexing user inputted search queries'
    ],
    images: [
      'https://mjl-portfolio.s3.us-east-2.amazonaws.com/fec.png'
    ],
    css: 'fec',
    link: 'https://github.com/tormund-and-big-lady/nav-bar-service'
  }
]