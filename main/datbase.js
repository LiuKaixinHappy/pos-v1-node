function loadAllItems() {
    return [
        {
            barcode: 'ITEM000000',
            img: 'http://img13.360buyimg.com/n1/jfs/t9106/118/1224074555/262373/1fbcae6c/59b630c5N72bc62d6.jpg',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000001',
            img: 'http://img14.360buyimg.com/n1/jfs/t3079/17/6384057111/256293/7cf053b5/58a5725cNc30a12af.jpg',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000002',
            img: 'https://img13.360buyimg.com/n1/jfs/t19228/277/1907092106/288812/9b2f5519/5add9a6dN190931f9.jpg',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            img: 'https://img14.360buyimg.com/n1/jfs/t19540/189/2441815168/108605/f5cc3bfa/5af3d2faNa9dfcf72.jpg',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            img: 'http://img10.360buyimg.com/n1/s450x450_jfs/t3556/262/227030927/183027/e96da1a3/58071793Nae015ad2.jpg',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            img: 'http://img11.360buyimg.com/n1/jfs/t2581/114/2846027310/190955/19385f4/5774eb54N0c8acc74.jpg',
            name: '方便面',
            unit: '袋',
            price: 4.50
        },
        {
            barcode: 'ITEM000006',
            img: 'http://img12.360buyimg.com/n1/jfs/t13237/317/1134597917/468148/f190ec91/5a51d12dN12494919.jpg',
            name: '火龙果',
            unit: '颗',
            price: 39.9
        },
        {
            barcode: 'ITEM000007',
            img: 'http://img10.360buyimg.com/n1/jfs/t4483/305/3103622139/365759/2eefc61d/58f74fd6Ncde96127.jpg',
            name: '樱桃',
            unit: '斤',
            price: 156.00
        }
    ];
}

function loadPromotions() {
    return [
        {
            type: 'BUY_TWO_GET_ONE_FREE',
            barcodes: [
                'ITEM000000',
                'ITEM000001',
                'ITEM000005'
            ]
        }
    ];
}

// module.exports = {loadAllItems, loadPromotions};