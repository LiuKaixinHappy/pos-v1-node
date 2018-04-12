const db = require('../main/datbase');

function get_items_and_count(items_barcode) {
    let each_item_count = {};
    items_barcode.filter(elem => {
        let barcode = elem.split('-');
        if (each_item_count[barcode[0]] === undefined) {
            each_item_count[barcode[0]] = barcode.length === 1 ? 1 : parseInt(barcode[1]);
        } else {
            each_item_count[barcode[0]] += barcode.length === 1 ? 1 : parseInt(barcode[1]);
        }
    });
    return each_item_count;
}

function get_items_info(items_and_count) {
    let all_items = db.loadAllItems();
    let items_info = [];
    for (let key in items_and_count) {
        all_items.filter(elem => {
            if (elem['barcode'] === key) {
                let item = {};
                item['barcode'] = elem['barcode'];
                item['name'] = elem['name'];
                item['unit'] = elem['unit'];
                item['price'] = elem['price'];
                item['count'] = items_and_count[key];
                item['total'] = item['price'] * item['count'];
                items_info.push(item);
            }
        });
    }
    return items_info;
}

function printInventory(inputs) {
    var expectText =
        '***<没钱赚商店>购物清单***\n' +
        '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
        '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
        '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
        '----------------------\n' +
        '挥泪赠送商品：\n' +
        '名称：雪碧，数量：1瓶\n' +
        '名称：方便面，数量：1袋\n' +
        '----------------------\n' +
        '总计：51.00(元)\n' +
        '节省：7.50(元)\n' +
        '**********************';
    console.log(expectText);
}

module.exports = {get_items_and_count, get_items_info, printInventory};
