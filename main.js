$("#commentForm").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        name: {
            required: true,
            minlength: 3
        }
    },
    submitHandler: function () {

        $("button").on("click", function () {
            let popap = $(".popap-message").css("display", "flex");
            popap.show(function () {

                setTimeout(() => {
                    popap.hide(1000);
                    $("button").off('click');
                }, 3000)
            });
        });
    }
});
