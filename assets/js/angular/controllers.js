(function() {
    angular.module("thereishope")
        .controller("ctrlSendEmail", ["$scope", "$http", "factoryRegistration", "vcRecaptchaService", function($scope, $http, factoryRegistration, vcRecaptchaService){
            $scope.userDetails = factoryRegistration.userDetails;

            /* ==================================================================
                Form Functions
            ==================================================================*/
            $scope.fnClearForm = function() {
                $scope.userDetails = {
                    "name": null,
                    "shirtSize": "L",
                    "studentAge": null,
                    "studentSchool": null,
                    "email": null,
                    "isToReceiveUpdates": false,
                    "phone": null,
                    "message": null
                } // contact

                // Reset the Send button.
                $('#submit').text("Send");
                $('#submit').removeClass("btn-success");
                $('#submit').removeClass("btn-danger");
                $('#submit').addClass("btn-default");
            }; // clearForm()

            $scope.fnSendForm = function() {
                if(vcRecaptchaService.getResponse() === "") { //if string is empty
                    $("#submit").text("reCaptcha Problem. Please fix.");
                } else {
                    // add response from reCAPTCHA
                    $scope.userDetails.googleResponse = vcRecaptchaService.getResponse();

                    // Put up some sort of loading sign.
                    $('#submit').text('Please Wait...');
                    $('#submit').removeClass('btn-default').addClass('btn-info');
                    $("#submit").prop('disabled', true);

                    // send POST data
                    $http.post("https://www.leemtek.com/forms/thereishope", $scope.userDetails)
                        .then(function successCallback(response) {
                            if(response.data.sent === "yes") {
                                // update submit button to indicate success
                                factoryRegistration.fnSendSuccessDOM();
                            } else {
                                // update submit button to indicate an error
                                factoryRegistration.fnSendErrorDOM();
                            } // if
                        }, function errorCallback(response) {
                            // update submit button to indicate an error
                            factoryRegistration.fnSendErrorDOM();
                        }) // .then
                    ; // $http.post
                } // if
            }; // fnSendForm()
        }]) // .controller("ctrlSendEmail")
    ; // angular.module("thereishope")
})(); // function()
