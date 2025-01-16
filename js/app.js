var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $window) {
    $scope.username = localStorage.getItem('username') || 'Guest';

    $scope.members = [
        {
            name: 'Tanjaya Jason Winata',
            description: '535220041',
            image: 'img/profile/tanjaya.jpg',
            moreInfo:'Program Studi Teknik Informatika',
            moreInfo2:'Fakultas Teknologi Informasi',
            moreInfo3:'Universitas Tarumanagara'
        },
        {
            name: 'Richard Souwiko',
            description: '535220042',
            image: 'img/profile/richard.jpeg',
            moreInfo:'Program Studi Teknik Informatika',
            moreInfo2:'Fakultas Teknologi Informasi',
            moreInfo3:'Universitas Tarumanagara'
        },
        {
            name: 'Marcia Yanprincessa Utama',
            description: '535220044',
            image: 'img/profile/sasa.jpg',
            moreInfo:'Program Studi Teknik Informatika',
            moreInfo2:'Fakultas Teknologi Informasi',
            moreInfo3:'Universitas Tarumanagara'
        },
        {
            name: 'Jason Sutanto',
            description: '535220052',
            image: 'img/profile/jason.jpg',
            moreInfo:'Program Studi Teknik Informatika',
            moreInfo2:'Fakultas Teknologi Informasi',
            moreInfo3:'Universitas Tarumanagara'
        },
        {
            name: 'Tiara Alviana',
            description: '535220240',
            image: 'img/profile/tiara.jpg',
            moreInfo:'Program Studi Teknik Informatika',
            moreInfo2:'Fakultas Teknologi Informasi',
            moreInfo3:'Universitas Tarumanagara'
        },
        {
            name: 'Aliyah Zahrah',
            description: '535220243',
            image: 'img/profile/aliyah.jpg',
            moreInfo:'Program Studi Teknik Informatika',
            moreInfo2:'Fakultas Teknologi Informasi',
            moreInfo3:'Universitas Tarumanagara'
        }
    ];

    $scope.toggleMoreInfo = function(member) {
        member.isOpen = !member.isOpen;
    };

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

});