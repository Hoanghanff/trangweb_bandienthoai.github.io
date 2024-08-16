var $ = document.querySelector.bind(document);
var $$ = document.querySelector.bind(document);

function toast({
    title,
    message,
    type
}) {
    const toast = $('#toast');
    const icons = {
        success: 'fa-circle-check',
        error: 'fa-circle-exclamation'
    }
    const icon = icons[type];
    toast.innerHTML = `
        <div class="toast toast--${type}">
            <div class="toast__header color--${type}">
                <i class="fa-solid ${icon}"></i>
            </div>

            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__message">${message}</p>
            </div>
        </div>
    `
    setTimeout(function () {
        if ($('.toast')) {
            $('.toast').remove();
        }
    }, 2000);
}
let success = {
    title: 'Thành Công',
    message: 'Đã Thêm Vào Giỏ Hàng',
    type: 'success'
}


// list all product s-phone 
var cellPhone = {

    // list product iphone
    iphones: [
        {
            "id": 0,
            "image": './css/img/ip1.png',
            "name": 'iPhone 14 Pro 256GB | Chính hãng VN/A',
            "priceOld": '34.990.000',
            "priceNew": '33.490.000',
            "discount": 4,
            "decribe": 'Giảm thêm đến 2 triệu khi thanh toán qua ví/ngân hàng Moca, VNPAY, Nam Á, STANDARD CHATERED,...',
            "countBuy": 200
        },
        {
            "id": 1,
            "image": './css/img/ip2.jpg',
            "name": 'iPhone 13 Pro Max 128GB | Chính hãng VN/A',
            "priceOld": '34.900.000',
            "priceNew": '27.490.000',
            "discount": 21,
            "decribe": 'Thu cũ lên đời - Trợ giá 1 triệu',
            "countBuy": 200
        },
        {
            "id": 2,
            "image": './css/img/ip3.jpg',
            "name": 'iPhone 11 64GB | Chính hãng VN/A',
            "priceOld": '23.990.000',
            "priceNew": '22.990.000',
            "discount": 8,
            "decribe": 'Giảm thêm đến 2 triệu khi thanh toán qua ví/ngân hàng Moca, VNPAY, Nam Á, STANDARD CHATERED,...',
            "countBuy": 200
        },
        {
            "id": 3,
            "image": './css/img/ip4.jpg',
            "name": 'iPhone 12 Pro Max 128GB I Chính hãng VN/A ',
            "priceOld": '28.990.000',
            "priceNew": '25.590.000',
            "discount": 12,
            "decribe": '[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và ',
            "countBuy": 200
        },
        {
            "id": 4,
            "image": './css/img/ip5.jpg',
            "name": 'iPhone 14 Plus 128GB | Chính hãng VN/A',
            "priceOld": '27.990.000',
            "priceNew": '25.990.000',
            "discount": 7,
            "decribe": 'Giảm thêm đến 2 triệu khi thanh toán qua ví/ngân hàng Moca, VNPAY, Nam Á, STANDARD CHATERED,...',
            "countBuy": 200
        },
        {
            "id": 5,
            "image": './css/img/ip6.png',
            "name": 'iPhone 11 64GB | Chính hãng VN/A',
            "priceOld": '14.990.000',
            "priceNew": '11.490.000',
            "discount": 23,
            "decribe": '[HOT] Thu cũ lên đời giá cao - thủ tục nhanh - Trợ giá lên tới 1.000.000',
            "countBuy": 200
        },
        {
            "id": 6,
            "image": './css/img/ip6.png',
            "name": 'iPhone 11 64GB | Chính hãng VN/A',
            "priceOld": '14.990.000',
            "priceNew": '11.490.000',
            "discount": 23,
            "decribe": '[HOT] Thu cũ lên đời giá cao - thủ tục nhanh - Trợ giá lên tới 1.000.000',
            "countBuy": 200
        },
        {
            "id": 7,
            "image": './css/img/ip6.png',
            "name": 'iPhone 11 64GB | Chính hãng VN/A',
            "priceOld": '14.990.000',
            "priceNew": '11.490.000',
            "discount": 23,
            "decribe": '[HOT] ',
            "countBuy": 100
        },
        {
            "id": 8,
            "image": './css/img/ip6.png',
            "name": 'iPhone 11 64GB | Chính hãng VN/A',
            "priceOld": '14.990.000',
            "priceNew": '11.490.000',
            "discount": 23,
            "decribe": '[HOT] ',
            "countBuy": 100
        },
        {
            "id": 9,
            "image": './css/img/ip6.png',
            "name": 'iPhone 11 64GB | Chính hãng VN/A',
            "priceOld": '14.990.000',
            "priceNew": '11.490.000',
            "discount": 23,
            "decribe": '[HOT] ',
            "countBuy": 100
        }
    ],

    // list product samsung
    samsungs: [
        {
            "id": 0,
            "image": './css/img/samsung1.jpg',
            "name": 'Samsung Galaxy Z Fold4',
            "priceOld": '40.990.000',
            "priceNew": '36.990.000',
            "discount": 11,
            "decribe": 'Thu cũ đổi mới giảm ngay 5.000.000đ và 2km khác',
            "countBuy": 100
        },
        {
            "id": 1,
            "image": './css/img/samsung2.jpg',
            "name": 'Samsung Galaxy Z Flip4 128GB',
            "priceOld": '23.990.000',
            "priceNew": '20.590.000',
            "discount": 14,
            "decribe": 'Thu cũ đổi mới giảm ngay 5.000.000đ và 2km khác',
            "countBuy": 200
        },
        {
            "id": 2,
            "image": './css/img/samsung3.jpg',
            "name": 'Samsung Galaxy S22 Ultra (8GB - 128GB)',
            "priceOld": "30.990.000",
            "priceNew": '24.990.000',
            "discount": 19,
            "decribe": 'Dịch vụ phòng chờ hạng thương gia tại sân bay',
            "countBuy": 200
        },
        {
            "id": 3,
            "image": './css/img/samsung4.jpg',
            "name": 'Samsung Galaxy A53 (5G)',
            "priceOld": '9.990.000',
            "priceNew": '9.450.000',
            "discount": 5,
            "decribe": 'Thu cũ đổi mới - Trợ giá đến 300.000đ',
            "countBuy": 200
        },
        {
            "id": 4,
            "image": './css/img/samsung5.jpg',
            "name": 'Samsung Galaxy A73 (5G) 256GB',
            "priceOld": '14.990.000',
            "priceNew": '11.490.000',
            "discount": 23,
            "decribe": 'Thu cũ đổi mới - Trợ giá đến 300.000đ',
            "countBuy": 200
        },
        {
            "id": 5,
            "image": './css/img/samsung6.jpg',
            "name": 'Samsung Galaxy Z Fold3 5G',
            "priceOld": '41.990.000',
            "priceNew": '26.990.000',
            "discount": 36,
            "decribe": 'Tặng ngay gói Samsung Care+ 6 tháng',
            "countBuy": 200
        },
        {
            "id": 6,
            "image": './css/img/samsung7.jpg',
            "name": 'Samsung Galaxy Note 20 Ultra 5G',
            "priceOld": '32.990.000',
            "priceNew": '18.990.000',
            "discount": 42,
            "decribe": '[HOT] Thu cũ lên đời giá cao - thủ tục nhanh - Trợ giá lên tới 1.000.000',
            "countBuy": 250
        },
        {
            "id": 7,
            "image": './css/img/samsung7.jpg',
            "name": 'Samsung Galaxy Z Flip3 5G',
            "priceOld": '24.990.000',
            "priceNew": '14.990.000',
            "discount": 40,
            "decribe": 'Gói dịch vụ ưu tiên cao cấp và phòng chờ hạng thương gia',
            "countBuy": 50
        },
        {
            "id": 8,
            "image": './css/img/samsung7.jpg',
            "name": 'Samsung Galaxy Z Flip3 5G',
            "priceOld": '24.990.000',
            "priceNew": '14.990.000',
            "discount": 40,
            "decribe": 'Gói dịch vụ ưu tiên cao cấp và phòng chờ hạng thương gia',
            "countBuy": 50
        },
        {
            "id": 9,
            "image": './css/img/samsung7.jpg',
            "name": 'Samsung Galaxy Z Flip3 5G',
            "priceOld": '24.990.000',
            "priceNew": '14.990.000',
            "discount": 40,
            "decribe": 'Gói dịch vụ ưu tiên cao cấp và phòng chờ hạng thương gia',
            "countBuy": 50
        }
    ],

    // list product oppos
    oppos: [
        {
            "id": 0,
            "image": './css/img/oppo1.png',
            "name": 'OPPO Reno8',
            "priceOld": '8.990.000',
            "priceNew": '8.690.000',
            "discount": 3,
            "decribe": 'GIẢM 300K KHI MUA KÈM GÓI BẢO HÀNH VIP 1 ĐỔI 1 12 THÁNG và 2km khác',
            "countBuy": 210
        },
        {
            "id": 1,
            "image": './css/img/oppo2.jpg',
            "name": 'OPPO Reno8 Pro 5G 12GB 256GB',
            "priceOld": '',
            "priceNew": '18.990.000',
            "discount": 0,
            "decribe": 'Tặng thêm dịch vụ bảo hành Vip 12 tháng 1 đổi 1',
            "countBuy": 200
        },
        {
            "id": 2,
            "image": './css/img/oppo3.jpg',
            "name": 'OPPO A57',
            "priceOld": '4.490.000',
            "priceNew": '3.990.000',
            "discount": 11,
            "decribe": '',
            "countBuy": 200
        },
        {
            "id": 3,
            "image": './css/img/oppo4.jpg',
            "name": 'OPPO Reno6 Z 5G',
            "priceOld": '9.490.000',
            "priceNew": '6.590.000',
            "discount": 31,
            "decribe": 'Thu cũ lên đời - Trợ giá 1 triệu',
            "countBuy": 20
        },
        {
            "id": 4,
            "image": './css/img/oppo1.png',
            "name": 'iPhone 11 64GB | Chính hãng VN/A',
            "priceOld": '14.990.000',
            "priceNew": '11.490.000',
            "discount": 23,
            "decribe": '[HOT] Thu cũ lên đời giá cao - thủ tục nhanh - Trợ giá lên tới 1.000.000',
            "countBuy": 200
        },
        {
            "id": 5,
            "image": './css/img/oppo1.png',
            "name": 'iPhone 11 64GB | Chính hãng VN/A',
            "priceOld": '14.990.000',
            "priceNew": '11.490.000',
            "discount": 23,
            "decribe": '[HOT] Thu cũ lên đời giá cao - thủ tục nhanh - Trợ giá lên tới 1.000.000',
            "countBuy": 200
        },
        {
            "id": 6,
            "image": './css/img/oppo1.png',
            "name": 'iPhone 11 64GB | Chính hãng VN/A',
            "priceOld": '14.990.000',
            "priceNew": '11.490.000',
            "discount": 23,
            "decribe": '[HOT] Thu cũ lên đời giá cao - thủ tục nhanh - Trợ giá lên tới 1.000.000',
            "countBuy": 200
        },
        {
            "id": 7,
            "image": './css/img/oppo1.png',
            "name": 'iPhone 11 64GB | Chính hãng VN/A',
            "priceOld": '14.990.000',
            "priceNew": '11.490.000',
            "discount": 23,
            "decribe": '[HOT] Thu cũ lên đời giá cao - thủ tục nhanh - Trợ giá lên tới 1.000.000',
            "countBuy": 200
        },
        {
            "id": 8,
            "image": './css/img/oppo1.png',
            "name": 'iPhone 11 64GB | Chính hãng VN/A',
            "priceOld": '14.990.000',
            "priceNew": '11490.000',
            "discount": 23,
            "decribe": '[HOT] Thu cũ lên đời giá cao - thủ tục nhanh - Trợ giá lên tới 1.000.000',
            "countBuy": 200
        },
        {
            "id": 9,
            "image": './css/img/oppo1.png',
            "name": 'iPhone 11 64GB | Chính hãng VN/A',
            "priceOld": '14990000',
            "priceNew": '11490000',
            "discount": 23,
            "decribe": '[HOT] Thu cũ lên đời giá cao - thủ tục nhanh - Trợ giá lên tới 1.000.000',
            "countBuy": 200
        }
    ],
    // list product tablets
    tablets: [
        {
            "id": 0,
            "image": './css/img/tablet1-removebg-preview.png',
            "name": 'iPad 10.2 2021 WiFi 64GB | Chính hãng Apple Việt Nam',
            "priceOld": ' 10.990.000',
            "priceNew": '8.190.000',
            "discount": 25,
            "decribe": 'Phần mềm bản quyền Office đi kèm 1 TB Onedrive chỉ từ 990,000 và  2km khác',
            "countBuy": 210
        },
        {
            "id": 1,
            "image": './css/img/tablet2.jpg',
            "name": 'iPad Air 5 (2022) 64GB I Chính hãng Apple Việt Nam',
            "priceOld": '16.990.000',
            "priceNew": '15.490.000',
            "discount": 0,
            "decribe": 'Phần mềm bản quyền Office đi kèm 1 TB Onedrive chỉ từ 990,000 và 1km khac',
            "countBuy": 200
        },
        {
            "id": 2,
            "image": './css/img/tablet3.jpg',
            "name": 'Apple iPad mini 6 WiFi 64GB | Chính hãng Apple Việt Nam',
            "priceOld": '14.990.000',
            "priceNew": ' 13.390.000 ',
            "discount": 11,
            "decribe": 'Phần mềm bản quyền Office đi kèm 1 TB Onedrive chỉ từ 990,000 và 1km khac',
            "countBuy": 200
        },
        {
            "id": 3,
            "image": './css/img/tablet4.jpg',
            "name": 'Apple iPad Pro 11 2021 M1 WiFi 128GB I Chính hãng Apple Việt Nam ',
            "priceOld": '23.990.000 ',
            "priceNew": '19.490.000',
            "discount": 31,
            "decribe": 'Thu cũ lên đời - Trợ giá 1 triệu và 2km khac',
            "countBuy": 20
        },
        {
            "id": 4,
            "image": './css/img/tablet5.jpg',
            "name": 'Samsung Galaxy Tab S8 Ultra 5G',
            "priceOld": '30.990.000',
            "priceNew": '25.990.000',
            "discount": 16,
            "decribe": 'Giảm ngay 3.000.000đ khi tham gia thu cũ đổi mới và 4km khac',
            "countBuy": 200
        },
        {
            "id": 5,
            "image": './css/img/tablet6.jpg',
            "name": 'Xiaomi Pad 5',
            "priceOld": '8.990.000 ',
            "priceNew": '7.990.000 ',
            "discount": 11,
            "decribe": 'Thu cũ đổi mới - Trợ giá đến 300.000đ ',
            "countBuy": 200
        },
        {
            "id": 6,
            "image": './css/img/tablet7.jpg',
            "name": 'iPad Air 10.9 2020 4G 256GB I Chính hãng Apple Việt Nam ',
            "priceOld": '23.990.000',
            "priceNew": '18.590.000',
            "discount": 23,
            "decribe": '[HOT] Thu cũ lên đời giá cao - thủ tục nhanh - Trợ giá lên tới 1.000.000',
            "countBuy": 200
        },
        {
            "id": 7,
            "image": './css/img/table8.jpg',
            "name": 'Redmi Pad 3GB 64GB',
            "priceOld": '6.290.000 ',
            "priceNew": '5.790.000',
            "discount": 8,
            "decribe": '',
            "countBuy": 200
        },
        {
            "id": 8,
            "image": './css/img/tablet9.png',
            "name": 'iPad 10.9 inch 2022 Wifi 64GB',
            "priceOld": '',
            "priceNew": '7.490.000',
            "discount": 23,
            "decribe": '[HOT] Thu cũ lên đời giá cao - thủ tục nhanh - Trợ giá lên tới 1.000.000',
            "countBuy": 200
        },
        {
            "id": 9,
            "image": './css/img/tablet10.png',
            "name": 'Máy Tính Bảng Huawei Matepad 2022 4GB 128GB',
            "priceOld": '7.490.000',
            "priceNew": '6.490.000 ',
            "discount": 13,
            "decribe": '',
            "countBuy": 200
        }
    ],
    // líst product laptops
    laptops: [
        {
            "id": 0,
            "image": './css/img/laptop1.png',
            "name": 'Apple Macbook Air M2 2022 8GB 256GB I Chính hãng Apple Việt Nam',
            "priceOld": '32.990.000',
            "priceNew": '28.990.000',
            "discount": 12,
            "decribe": 'Giảm đến 2 triệu khi thanh toán qua thẻ tín dụng VIB, Sacombank, VP Bank và  1km khác ',
        },
        {
            "id": 1,
            "image": './css/img/laptop2.png',
            "name": 'Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt Nam ',
            "priceOld": '28.990.000',
            "priceNew": '23.190.000',
            "discount": '20',
            "decribe": 'Nhập mã CPSONL500 khi thanh toán VNPAY qua website hoặc CPS500 qua QR Offline tại cửa hàng để giảm thêm 500k khi mua sản phẩm Apple từ 17 triệu và 3km khac',
        },
        {
            "id": 2,
            "image": './css/img/laptop3.png',
            "name": 'iMac 24 2021 M1 7GPU 8GB 256GB I Chính hãng Apple Việt Nam',
            "priceOld": '34.990.000 ',
            "priceNew": '27.290.000',
            "discount": 22,
            "decribe": 'Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k và 2km khac',
        },
        {
            "id": 3,
            "image": './css/img/laptop4.png',
            "name": 'Laptop Asus Gaming Rog Strix G15 G513IH HN015W',
            "priceOld": '23.990.000 ',
            "priceNew": '18.690.000',
            "discount": 27,
            "decribe": 'Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k và 1km khac'
        },
        {
            "id": 4,
            "image": './css/img/laptop5.png',
            "name": 'Laptop Gaming Acer Nitro 5 AN515 45 R6EV',
            "priceOld": '23.990.000',
            "priceNew": '18.990.000',
            "discount": 21,
            "decribe": 'Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k và 1km khac',
        },
        {
            "id": 5,
            "image": './css/img/laptop6.png',
            "name": 'Apple Macbook Pro 13 M2 2022  8GB 256GB I Chính hãng Apple Việt Nam',
            "priceOld": '35.990.000',
            "priceNew": '31.590.000',
            "discount": 12,
            "decribe": 'Nhập mã CPSONL500 khi thanh toán VNPAY qua website hoặc CPS500 qua QR Offline tại cửa hàng để giảm thêm 500k khi mua sản phẩm Apple từ 17 triệu và 1km khac',
        },
        {
            "id": 6,
            "image": './css/img/laptop7.png',
            "name": 'Apple MacBook Pro 13 Touch Bar M1 256GB 2020 I Chính hãng Apple Việt Nam',
            "priceOld": '35.990.000 ',
            "priceNew": '28.190.000 ',
            "discount": 22,
            "decribe": 'Nhập mã CPSONL500 khi thanh toán VNPAY qua website hoặc CPS500 qua QR Offline tại cửa hàng để giảm thêm 500k khi mua sản phẩm Apple từ 17 triệu và 1km khac',
        },
        {
            "id": 7,
            "image": './css/img/laptop8.jpg',
            "name": 'Apple Mac mini M1 256GB 2020 I Chính hãng Apple Việt Nam ',
            "priceOld": '19.990.000 ',
            "priceNew": '17.990.000 ',
            "discount": 10,
            "decribe": 'Thu cũ đổi mới - Trợ giá 500.000đ và 2km khac',
        },
        {
            "id": 8,
            "image": './css/img/laptop9.png',
            "name": 'Macbook Pro 14 inch 2021 | Chính hãng Apple Việt Nam',
            "priceOld": '52.990.000',
            "priceNew": '46.990.000 ',
            "discount": 23,
            "decribe": 'Nhập mã CPSONL500 khi thanh toán VNPAY qua website hoặc CPS500 qua QR Offline tại cửa hàng để giảm thêm 500k khi mua sản phẩm Apple từ 17 triệu và 1km khac',
        },
        {
            "id": 9,
            "image": './css/img/laptop10.png',
            "name": 'Macbook Pro 16 inch 2021 10 CPU - 16 GPU 32GB 512GB 2021 | Chính hãng Apple Việt Nam',
            "priceOld": '75.990.000',
            "priceNew": '68.990.000',
            "discount": 9,
            "decribe": 'Nhập mã CPSONL500 khi thanh toán VNPAY qua website hoặc CPS500 qua QR Offline tại cửa hàng để giảm thêm 500k khi mua sản phẩm Apple từ 17 triệu và  2km khac',
        }

    ],


};
var app = {
    renderProductIphone: function () {
        let listIphones = '';
        listIphones = cellPhone.iphones.map((iphone, index) => {
            return `
         <div class="product-item ">
            <div class="product-discount">${iphone.discount}%</div>
            <a href="#" class="product-link">
                <img src="${iphone.image}" alt="" class="product-img">
                <div>
                    <h2 class="product-heading">${iphone.name}</h2>

                    <div class="product-price">
                        <p class="price-new">${iphone.priceNew}đ</p>
                        <p class="price-old">${iphone.priceOld}đ</p>
                    </div>
                </div>
                <div class="product-describe">
                    <p class="decribe-text">${iphone.decribe}</p>
                </div>
            </a>
            <div class="star yellow">
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
                <p class="count-buy">${iphone.countBuy}</p>
            </div>
            <div class="product-heart">
                <div class="heart">
                    <i class=" fa-solid fa-heart"></i>
                    <p class="text-heart">Yêu Thích</p>
                </div>
                <div class="product-animation">
                    <button class="product-add" onclick="pushBagiphone(${iphone.id})">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <p class="add-now">Giỏ Hàng</p>
                    </button>
                </div>

            </div>
        </div>
        `
        });
        $('.js-iphone').innerHTML = listIphones.join(' ');
    },
    renderProductSamsung: function () {
        let listSamsungs = '';
        listSamsungs = cellPhone.samsungs.map((samgsung, index) => {
            return `
         <div class="product-item">
            <div class="product-discount ">${samgsung.discount}%</div>
            <a href="#" class="product-link">
                <img src="${samgsung.image}" alt="" class="product-img">
                <div>
                    <h2 class="product-heading">${samgsung.name}</h2>

                    <div class="product-price">
                        <p class="price-new">${samgsung.priceNew}đ</p>
                        <p class="price-old">${samgsung.priceOld}đ</p>
                    </div>
                </div>
                <div class="product-describe">
                    <p class="decribe-text">${samgsung.decribe}</p>
                </div>
            </a>
            <div class="star yellow">
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
                <p class="count-buy">${samgsung.countBuy}</p>
            </div>
            <div class="product-heart">
                <div class="heart">
                    <i class="fa-solid fa-heart"></i>
                    <p class="text-heart">Yêu Thích</p>
                </div>
                <div class="product-animation">
                    <div class="product-add" onclick="pushBagsamsung(${samgsung.id})">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <p class="add-now">Giỏ Hàng </p>
                    </div>
                </div>

            </div>
        </div>
        `
        });
        $('.js-samsung').innerHTML = listSamsungs.join('');
    },
    renderProductOppo: function () {
        let listOppos = '';
        listOppos = cellPhone.oppos.map((oppo, index) => {
            return `
               <div class="product-item">
                    <div class="product-discount">${oppo.discount}%</div>
                    <a href="#" class="product-link">
                        <img src="${oppo.image}" alt="" class="product-img">
                        <div>
                            <h2 class="product-heading">${oppo.name}</h2>

                            <div class="product-price">
                                <p class="price-new">${oppo.priceNew}đ</p>
                                <p class="price-old">${oppo.priceOld}đ</p>
                            </div>
                        </div>
                        <div class="product-describe">
                            <p class="decribe-text">${oppo.decribe}</p>
                        </div>
                    </a>
                    <div class="star yellow">
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <p class="count-buy">${oppo.countBuy}</p>
                    </div>
                    <div class="product-heart">
                        <div class="heart">
                            <i class="fa-solid fa-heart"></i>
                            <p class="text-heart">Yêu Thích</p>
                        </div>
                        <div class="product-animation">
                            <div class="product-add" onclick="pushBagoppo(${oppo.id})">
                                <i class="fa-solid fa-bag-shopping"></i>
                                <p class="add-now">Giỏ Hàng </p>
                            </div>
                        </div>

                    </div>
                </div>
                `
        });
        $('.js-oppo').innerHTML = listOppos.join('');
    },
    renderProductTablet: function () {
        let listTablet = '';
        listTablet = cellPhone.tablets.map((tablet, index) => {
            return `
            <div class="tablet-item col l-2-4 m-4 c-6 animationTop delay-0${index}">
                <div class="box-shadow">
                    <div class="product-discount tablet">${tablet.discount}%</div>
                    <a href="#" class="tablet-link">
                    <img src="${tablet.image}" alt="" class="product-img tablet-img">
                    <div>
                        <h2 class="product-heading tablet">${tablet.name}</h2>
    
                        <div class="product-price tablet">
                            <p class="price-new ">${tablet.priceNew}đ</p>
                            <p class="price-old">${tablet.priceOld}đ</p>
                        </div>
                    </div>
                    <div class="product-describe tablet">
                        <p class="decribe-text">${tablet.decribe}</p>
                    </div>
                </a>
                <div class="star yellow tablet">
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                </div>
                <div class="product-heart tablet">
                    <div class="heart">
                        <i class=" fa-solid fa-heart"></i>
                        <p class="text-heart">Yêu Thích</p>
                    </div>

                    <div class="product-animation">
                    <button class="product-add" onclick="pushBagTablet(${tablet.id})">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <p class="add-now">Giỏ Hàng</p>
                    </button>
                </div>
                
                </div>
              </div>
               
            </div>
            `
        });

        $('.js-tablet').innerHTML = listTablet.join('')
    },
    renderProductLaptop: function () {
        let listLaptops = '';
        listLaptops = cellPhone.laptops.map((laptop, index) => {
            return `
            <div class="tablet-item col l-2-4 m-4 c-6 animationTop delay-0${index}">
            <div class="box-shadow">
               <div class="product-discount tablet">${laptop.discount}%</div>
                <a href="#" class="tablet-link">
                    <img src="${laptop.image}" alt="" class="product-img tablet-img">
                    <div>
                        <h2 class="product-heading tablet">${laptop.name}</h2>
    
                        <div class="product-price tablet">
                            <p class="price-new ">${laptop.priceNew}đ</p>
                            <p class="price-old">${laptop.priceOld}đ</p>
                        </div>
                    </div>
                    <div class="product-describe tablet">
                        <p class="decribe-text">${laptop.decribe}</p>
                    </div>
                </a>
                <div class="star yellow tablet">
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                </div>
                <div class="product-heart tablet">
                    <div class="heart">
                        <i class=" fa-solid fa-heart"></i>
                        <p class="text-heart">Yêu Thích</p>
                    </div>

                    <div class="product-animation">
                    <button class="product-add" onclick="pushBagLaptop(${laptop.id})">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <p class="add-now">Giỏ Hàng</p>
                    </button>
                </div>
                </div>
              </div>
            </div>
            `
        });

        $('.js-laptop').innerHTML = listLaptops.join('')
    },
    renderListiPhone: function(){
        let listTablet = '';
        listTablet = cellPhone.iphones.map((tablet, index) => {
            return `
            <div class="tablet-item col l-2-4 m-4 c-6 animationTop delay-0${index}">
                <div class="box-shadow">
                    <div class="product-discount tablet">${tablet.discount}%</div>
                    <a href="#" class="tablet-link">
                    <img src="${tablet.image}" alt="" class="product-img tablet-img">
                    <div>
                        <h2 class="product-heading tablet">${tablet.name}</h2>
    
                        <div class="product-price tablet">
                            <p class="price-new ">${tablet.priceNew}đ</p>
                            <p class="price-old">${tablet.priceOld}đ</p>
                        </div>
                    </div>
                    <div class="product-describe tablet">
                        <p class="decribe-text">${tablet.decribe}</p>
                    </div>
                </a>
                <div class="star yellow tablet">
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                </div>
                <div class="product-heart tablet">
                    <div class="heart">
                        <i class=" fa-solid fa-heart"></i>
                        <p class="text-heart">Yêu Thích</p>
                    </div>

                    <div class="product-animation">
                    <button class="product-add" onclick="pushBagiphone(${tablet.id})">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <p class="add-now">Giỏ Hàng</p>
                    </button>
                </div>
                
                </div>
              </div>
               
            </div>
            `
        });

        $('.js-list-iphone').innerHTML = listTablet.join('')
    },

    renderListSamSung: function(){
        let listTablet = '';
        listTablet = cellPhone.samsungs.map((tablet , index) => {
            return `
            <div class="tablet-item col l-2-4 m-4 c-6 animationTop delay-0${index}">
                <div class="box-shadow">
                    <div class="product-discount tablet">${tablet.discount}%</div>
                    <a href="#" class="tablet-link">
                    <img src="${tablet.image}" alt="" class="product-img tablet-img">
                    <div>
                        <h2 class="product-heading tablet">${tablet.name}</h2>
    
                        <div class="product-price tablet">
                            <p class="price-new ">${tablet.priceNew}đ</p>
                            <p class="price-old">${tablet.priceOld}đ</p>
                        </div>
                    </div>
                    <div class="product-describe tablet">
                        <p class="decribe-text">${tablet.decribe}</p>
                    </div>
                </a>
                <div class="star yellow tablet">
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                </div>
                <div class="product-heart tablet">
                    <div class="heart">
                        <i class=" fa-solid fa-heart"></i>
                        <p class="text-heart">Yêu Thích</p>
                    </div>

                    <div class="product-animation">
                    <button class="product-add" onclick="pushBagsamsung(${tablet.id})">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <p class="add-now">Giỏ Hàng</p>
                    </button>
                </div>
                
                </div>
              </div>
               
            </div>
            `
        });

        $('.js-list-samsung').innerHTML = listTablet.join('')
    },

    renderListOppo: function(){
        let listTablet = '';
        listTablet = cellPhone.oppos.map((tablet, index) => {
            return `
            <div class="tablet-item col l-2-4 m-4 c-6 animationTop delay-0${index}">
                <div class="box-shadow">
                    <div class="product-discount tablet">${tablet.discount}%</div>
                    <a href="#" class="tablet-link">
                    <img src="${tablet.image}" alt="" class="product-img tablet-img">
                    <div>
                        <h2 class="product-heading tablet">${tablet.name}</h2>
    
                        <div class="product-price tablet">
                            <p class="price-new ">${tablet.priceNew}đ</p>
                            <p class="price-old">${tablet.priceOld}đ</p>
                        </div>
                    </div>
                    <div class="product-describe tablet">
                        <p class="decribe-text">${tablet.decribe}</p>
                    </div>
                </a>
                <div class="star yellow tablet">
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                </div>
                <div class="product-heart tablet">
                    <div class="heart">
                        <i class=" fa-solid fa-heart"></i>
                        <p class="text-heart">Yêu Thích</p>
                    </div>

                    <div class="product-animation">
                    <button class="product-add" onclick="pushBagoppo(${tablet.id})">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <p class="add-now">Giỏ Hàng</p>
                    </button>
                </div>
                
                </div>
              </div>
               
            </div>
            `
        });

        $('.js-list-oppo').innerHTML = listTablet.join('')
    },

    // add cart product 
    arrCellPhones: arrCellPhone = [], // constructer array null
    // add product iphone in cart
    pushBagiphones: pushBagiphone = function (id) {
        arrCellPhone.unshift(`
        <li class="bag-product-item delete-ip-${id}" >
            <div class="heading-img">
                <img class="heading-img__image" src="${cellPhone.iphones[id].image}" alt="">
            </div>
            <div class="bag-name-product">
                <h4>${cellPhone.iphones[id].name}</h4>
                <span class="bag-price-old">${cellPhone.iphones[id].priceOld} đ</span>
                <span class="bag-price-new">${cellPhone.iphones[id].priceNew} đ</span>
            </div>
            <div class="delete-bag-product" onclick="deleteCartIphone(${cellPhone.iphones[id].id})">
                <i class="fa-solid fa-trash"></i>
            </div>
        </li>
    `);
        $('.list-bag-product').innerHTML = arrCellPhone.join('');
        $('.amount-cart').innerHTML = `<span class="count-bag">${arrCellPhone.length}</span>`;
        toast(success);
    },
    // add product samsung in cart
    pushBagsamsungs: pushBagsamsung = function (id) {
        arrCellPhone.unshift(`
        <li class="bag-product-item delete-ss-${id}">
            <div class="heading-img">
                <img class="heading-img__image" src="${cellPhone.samsungs[id].image}" alt="">
            </div>
            <div class="bag-name-product">
                <h4>${cellPhone.samsungs[id].name}</h4>
                <span class="bag-price-old">${cellPhone.samsungs[id].priceOld} đ</span>
                <span class="bag-price-new">${cellPhone.samsungs[id].priceNew} đ</span>
            </div>
            <div class="delete-bag-product" onclick="deleteCartSamsung(${cellPhone.samsungs[id].id})">
                <i class="fa-solid fa-trash"></i>
            </div>
        </li>
    `);
        $('.list-bag-product').innerHTML = arrCellPhone.join('');
        $('.amount-cart').innerHTML = `<span class="count-bag">${arrCellPhone.length}</span>`;
        toast(success);
    },
    // add product oppo in cart
    pushBagoppos: pushBagoppo = function (id) {
        arrCellPhone.unshift(`
        <li class="bag-product-item delete-op-${id}">
            <div class="heading-img">
                <img class="heading-img__image" src="${cellPhone.oppos[id].image}" alt="">
            </div>
            <div class="bag-name-product">
                <h4>${cellPhone.oppos[id].name}</h4>
                <span class="bag-price-old">${cellPhone.oppos[id].priceOld} đ</span>
                <span class="bag-price-new">${cellPhone.oppos[id].priceNew} đ</span>
            </div>
            <div class="delete-bag-product" onclick="deleteCartOppo(${cellPhone.oppos[id].id})">
                <i class="fa-solid fa-trash"></i>
            </div>
        </li>
    `);
        $('.list-bag-product').innerHTML = arrCellPhone.join('');
        $('.amount-cart').innerHTML = `<span class="count-bag">${arrCellPhone.length}</span>`;
        toast(success);
    },
    // add product tablet in cart
    pusBagTablets: pushBagTablet = function(id){
        arrCellPhone.unshift(`
        <li class="bag-product-item delete-op-${id}">
            <div class="heading-img">
                <img class="heading-img__image" src="${cellPhone.tablets[id].image}" alt="">
            </div>
            <div class="bag-name-product">
                <h4>${cellPhone.tablets[id].name}</h4>
                <span class="bag-price-old">${cellPhone.tablets[id].priceOld} đ</span>
                <span class="bag-price-new">${cellPhone.tablets[id].priceNew} đ</span>
            </div>
            <div class="delete-bag-product" onclick="deleteCartOppo(${cellPhone.tablets[id].id})">
                <i class="fa-solid fa-trash"></i>
            </div>
        </li>
    `);
        $('.list-bag-product').innerHTML = arrCellPhone.join('');
        $('.amount-cart').innerHTML = `<span class="count-bag">${arrCellPhone.length}</span>`;
        toast(success);
    },
    // add product laptop in cart
    pushBagLaptops: pushBagLaptop = function(id){
        arrCellPhone.unshift(`
        <li class="bag-product-item delete-op-${id}">
            <div class="heading-img">
                <img class="heading-img__image" src="${cellPhone.laptops[id].image}" alt="">
            </div>
            <div class="bag-name-product">
                <h4>${cellPhone.laptops[id].name}</h4>
                <span class="bag-price-old">${cellPhone.laptops[id].priceOld} đ</span>
                <span class="bag-price-new">${cellPhone.laptops[id].priceNew} đ</span>
            </div>
            <div class="delete-bag-product" onclick="deleteCartOppo(${cellPhone.laptops[id].id})">
                <i class="fa-solid fa-trash"></i>
            </div>
        </li>
    `);
        $('.list-bag-product').innerHTML = arrCellPhone.join('');
        $('.amount-cart').innerHTML = `<span class="count-bag">${arrCellPhone.length}</span>`;
        toast(success);
    },

    start: function () {
        // js code rennder in html iphone cellphone
        this.renderProductIphone();
        // js code rennder in html samsung cellphone
        this.renderProductSamsung();
        // js code rennder in html oppo cellphone
        this.renderProductOppo();
        // js code render in html tablet
        this.renderProductTablet();
        // js code render in html laptop
        this.renderProductLaptop();

        this.renderListiPhone();
        this.renderListSamSung();
        this.renderListOppo();
    }
}
app.start();

if (app.arrCellPhones.length === 0) {
    $('.list-bag-product').innerHTML = '<div class="cart_NULL"><i class="fa-solid fa-cart-shopping"></i></div>'
}

// delete cart iphone 
function deleteCartIphone(e) {
    if ($('.delete-ip-' + e)) {
        $('.delete-ip-' + e).remove();
    }
    $('.amount-cart').innerHTML = `<span class="count-bag">${arrCellPhone.length}</span>`;
    if (arrCellPhone.length === 0) {
        $('.list-bag-product').innerHTML = '<div class="cart_NULL"><i class="fa-solid fa-cart-shopping"></i></div>'
    }
}
// delete cart samsung 
function deleteCartSamsung(e) {
    if ($('.delete-ss-' + e)) {
        $('.delete-ss-' + e).remove();
    }

    $('.amount-cart').innerHTML = `<span class="count-bag">${arrCellPhone.length}</span>`;
    if (arrCellPhone.length === 0) {
        $('.list-bag-product').innerHTML = '<div class="cart_NULL"><i class="fa-solid fa-cart-shopping"></i></div>'
    }
}
// delete cart oppo 
function deleteCartOppo(e) {
    if ($('.delete-op-' + e)) {
        $('.delete-op-' + e).remove();
    }
    $('.amount-cart').innerHTML = `<span class="count-bag">${arrCellPhone.length}</span>`;
    if (arrCellPhone.length === 0) {
        $('.list-bag-product').innerHTML = '<div class="cart_NULL"><i class="fa-solid fa-cart-shopping"></i></div>'
    }
}



