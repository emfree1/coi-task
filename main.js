$("#commentForm").validate();

jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});
var form = $("#commentForm");
form.validate();


$("button").click(function (event) {
    let popap = $(".popap-message").css("display", "flex");
    popap.show(1000, function() {

        setTimeout(() => {
            popap.hide(1000);
        },3000)
    });
    event.preventDefault();
});