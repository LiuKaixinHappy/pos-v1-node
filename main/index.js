$(function () {
    let items = loadAllItems();
    let boughtItems = [];
    for (let i = 0; i < items.length; i++) {
        $("#selectable").append('<li class="ui-state-default">' +
            '<img id="item_img_' + (i + 1) +'" class="item_img"' +
            ' src="' + items[i].img + '"/>' +
            '<div class="item_info">' +
            '<div class="item_price" id="item_price_' + (i + 1) +'">¥' +
            items[i].price.toFixed(2) + '/' + items[i].unit +'</div>' +
            '</div>' +
            '</li>');
    }
    $("#selectable").selectable({
        stop: function () {
            $(".ui-selected", this).each(function () {
                let index = $("#selectable li").index(this);
                boughtItems.push(index);
            });
        }
    });

    $("#shopping_cart").click(function () {
        $(window).attr('location', 'html/shoppingcart.html?bought=' + boughtItems.toString());
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