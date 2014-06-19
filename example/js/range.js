$(function() {

    $(".range-selector").append('<span class="range plus">+</span><span class="range minus">-</span>');

    $(".range").on("click", function() {

        var $button = $(this),
            oldValue =  $button.parent().find("input").val(),
            minValue =  $button.parent().find("input").data("range-min"),
            maxValue =  $button.parent().find("input").data("range-max");
            console.log(minValue);
            console.log(maxValue);

        if ($button.text() == "+") {
            if(oldValue < maxValue) {
                var newVal = parseFloat(oldValue) + 1;
            }else {
                newVal = oldValue;
            }
        } else {
            if (oldValue > minValue) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = oldValue;
            }
        }

    $button.parent().find("input").val(newVal);

    });
    // 38 - up 40 - down
    $("input[data-type='range']").keydown(function(e){
        if (e.keyCode == 38) { 
           console.log( "up pressed" );
           $(this).siblings("span.plus").click();
           return false;
        }else if (e.keyCode == 40) { 
            console.log( "down pressed" );
            $(this).siblings("span.minus").click();
           return false;
        }
    });

});