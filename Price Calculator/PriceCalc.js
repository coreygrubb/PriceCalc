"use strict";

$('label').click(function () {
    calculateTotal();
});

function calculateTotal() {
    var total = 0;
    total = parseInt(document.getElementById("select-pages").value);
    $('.option-radio:checked').each(function () {
        total += parseInt($(this).val());
    });
    $('.option-checkbox:checked').each(function () {
        total += parseInt($(this).val());
        $(this).parent().toggleClass('toggle-label-checked');
    });
    $('.total').html('Estimated Cost: $' + total);
}