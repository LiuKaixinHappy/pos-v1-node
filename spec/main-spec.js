const main = require('../main/main');
const db = require('../main/datbase');

describe('pos', function () {
    // const main = require('../main/main');
    var allItems;
    var inputs;

    beforeEach(function () {
        allItems = db.loadAllItems;
        inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];
    });

    it('should get item and its count', function () {

        let items_and_count = main.get_items_and_count(inputs);

        var expected ={
            ITEM000001: 5,
            ITEM000003: 2,
            ITEM000005: 3
        };

        expect(items_and_count).toEqual(expected);
    });

    it('should get item info', function () {

        let items_and_count = main.get_items_and_count(inputs);
        let items_info = main.get_items_info(items_and_count);
        var expected =[
            {
                barcode: 'ITEM000001',
                name: '雪碧',
                unit: '瓶',
                price: 3.00,
                count: 5,
                total: 15.00
            },
            {
                barcode: 'ITEM000003',
                name: '荔枝',
                unit: '斤',
                price: 15.00,
                count: 2,
                total: 30.00
            },
            {
                barcode: 'ITEM000005',
                name: '方便面',
                unit: '袋',
                price: 4.50,
                count: 3,
                total: 13.5
            }
        ];

        expect(items_info).toEqual(expected);
    });

    it('should print correct text', function () {

        spyOn(console, 'log');

        main.printInventory(inputs);

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

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
