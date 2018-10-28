app.config(function ($routeProvider) {
  $routeProvider.when('/pageOne', {
    templateUrl: 'templates/pageOne.html',
    controller: 'pageOne',
  }).when('/pageTwo', {
    templateUrl: 'templates/pageTwo.html',
    controller: 'pageTwo',
  }).otherwise('/pageOne', {
    templateUrl: 'templates/pageOne.html',
    controller: 'pageOne',
  });
});
