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

function get_buy_two_one_free(items_info) {
    let buy_two_one_free_items = db.loadPromotions()
        .filter(item => item['type'] === 'BUY_TWO_GET_ONE_FREE');
    let barcodes = buy_two_one_free_items[0]['barcodes'];
    for (let item of items_info) {
        if (item['barcode'] === barcodes.filter(x => x === item['barcode']).length !== 0) {
            item['reduce'] = item['price'] * Math.floor(item['count'] / 3);
        } else {
            item['reduce'] = 0;
        }
    }
    return items_info;
}

function printInventory(inputs) {
    let items_and_count = get_items_and_count(inputs);
    let items_info = get_items_info(items_and_count);
    let result_after_discount = get_buy_two_one_free(items_info);

    let ticket_manifest = [];
    let ticket_free_item = [];
    let total = 0;
    let reduce = 0;
    for (let item of result_after_discount) {
        ticket_manifest.push('名称：' + item['name']
            + '，数量：' + item['count'] + item['unit']
            + '，单价：' + item['price'].toFixed(2)
            + '(元)，小计：' + (item['total'] - item['reduce']).toFixed(2) + '(元)\n');
        total += item['total'] - item['reduce'];
        if (item['reduce'] !== 0) {
            ticket_free_item.push('名称：' + item['name']
            + '，数量：' + (item['reduce'] / item['price']) + item['unit'] + '\n');
            reduce += item['reduce'];
        }
    }
    let ticket =
        '***<没钱赚商店>购物清单***\n' +
        ticket_manifest.join('') +
        '----------------------\n' +
        '挥泪赠送商品：\n' +
        ticket_free_item.join('') +
        '----------------------\n' +
        '总计：' + total.toFixed(2) + '(元)\n' +
        '节省：' + reduce.toFixed(2) + '(元)\n' +
        '**********************';
    console.log(ticket);
}

module.exports = {get_items_and_count, get_items_info, printInventory, get_buy_two_one_free};
