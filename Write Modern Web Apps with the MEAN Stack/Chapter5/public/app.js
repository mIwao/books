var app = angular.module('app', [])
app.controller('PostsCtrl', ['$scope', 'PostsSvc', ( $scope, PostsSvc ) => {

  PostsSvc.fetch().success((posts) => {
    $scope.posts = posts
  })

  $scope.addPost = () => {
    if( $scope.postBody ) {
      PostsSvc.create({
        username: 'dickeyxxx',
        body: $scope.postBody
      }).success( (post) => {
        $scope.posts.unshift(post)
        $scope.postBody = null
      })

      // $http.post('/api/posts', {
      //   username: 'dickeyxxx',
      //   body: $scope.postBody
      // })
      // .success( (post) => {
      //   $scope.posts.unshift(post)
      //   $scope.postBody = null
      // })
    }
  }
}])

app.service('PostsSvc',  function($http) {
  this.fetch = () => {
    return $http.get('/api/posts')
  }
  this.create = (post) => {
    return $http.post('/api/posts', post)
  }
})