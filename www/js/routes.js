angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('mainMenu', {
    url: '/page1',
    templateUrl: 'templates/mainMenu.html',
    controller: 'mainMenuCtrl'
  })

  .state('mainMenu2', {
    url: '/page25',
    templateUrl: 'templates/mainMenu2.html',
    controller: 'mainMenu2Ctrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('register', {
    url: '/page3',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })

  .state('page4', {
    url: '/page4',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('onlineExploitations', {
    url: '/page5',
    templateUrl: 'templates/onlineExploitations.html',
    controller: 'onlineExploitationsCtrl'
  })

  .state('internetLoveScam', {
    url: '/page6',
    templateUrl: 'templates/internetLoveScam.html',
    controller: 'internetLoveScamCtrl'
  })

  .state('internetLoveScam2', {
    url: '/page7',
    templateUrl: 'templates/internetLoveScam2.html',
    controller: 'internetLoveScam2Ctrl'
  })

  .state('anonymous', {
    url: '/page8',
    templateUrl: 'templates/anonymous.html',
    controller: 'anonymousCtrl'
  })

  .state('submitYourPersonalStory', {
    url: '/page9',
    templateUrl: 'templates/submitYourPersonalStory.html',
    controller: 'submitYourPersonalStoryCtrl'
  })

  .state('createANewPost', {
    url: '/page14',
    templateUrl: 'templates/createANewPost.html',
    controller: 'createANewPostCtrl'
  })

  .state('forumBoard', {
    url: '/page10',
    templateUrl: 'templates/forumBoard.html',
    controller: 'forumBoardCtrl'
  })

  .state('discussions', {
    url: '/page11',
    templateUrl: 'templates/discussions.html',
    controller: 'discussionsCtrl'
  })

  .state('whatShouldIDo', {
    url: '/page12',
    templateUrl: 'templates/whatShouldIDo.html',
    controller: 'whatShouldIDoCtrl'
  })

  .state('whatShouldIDo2', {
    url: '/page26',
    templateUrl: 'templates/whatShouldIDo2.html',
    controller: 'whatShouldIDo2Ctrl'
  })

  .state('replyTo', {
    url: '/page13',
    templateUrl: 'templates/replyTo.html',
    controller: 'replyToCtrl'
  })

  .state('news', {
    url: '/page15',
    templateUrl: 'templates/news.html',
    controller: 'newsCtrl'
  })

  .state('videos', {
    url: '/page17',
    templateUrl: 'templates/videos.html',
    controller: 'videosCtrl'
  })

  .state('videos2', {
    url: '/page16',
    templateUrl: 'templates/videos2.html',
    controller: 'videos2Ctrl'
  })

  .state('tipsAdvices', {
    url: '/page18',
    templateUrl: 'templates/tipsAdvices.html',
    controller: 'tipsAdvicesCtrl'
  })

  .state('helpLine', {
    url: '/page19',
    templateUrl: 'templates/helpLine.html',
    controller: 'helpLineCtrl'
  })

  .state('tipsCreditSexScam', {
    url: '/page20',
    templateUrl: 'templates/tipsCreditSexScam.html',
    controller: 'tipsCreditSexScamCtrl'
  })

  .state('tipsInternetLove', {
    url: '/page21',
    templateUrl: 'templates/tipsInternetLove.html',
    controller: 'tipsInternetLoveCtrl'
  })

  .state('tipsCyberExtortion', {
    url: '/page22',
    templateUrl: 'templates/tipsCyberExtortion.html',
    controller: 'tipsCyberExtortionCtrl'
  })

  .state('tipsOnlinePurchase', {
    url: '/page23',
    templateUrl: 'templates/tipsOnlinePurchase.html',
    controller: 'tipsOnlinePurchaseCtrl'
  })

  .state('tipsMoneyMule', {
    url: '/page24',
    templateUrl: 'templates/tipsMoneyMule.html',
    controller: 'tipsMoneyMuleCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});