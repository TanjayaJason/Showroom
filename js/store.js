var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $window) {
    $scope.username = localStorage.getItem('username') || 'Guest';
    $scope.cars = [
        {
            name: 'A 200 Sedan Progressive Line',
            description: 'Black',
            image: 'img/store/a200black.jpg',
            price:'IDR 825.000.000'
        },
        {
            name: 'C 200 AVA',
            description: 'Black',
            image: 'img/store/c200av.jpg',
            price:'IDR 995.000.000',
        },
        {
            name: 'E 200 Avantgarde Line Facelift',
            description: 'Black',
            image: 'img/store/e200.jpg',
            price:'IDR 1.140.000.000',
        },
        {
            name: 'E 300 AMG Line Facelift',
            description: 'Black',
            image: 'img/store/e300ril.jpg',
            price:'IDR 1.435.000.000',
        },
        {
            name: 'EQE 350+ Electric Art',
            description: 'Black',
            image: 'img/store/eqe.jpg',
            price:'IDR 2.215.000.000',
        },
        {
            name: 'S 450 L 4MATIC',
            description: 'Black',
            image: 'img/store/sclass.jpg',
            price:'IDR 2.810.000.000',
        }
    ];

    console.log('myCtrl initialized');

    $scope.username = localStorage.getItem('username') || 'Guest';
    console.log('$scope.username:', $scope.username);

    // Additional code for user profile box
    $scope.showProfileBox = false;
    $scope.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    console.log('$scope.isLoggedIn:', $scope.isLoggedIn);

    $scope.toggleProfileBox = function() {
        $scope.showProfileBox = !$scope.showProfileBox;
    
        // Update the display property based on the showProfileBox value
        var profileBox = document.getElementById('profile-box');
        profileBox.style.display = $scope.showProfileBox ? 'block' : 'none';
    };
    
    $scope.loginOrLogout = function() {
        if ($scope.isLoggedIn) {
            // Logout logic
            localStorage.setItem('isLoggedIn', 'false');
            $window.location.href = 'login.html'; // Redirect to login page
        } else {
            // Redirect to login page
            $window.location.href = 'login.html';
        }
    };

    // $scope.toggleprice = function(member) {
    //     member.isOpen = !member.isOpen;
    // };
});