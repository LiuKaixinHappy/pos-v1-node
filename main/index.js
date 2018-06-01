$(function () {
    let boughtItems = [];
    $("#selectable").selectable({
        stop: function () {
            $(".ui-selected", this).each(function () {
                let index = $("#selectable li").index(this);
                boughtItems.push(index);
            });
        }
    });

    $("#shopping_cart").click(function () {
        $(window).attr('location','html/shoppingcart.html?bought=' + boughtItems.toString());
    });
});
// main.printInventory([
//     'ITEM000001',
//     'ITEM000001',
//     'ITEM000001',
//     'ITEM000001',
//     'ITEM000001',
//     'ITEM000003-2',
//     'ITEM000005',
//     'ITEM000005',
//     'ITEM000005'
// ]);