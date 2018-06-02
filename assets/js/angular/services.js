(function() {
    angular.module("thereishope")
        .factory("factoryRegistration", [function() {
            var $facRegistration = [];

            $facRegistration.userDetails = {
                "name": null,
                "shirtSize": "L",
                "studentAge": null,
                "studentSchool": null,
                "email": null,
                "isToReceiveUpdates": false,
                "phone": null,
                "message": null
            }; // userDetails()

            $facRegistration.fnSendSuccessDOM = function() {
                // update submit button to indicate success
                $('#submit').text('Email Sent');
                $('#submit').removeClass('btn-info').addClass('btn-success');
                $("#submit").prop('disabled', true);
            }; // fnSendSuccessDOM

            $facRegistration.fnSendErrorDOM = function() {
                // update submit button to indicate an error
                $('#submit').text('Error Sending');
                $('#submit').removeClass('btn-info').addClass('btn-danger');
            }; // fnSendErrorDOM()

            return $facRegistration;
        }]) // .factory("factoryRegistration")
    ; // angular.module("thereishope")
})(); // function()
