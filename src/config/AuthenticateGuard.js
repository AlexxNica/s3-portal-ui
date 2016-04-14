/** @ngInject */
export default ($rootScope, $state, $auth, $toast, $timeout) => {
  $rootScope.$on('$stateChangeStart', (event, next) => {
    if (next.noAuth) {
      if ($auth.isAuthenticated()) {
        event.preventDefault();
        $state.go('bucket');
      }
      return;
    }

    if (! $auth.isAuthenticated()) {
      event.preventDefault();
      $state.go('auth.signin');
      $toast.show('You should Login!');
    }
  });

  $rootScope.$on('$routeChangeError', ($event, current, previous, rejection) => {
    if (rejection.status === 404) {
      $timeout(() => $state.go('404'), 0);
    }
  });
};
