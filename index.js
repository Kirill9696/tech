let express = require('express');
let app = express();
let port = 3005;

let dayjs = require('dayjs');
let relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/ru');
dayjs.locale('ru');
dayjs.extend(relativeTime)

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
})

// Настройка CORS
let cors = require('cors');
app.use(cors());

// Настройка POST-запроса — JSON
app.use(express.json());

let phones = [{
    "id": 13,
    "price": 499,
    "image": "https://my-apple-store.ru/wa-data/public/shop/products/57/17/11757/images/17128/17128.750.jpg"
},
{
    "id": 14,
    "price": 599,
    "image": "https://avatars.mds.yandex.net/get-marketpic/6953693/pic55bc87b7a5f32f933c156730f40b56e1/orig"
},
{
    "id": 15,
    "price": 799,
    "image": "https://cdn1.ozone.ru/s3/multimedia-p/6883254601.jpg"
},
{
    "id": 16,
    "price": 1.299,
    "image": "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6662ae87f8523277db5ecef8_6662af4d5ae6656e68f555e1/scale_1200"
}];


// Роуты

app.get('/phones', async function (req, res) {
    res.send(phones);
});
