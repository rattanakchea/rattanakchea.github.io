import { environment } from 'src/environments/environment';

let URL = 'localhost:4300';

if (environment.production) {
  URL = 'rattanak.dev';
}

const ProjectURLs = {
  robinhood: {
    URL: `${URL}/robinhood`,
    image: '/assets/projects-screenshots/robinhood-1.png',
  },
  redbox: {
    demo: `https://rattanakchea.github.io/redbox-clone/`,
    image: '/assets/projects-screenshots/redbox-clone.png',
  },
  cardGames: {
    demo: `https://rattanakchea.github.io/cardgames/`,
    image: 'assets/projects-screenshots/cardgames.png',
  },
};

export const Projects = [
  {
    id: 'robinhood',
    title: 'Robinhood App Clone',
    description: 'Build Robinhood clone with Angular 11',
    dateCreated: '01/01/2021',
    demo: ProjectURLs.robinhood.URL,
    source: '',
    image: ProjectURLs.robinhood.image,
    featured: true,
  },
  {
    id: 'redbox',
    title: 'Redbox Clone',
    description: 'Angular4 to emulate Redbox dvd rental kiosk',
    dateCreated: '10/20/2016',
    demo: ProjectURLs.redbox.demo,
    source: 'https://github.com/rattanakchea/redbox-clone',
    image: ProjectURLs.redbox.image,
    featured: true,
  },
  {
    id: 'card-game',
    slug: 'card-games',
    title: 'Card Games',
    description:
      'This project includes two card games: Blackjack and Sikou. Needless to say, Blackjack is a well-known card game. Sikou is the first Cambodian card game written in JavaScript. The project was written in a custom JavaScript MVC pattern. It was designed to make the code reusable and extensible.',
    dateCreated: '10/20/2016',
    demo: ProjectURLs.cardGames.demo,
    source: 'https://github.com/rattanakchea/cardgames',
    image: ProjectURLs.cardGames.image,
    type: 'JavaScript',
    featured: true,
  },
  {
    id: 'device-emulator',
    slug: 'device-emulator',
    title: 'Device Emulator',
    description:
      'This simple application allow you to change the skin for different devices: Android Phone, iPhone and iPad, and scale proportionally to device width and height. Angular Directive: https://github.com/rattanakchea/device-emulator',
    dateCreated: '7/31/2016',
    demo: 'https://rattanakchea.github.io/device-emulator/',
    source: 'https://github.com/rattanakchea/device-emulator',
    image: 'assets/projects-screenshots/device-emulator.png',
  },
  {
    id: 'monopoly-checker',
    slug: 'monopoly-checker',
    title: 'Monopoly Checker',
    description:
      'This application helps users keeping track of Monopoly tickets and their winning prize. It was built within 3 days. Technology: AngularJS, localStrage, JavaScript.',
    dateCreated: '5/5/2016',
    demo: 'http://rattanakchea.github.io/monopolychecker/',
    source: 'https://github.com/rattanakchea/monopolychecker',
    image: 'assets/images/web/monopolychecker.jpg',
  },
  {
    id: 'mini-trello',
    slug: 'mini-trello',
    title: 'Mini Trello',
    description:
      'Build a todo app in a day with Angular + Firebase with user email authentication. Tech: Angular, Firebase, Unit Testing, Jasmine, Grunt.',
    dateCreated: '2/18/2015',
    demo: 'https://awesometodos.firebaseapp.com',
    image: 'assets/images/web/minitrello.png',
  },
  {
    title: 'Google Keep Clone',
    description:
      'Google Keep Clone provides CRUD operations for note-taking. I used OOP PHP to build a web service supporting GET, POST, PUT, and UPDATE requests. For front end, I used Angular JS for tempting and using $http service to manage requests. The MaterializeCSS framework provides modern, beautiful interface. By separating server, client and database layer, the business logic can be separated from presentation. This allows me to extend applications or build mobile application in the future.',
    demo: 'http://note-taking.atwebpages.com/#',
    source: 'https://github.com/rattanakchea/google-keep-clone',
    image: 'assets/images/web/google-keep-clone.png',
  },
];
