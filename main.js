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
        let popap = $(".popap-message").css("display", "flex");
                setTimeout(() => {
                    popap.css('display', 'none')
                }, 3000)
    }
});
