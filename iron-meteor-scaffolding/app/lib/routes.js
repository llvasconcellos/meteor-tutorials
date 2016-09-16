Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/cars', {
  name: 'carsList',
  controller: 'CarsController',
  action: 'list',
  where: 'client'
});

Router.route('/cars/create', {
  name: 'createCar',
  controller: 'CarsController',
  action: 'create',
  where: 'client'
});
