$(function () {
    let items = loadAllItems();
    let boughts;
    let url = document.location.toString();
    let bought_indexs = url.split('?bought=');
    if (bought_indexs[1] !== '') {
        let ids = bought_indexs[1]
            .split(',')
            .map(elem => parseInt(elem))
            .filter(elem => elem !== -1);

        boughts = getBoughtItems(items, ids);
        showBoughts(boughts);
    } else {
        $("#bought_items").text("购物车为空");
    }

    $("#ok_img").bind('click', function () {
        let cal = boughts.map(elem => `${elem.bought.barcode}-${elem.count}`);
        $(window).attr('location', 'calculate.html?cal=' +
            cal.join(','));
    });

    minus = function minus(index) {
        boughts[index].count -= 1;
        $("#" + index).text(boughts[index].count);
    };

    addItem = function addItem(index) {
        boughts[index].count += 1;
        $("#" + index).text(boughts[index].count);
    };

    function showBoughts(boughts) {
        for (let i = 0; i < boughts.length; i++) {
            let bought = boughts[i];
            $("#bought_items").append('<div class="each_bought">' +
                '<img src=' + bought.bought.img + '>' +
                '<div>' +
                '<button class="minus_btn" ' +
                'onclick="minus(' + i + ')"' + '>-</button>' +
                '<p id="' + i + '">' + bought.count + '</p>' +
                '<button class="add_btn"' +
                'onclick="addItem(' + i + ')"' + '>+</button>' +
                '</div>' +
                '</div>');
        }
    }

    function getBoughtItems(allItems, ids) {
        let tmp = ids.reduce((total, current) =>
            (total[current]++ || (total[current] = 1), total), {});
        console.log(tmp);
        return Object.keys(tmp).map(elem => {
            return {'bought': allItems[elem], 'count': tmp[elem]}
        });
    }
});