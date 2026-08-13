app.controller("StudentController", function ($scope, $http) {

    // ============================
    // Model
    // ============================

    $scope.student = {};

    $scope.successMessage = "";
    $scope.errorMessage = "";


    // ============================
    // Register Student
    // ============================

    $scope.registerStudent = function () {

        $http.post("/register", $scope.student)

        .then(function (response) {

            $scope.successMessage = response.data.message;
            $scope.errorMessage = "";

            // Clear form
            $scope.student = {};

        })

        .catch(function (error) {

            $scope.successMessage = "";

            if(error.data && error.data.message){
                $scope.errorMessage = error.data.message;
            }
            else{
                $scope.errorMessage = "Something went wrong!";
            }

        });

    };


    // ============================
    // Reset Form
    // ============================

    $scope.resetForm = function () {

        $scope.student = {};

        $scope.successMessage = "";
        $scope.errorMessage = "";

    };

});