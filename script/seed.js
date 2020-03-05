'use strict'

const db = require('../server/db')
const {User, Shoe, Order} = require('../server/db/models')

const users = [
  {
    email: 'nelson.ls.liu@gmail.com',
    password: 'gracesneaks',
    firstName: 'Nelson',
    lastName: 'Liu',
    street: '79810 Kreiger Prairie',
    apartmentNumber: 'Apt. 398',
    city: 'Smithfurt',
    zip: '26051',
    country: 'Trinidad and Tobago',
    phoneNumber: '262-234-1970',
    isAdmin: true
  },
  {
    email: 'Zackary_Prosacco@gmail.com',
    password: 'aTES39hN8p501Ch',
    firstName: 'Lempi',
    lastName: 'Blanda',
    street: '960 Estelle Garden',
    apartmentNumber: 'Suite 217',
    city: 'South Anderson',
    zip: '62122',
    country: 'Australia',
    phoneNumber: '019-423-2040'
  },
  {
    email: 'Jewell.Rempel53@hotmail.com',
    password: 'NC0Q3rfVIPIocW0',
    firstName: 'Catharine',
    lastName: 'Tremblay',
    street: '0219 Gusikowski Turnpike',
    apartmentNumber: 'Suite 066',
    city: 'Port Aylinport',
    zip: '48625',
    country: 'Guadeloupe',
    phoneNumber: '456-978-1622'
  },
  {
    email: 'Eldridge.Marks@hotmail.com',
    password: 'JooiH7cUwY2VmSC',
    firstName: 'Vern',
    lastName: 'Bins',
    street: '831 Marta Ridges',
    apartmentNumber: 'Suite 137',
    city: 'West Alexzander',
    zip: '11366',
    country: 'Russian Federation',
    phoneNumber: '222-584-7094'
  },
  {
    email: 'Abby89@gmail.com',
    password: 'uFeUkwIr1vuAJ4a',
    firstName: 'Kara',
    lastName: 'Wolff',
    street: '4133 Ritchie Village',
    apartmentNumber: 'Apt. 102',
    city: 'East Abel',
    zip: '75794',
    country: 'Puerto Rico',
    phoneNumber: '181-985-9665'
  },
  {
    email: 'Jamil_Reynolds94@hotmail.com',
    password: 'S6n_K9_OVaaS7QG',
    firstName: 'Zaria',
    lastName: 'Oberbrunner',
    street: '3059 Heathcote Motorway',
    apartmentNumber: 'Suite 131',
    city: 'Wuckertview',
    zip: '04083',
    country: 'Ecuador',
    phoneNumber: '052-961-5857'
  },
  {
    email: 'Dudley_Mueller53@yahoo.com',
    password: 'zhKB5JPquPrQ_NY',
    firstName: 'Carrie',
    lastName: 'Corwin',
    street: '9294 Hilll Wall',
    apartmentNumber: 'Suite 976',
    city: 'Mohrville',
    zip: '22570',
    country: 'Cape Verde',
    phoneNumber: '029-265-4266'
  },
  {
    email: 'Amaya.McLaughlin@hotmail.com',
    password: 'qLIUxsHkzHffc89',
    firstName: 'Mercedes',
    lastName: 'Johnston',
    street: '710 Ashleigh Road',
    apartmentNumber: 'Suite 556',
    city: 'Lydashire',
    zip: '82050',
    country: 'Angola',
    phoneNumber: '708-314-5745'
  },
  {
    email: 'Ara31@hotmail.com',
    password: 'ZGq4dwee7diXCfr',
    firstName: 'Eda',
    lastName: 'Schiller',
    street: '1027 Kilback Walks',
    apartmentNumber: 'Apt. 861',
    city: 'Pricestad',
    zip: '84926',
    country: 'Mauritania',
    phoneNumber: '981-084-1740'
  },
  {
    email: 'Maribel60@gmail.com',
    password: 'JpQutuZD_WdJpQ9',
    firstName: 'Bobby',
    lastName: 'Wuckert',
    street: '765 Goldner Village',
    apartmentNumber: 'Apt. 392',
    city: 'West Angeloborough',
    zip: '61040',
    country: 'Albania',
    phoneNumber: '536-653-1215'
  },
  {
    email: 'Avery.Upton60@yahoo.com',
    password: 'M2EjNR3UNThm2wR',
    firstName: 'Leda',
    lastName: 'Hessel',
    street: '2661 Jaden Ford',
    apartmentNumber: 'Suite 744',
    city: 'Jaimechester',
    zip: '63980',
    country: 'Uzbekistan',
    phoneNumber: '685-534-5178'
  },
  {
    email: 'Kristy_Considine6@hotmail.com',
    password: 'ywIYOu92MFejKTD',
    firstName: 'Leif',
    lastName: 'Mraz',
    street: '94944 Floyd Valleys',
    apartmentNumber: 'Apt. 884',
    city: 'Crooksburgh',
    zip: '65760',
    country: 'Belize',
    phoneNumber: '909-793-6225'
  },
  {
    email: 'Angelica_Stoltenberg@hotmail.com',
    password: '74XdLEbyh8UJOeo',
    firstName: 'Tamia',
    lastName: 'Howe',
    street: '8804 Miller Key',
    apartmentNumber: 'Suite 413',
    city: 'Eugeniatown',
    zip: '67207',
    country: 'South Georgia and the South Sandwich Islands',
    phoneNumber: '011-899-9474'
  },
  {
    email: 'Jacquelyn.Ryan50@hotmail.com',
    password: 'mLK_nwRY6gROvuC',
    firstName: 'Chanel',
    lastName: 'Mante',
    street: '02767 Volkman Harbor',
    apartmentNumber: 'Suite 697',
    city: 'Walterborough',
    zip: '07315',
    country: 'Wallis and Futuna',
    phoneNumber: '599-974-4609'
  },
  {
    email: 'Icie96@yahoo.com',
    password: 'EKH1LPV5cR6_k5u',
    firstName: 'Duncan',
    lastName: 'Bahringer',
    street: '84360 Jillian Field',
    apartmentNumber: 'Suite 273',
    city: 'East Eltonbury',
    zip: '39448',
    country: 'Kenya',
    phoneNumber: '774-570-5439'
  },
  {
    email: 'Oral68@yahoo.com',
    password: 'VxHa0pcyfQ2USVx',
    firstName: 'Tre',
    lastName: 'Rosenbaum',
    street: '21302 Bartoletti Field',
    apartmentNumber: 'Apt. 215',
    city: 'Huelton',
    zip: '68187',
    country: 'Belarus',
    phoneNumber: '987-282-2221'
  },
  {
    email: 'Reagan_Hodkiewicz@gmail.com',
    password: 'WM4o1VhDfpOASjW',
    firstName: 'Stephanie',
    lastName: 'Harber',
    street: '059 Agustin Neck',
    apartmentNumber: 'Apt. 861',
    city: 'North Meaghanton',
    zip: '47407',
    country: 'Maldives',
    phoneNumber: '514-670-4003'
  },
  {
    email: 'Jay85@yahoo.com',
    password: 'gdYsNaBpocwAQc6',
    firstName: 'Leonie',
    lastName: 'Hauck',
    street: '861 Lindgren Circle',
    apartmentNumber: 'Apt. 998',
    city: 'Adalbertohaven',
    zip: '32020',
    country: 'New Caledonia',
    phoneNumber: '152-153-9765'
  },
  {
    email: 'Marley44@yahoo.com',
    password: 'eZp6pI8RZT4yc6V',
    firstName: 'Genevieve',
    lastName: 'Littel',
    street: '9904 Bruen Estates',
    apartmentNumber: 'Suite 649',
    city: 'Lake Natalieland',
    zip: '33838',
    country: 'Pitcairn Islands',
    phoneNumber: '791-953-6207'
  },
  {
    email: 'Ernestine13@yahoo.com',
    password: '34BmYJxsnd894Vl',
    firstName: 'Yazmin',
    lastName: 'Thompson',
    street: '78414 Magnus Forges',
    apartmentNumber: 'Suite 909',
    city: 'South Brandy',
    zip: '69936',
    country: 'Mauritania',
    phoneNumber: '435-721-5471'
  },
  {
    email: 'Joshua82@yahoo.com',
    password: 'DL0RdH0OzWBojeF',
    firstName: 'Ignatius',
    lastName: 'Swaniawski',
    street: '933 Sonny Grove',
    apartmentNumber: 'Suite 472',
    city: 'West Jaceyfurt',
    zip: '08931',
    country: 'Panama',
    phoneNumber: '481-578-0255'
  },
  {
    email: 'Logan39@hotmail.com',
    password: 'PvyqJ6XTaIQZRCC',
    firstName: 'Eulah',
    lastName: 'Zieme',
    street: '9876 Gaylord Port',
    apartmentNumber: 'Suite 688',
    city: 'Predovicburgh',
    zip: '48422',
    country: 'Kyrgyz Republic',
    phoneNumber: '983-643-0278'
  },
  {
    email: 'Elnora41@yahoo.com',
    password: 'PffYTHPrjEBlpzo',
    firstName: 'Justus',
    lastName: 'Kozey',
    street: '709 Bogisich Shores',
    apartmentNumber: 'Apt. 140',
    city: 'Bergnaumfort',
    zip: '41929',
    country: 'Angola',
    phoneNumber: '168-329-6947'
  },
  {
    email: 'Orval_Stokes19@hotmail.com',
    password: 'M1PLHXFZa_DZlaB',
    firstName: 'Jaeden',
    lastName: 'Goldner',
    street: '41250 Pfeffer Dam',
    apartmentNumber: 'Suite 289',
    city: 'North Sofia',
    zip: '52500',
    country: 'Papua New Guinea',
    phoneNumber: '554-113-6428'
  },
  {
    email: 'Forrest82@gmail.com',
    password: 'uWccrYndoGncwcc',
    firstName: 'Amanda',
    lastName: 'Mosciski',
    street: '7089 Reilly River',
    apartmentNumber: 'Apt. 875',
    city: 'South Milanside',
    zip: '92885',
    country: 'South Georgia and the South Sandwich Islands',
    phoneNumber: '088-336-0703'
  },
  {
    email: 'Gordon36@gmail.com',
    password: 'XtYepTjbRYhfoVg',
    firstName: 'Treva',
    lastName: 'Moen',
    street: '25128 Lea Junction',
    apartmentNumber: 'Suite 389',
    city: 'Ortizview',
    zip: '76664',
    country: 'Thailand',
    phoneNumber: '297-534-3328'
  },
  {
    email: 'Hillard_Weimann88@gmail.com',
    password: 'VLj4njJJShC5xzk',
    firstName: 'Shaina',
    lastName: 'Grimes',
    street: '2269 Tanya Place',
    apartmentNumber: 'Apt. 607',
    city: 'Kubside',
    zip: '96868',
    country: 'Heard Island and McDonald Islands',
    phoneNumber: '117-133-6434'
  },
  {
    email: 'Cristina_Hudson14@yahoo.com',
    password: 'YDGIlZzrrqF6hn4',
    firstName: 'Isabel',
    lastName: 'Dare',
    street: '6523 Russel Lane',
    apartmentNumber: 'Suite 502',
    city: 'Kolbyfurt',
    zip: '96195',
    country: 'Israel',
    phoneNumber: '004-692-5135'
  },
  {
    email: 'Darren_Beahan@yahoo.com',
    password: 'O_ncV3cUqqQxCg0',
    firstName: 'Keara',
    lastName: 'Kutch',
    street: '868 Howell Knolls',
    apartmentNumber: 'Suite 381',
    city: 'Kihnberg',
    zip: '72768',
    country: 'Haiti',
    phoneNumber: '439-128-5707'
  },
  {
    email: 'Cecil.Cronin83@gmail.com',
    password: 'e4WPaZWvd6yrx7f',
    firstName: 'Golden',
    lastName: 'Cummings',
    street: '46940 Nola Fields',
    apartmentNumber: 'Suite 208',
    city: 'East Nils',
    zip: '82701',
    country: 'Iran',
    phoneNumber: '173-089-6336'
  },
  {
    email: 'Flavie11@gmail.com',
    password: 'XmMtyWQPjyDJIOJ',
    firstName: 'Icie',
    lastName: 'Rau',
    street: '224 Kovacek Trafficway',
    apartmentNumber: 'Apt. 282',
    city: 'Vincentburgh',
    zip: '52990',
    country: "Lao People's Democratic Republic",
    phoneNumber: '367-743-7165'
  },
  {
    email: 'Afton.Bode@yahoo.com',
    password: 'YHdSDZI8ICdaKV_',
    firstName: 'Robert',
    lastName: 'Homenick',
    street: '616 Jean Wells',
    apartmentNumber: 'Apt. 791',
    city: 'East Wayne',
    zip: '57138',
    country: 'Venezuela',
    phoneNumber: '529-668-4840'
  },
  {
    email: 'Immanuel_Tillman82@gmail.com',
    password: 'ATHE5T4pPbwaJMm',
    firstName: 'Ardella',
    lastName: 'Gutmann',
    street: '9997 Verna Cape',
    apartmentNumber: 'Suite 790',
    city: 'Alanview',
    zip: '84216',
    country: 'Guinea-Bissau',
    phoneNumber: '309-076-2618'
  },
  {
    email: 'Jeanette73@gmail.com',
    password: 'U8ZnawzQAwQaxXe',
    firstName: 'Neha',
    lastName: 'Lueilwitz',
    street: '638 Ruthe Ranch',
    apartmentNumber: 'Apt. 906',
    city: 'Gisselleborough',
    zip: '47805',
    country: 'Burkina Faso',
    phoneNumber: '965-988-7596'
  },
  {
    email: 'Karelle12@hotmail.com',
    password: 'hm58zPBbzqWHkQV',
    firstName: 'Randal',
    lastName: 'Vandervort',
    street: '425 Lauriane Spur',
    apartmentNumber: 'Suite 305',
    city: 'Kianaport',
    zip: '14755',
    country: 'South Georgia and the South Sandwich Islands',
    phoneNumber: '539-879-8599'
  },
  {
    email: 'Kendrick38@yahoo.com',
    password: 'GBO7K_KvTsFemsW',
    firstName: 'Jean',
    lastName: 'Swaniawski',
    street: '380 Junius Route',
    apartmentNumber: 'Apt. 337',
    city: 'Sarahburgh',
    zip: '69639',
    country: 'Martinique',
    phoneNumber: '495-065-0580'
  },
  {
    email: 'Lilyan31@yahoo.com',
    password: 'qvciZVkUwN0ZHQE',
    firstName: 'Brandy',
    lastName: 'Mayert',
    street: '66826 Kaya Shoals',
    apartmentNumber: 'Apt. 510',
    city: 'Hermanstad',
    zip: '63628',
    country: 'Mayotte',
    phoneNumber: '006-028-3350'
  },
  {
    email: 'Mikel_Howell@yahoo.com',
    password: 'qMpJ06PECYg00aj',
    firstName: 'Amalia',
    lastName: 'Boyer',
    street: '2590 Jast Mountains',
    apartmentNumber: 'Apt. 954',
    city: 'New Ofeliahaven',
    zip: '51014',
    country: 'Qatar',
    phoneNumber: '367-183-1063'
  },
  {
    email: 'Akeem_Batz@hotmail.com',
    password: 'Ce1rHinekvBedxH',
    firstName: 'Orlo',
    lastName: 'Brakus',
    street: '984 McClure Spring',
    apartmentNumber: 'Apt. 751',
    city: 'Lake Fausto',
    zip: '27846',
    country: 'Vietnam',
    phoneNumber: '917-953-9792'
  },
  {
    email: 'Jaron.Cronin@yahoo.com',
    password: 'sRu7RzoLNQrCh_s',
    firstName: 'Shaina',
    lastName: 'Lebsack',
    street: '5696 Greg Expressway',
    apartmentNumber: 'Apt. 491',
    city: 'Haleyborough',
    zip: '85909',
    country: 'Turks and Caicos Islands',
    phoneNumber: '776-570-9898'
  },
  {
    email: 'Aileen.Pacocha18@yahoo.com',
    password: 'OO0Qlv4bGRibx9G',
    firstName: 'Maxime',
    lastName: 'Weimann',
    street: '420 Gutmann Junctions',
    apartmentNumber: 'Suite 596',
    city: 'Stiedemannside',
    zip: '51087',
    country: 'Senegal',
    phoneNumber: '526-793-3221'
  },
  {
    email: 'Beth.DuBuque16@hotmail.com',
    password: 'jZHhnxWzGInJLkS',
    firstName: 'Brenna',
    lastName: 'Tremblay',
    street: '5164 Paige Well',
    apartmentNumber: 'Apt. 570',
    city: 'Port Cindy',
    zip: '68262',
    country: 'Myanmar',
    phoneNumber: '331-867-2088'
  },
  {
    email: 'Jamey_Metz11@gmail.com',
    password: '_SuuAKapLZEgW3m',
    firstName: 'Hailey',
    lastName: 'Wisoky',
    street: '45395 Eileen Wells',
    apartmentNumber: 'Suite 380',
    city: 'Hodkiewiczfurt',
    zip: '09398',
    country: 'Latvia',
    phoneNumber: '735-241-9450'
  },
  {
    email: 'Bradley84@gmail.com',
    password: 't79o5qIF3HD4Gpb',
    firstName: 'Eda',
    lastName: 'Wilkinson',
    street: '382 Bert Club',
    apartmentNumber: 'Apt. 782',
    city: 'Loramouth',
    zip: '92348',
    country: 'Wallis and Futuna',
    phoneNumber: '873-859-3256'
  },
  {
    email: 'Eulalia88@gmail.com',
    password: 'FSw7vKwHkRUpfHZ',
    firstName: 'Jalen',
    lastName: 'Cole',
    street: '413 Boyle Brook',
    apartmentNumber: 'Apt. 130',
    city: 'Quitzonhaven',
    zip: '94369',
    country: 'Guadeloupe',
    phoneNumber: '667-017-2413'
  },
  {
    email: 'Esta32@gmail.com',
    password: 'oUB1M02g5w6fo6b',
    firstName: 'Colten',
    lastName: 'Brakus',
    street: '67338 Unique Center',
    apartmentNumber: 'Suite 987',
    city: 'Kutchmouth',
    zip: '52258',
    country: 'Martinique',
    phoneNumber: '301-763-3302'
  },
  {
    email: 'Geraldine.King@gmail.com',
    password: 'DIwk96P_fI9nhhp',
    firstName: 'Christine',
    lastName: 'Hegmann',
    street: '3939 McGlynn Squares',
    apartmentNumber: 'Apt. 059',
    city: 'East Prudence',
    zip: '82650',
    country: 'Mauritius',
    phoneNumber: '899-869-5486'
  },
  {
    email: 'Maudie.Carroll@hotmail.com',
    password: 'rokudhEhVriKh0Z',
    firstName: 'Mable',
    lastName: 'Strosin',
    street: '8434 Ofelia Pines',
    apartmentNumber: 'Apt. 337',
    city: 'Lake Adah',
    zip: '83252',
    country: 'Venezuela',
    phoneNumber: '806-197-6063'
  },
  {
    email: 'Jeanne50@hotmail.com',
    password: 'ZV1TsJjR4eMngsW',
    firstName: 'Elena',
    lastName: 'Schimmel',
    street: '55946 Blick Hollow',
    apartmentNumber: 'Suite 359',
    city: 'Freemanton',
    zip: '50679',
    country: 'Kazakhstan',
    phoneNumber: '642-675-5355'
  },
  {
    email: 'Leif48@gmail.com',
    password: 'FsAwalIUoyjWLh8',
    firstName: 'Franco',
    lastName: 'Pfeffer',
    street: '39433 Will Harbor',
    apartmentNumber: 'Apt. 857',
    city: 'Gerlachbury',
    zip: '35066',
    country: 'Kazakhstan',
    phoneNumber: '931-099-9565'
  },
  {
    email: 'Keagan_Dicki92@hotmail.com',
    password: 'nYqkxiIPqUitfk5',
    firstName: 'Jeremy',
    lastName: 'Mante',
    street: '00789 Pouros Viaduct',
    apartmentNumber: 'Apt. 803',
    city: 'Jakobstad',
    zip: '80782',
    country: 'Falkland Islands (Malvinas)',
    phoneNumber: '330-793-7249'
  }
]

const shoes = [
  {
    size: '14',
    brand: 'Adidas',
    color: 'black',
    model: 'Gorgeous Steel Table',
    name: 'Edward',
    description: 'Intelligent',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 23092
  },
  {
    size: '13.5',
    brand: 'Nike',
    color: 'indigo',
    model: 'Licensed Plastic Tuna',
    name: 'Westley',
    description: 'Gorgeous',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 29831
  },
  {
    size: '13',
    brand: 'Converse',
    color: 'black',
    model: 'Incredible Steel Sausages',
    name: 'Richard',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 19109
  },
  {
    size: '9',
    brand: 'Converse',
    color: 'pink',
    model: 'Awesome Rubber Tuna',
    name: 'Diego',
    description: 'Handmade',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 15285
  },
  {
    size: '13.5',
    brand: 'Adidas',
    color: 'cyan',
    model: 'Handcrafted Frozen Keyboard',
    name: 'Herman',
    description: 'Gorgeous',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 25896
  },
  {
    size: '14',
    brand: 'Reebok',
    color: 'black',
    model: 'Ergonomic Soft Chair',
    name: 'Shanny',
    description: 'Awesome',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 21122
  },
  {
    size: '7.5',
    brand: 'Nike',
    color: 'ivory',
    model: 'Awesome Rubber Shirt',
    name: 'Kobe',
    description: 'Tasty',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 23027
  },
  {
    size: '11.5',
    brand: 'Nike',
    color: 'orchid',
    model: 'Intelligent Cotton Shoes',
    name: 'Jarret',
    description: 'Refined',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 13474
  },
  {
    size: '8.5',
    brand: 'Converse',
    color: 'sky blue',
    model: 'Handmade Wooden Tuna',
    name: 'Emmanuelle',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 21858
  },
  {
    size: '10',
    brand: 'Converse',
    color: 'plum',
    model: 'Sleek Metal Gloves',
    name: 'Mitchel',
    description: 'Generic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 13066
  },
  {
    size: '11',
    brand: 'Converse',
    color: 'tan',
    model: 'Awesome Frozen Tuna',
    name: 'Tyler',
    description: 'Rustic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 26532
  },
  {
    size: '7.5',
    brand: 'Adidas',
    color: 'sky blue',
    model: 'Intelligent Soft Chips',
    name: 'Oscar',
    description: 'Gorgeous',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 9076
  },
  {
    size: '12',
    brand: 'Nike',
    color: 'violet',
    model: 'Practical Cotton Ball',
    name: 'Geovanni',
    description: 'Awesome',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 27204
  },
  {
    size: '7.5',
    brand: 'Converse',
    color: 'orange',
    model: 'Ergonomic Concrete Salad',
    name: 'Eliseo',
    description: 'Licensed',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 8410
  },
  {
    size: '13.5',
    brand: 'Adidas',
    color: 'fuchsia',
    model: 'Fantastic Metal Keyboard',
    name: 'Ashlee',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 28773
  },
  {
    size: '14',
    brand: 'Adidas',
    color: 'sky blue',
    model: 'Licensed Wooden Mouse',
    name: 'Owen',
    description: 'Awesome',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 22250
  },
  {
    size: '9.5',
    brand: 'Adidas',
    color: 'pink',
    model: 'Licensed Metal Pants',
    name: 'Kitty',
    description: 'Ergonomic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 12406
  },
  {
    size: '8',
    brand: 'Converse',
    color: 'salmon',
    model: 'Incredible Fresh Chips',
    name: 'Jordon',
    description: 'Licensed',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 19416
  },
  {
    size: '7.5',
    brand: 'Nike',
    color: 'green',
    model: 'Handmade Wooden Fish',
    name: 'Wayne',
    description: 'Rustic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 9391
  },
  {
    size: '8.5',
    brand: 'Reebok',
    color: 'lavender',
    model: 'Incredible Concrete Chair',
    name: 'Henri',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 27622
  },
  {
    size: '13.5',
    brand: 'Converse',
    color: 'cyan',
    model: 'Rustic Metal Tuna',
    name: 'Shaina',
    description: 'Generic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 14732
  },
  {
    size: '13.5',
    brand: 'Adidas',
    color: 'ivory',
    model: 'Tasty Concrete Bacon',
    name: 'Andrew',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 29087
  },
  {
    size: '12',
    brand: 'Converse',
    color: 'orange',
    model: 'Sleek Plastic Pizza',
    name: 'Linnie',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 22497
  },
  {
    size: '7',
    brand: 'Adidas',
    color: 'black',
    model: 'Sleek Steel Bacon',
    name: 'Katlyn',
    description: 'Handmade',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 15685
  },
  {
    size: '14',
    brand: 'Adidas',
    color: 'indigo',
    model: 'Tasty Rubber Ball',
    name: 'Cecilia',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 13786
  },
  {
    size: '8.5',
    brand: 'Converse',
    color: 'black',
    model: 'Awesome Metal Ball',
    name: 'Remington',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 24214
  },
  {
    size: '13.5',
    brand: 'Nike',
    color: 'cyan',
    model: 'Fantastic Fresh Table',
    name: 'Frieda',
    description: 'Ergonomic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 15494
  },
  {
    size: '8.5',
    brand: 'Adidas',
    color: 'maroon',
    model: 'Fantastic Steel Shoes',
    name: 'Ezra',
    description: 'Licensed',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 23623
  },
  {
    size: '8',
    brand: 'Converse',
    color: 'tan',
    model: 'Refined Soft Ball',
    name: 'Norene',
    description: 'Refined',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 8282
  },
  {
    size: '14',
    brand: 'Adidas',
    color: 'blue',
    model: 'Gorgeous Rubber Salad',
    name: 'Alphonso',
    description: 'Handmade',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 21648
  },
  {
    size: '13.5',
    brand: 'Nike',
    color: 'lavender',
    model: 'Tasty Soft Bike',
    name: 'Felton',
    description: 'Rustic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 14377
  },
  {
    size: '13.5',
    brand: 'Converse',
    color: 'plum',
    model: 'Fantastic Steel Table',
    name: 'Deondre',
    description: 'Small',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 22960
  },
  {
    size: '9.5',
    brand: 'Adidas',
    color: 'lavender',
    model: 'Sleek Wooden Chicken',
    name: 'Heath',
    description: 'Ergonomic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 28188
  },
  {
    size: '13.5',
    brand: 'Nike',
    color: 'azure',
    model: 'Awesome Metal Car',
    name: 'Eva',
    description: 'Fantastic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 19544
  },
  {
    size: '8',
    brand: 'Adidas',
    color: 'azure',
    model: 'Handmade Wooden Fish',
    name: 'Tyler',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 21804
  },
  {
    size: '7.5',
    brand: 'Nike',
    color: 'silver',
    model: 'Tasty Frozen Gloves',
    name: 'Idell',
    description: 'Small',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 11820
  },
  {
    size: '13',
    brand: 'Nike',
    color: 'red',
    model: 'Practical Wooden Bike',
    name: 'Brice',
    description: 'Tasty',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 29558
  },
  {
    size: '12.5',
    brand: 'Adidas',
    color: 'ivory',
    model: 'Unbranded Soft Pants',
    name: 'Ignacio',
    description: 'Tasty',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 28953
  },
  {
    size: '7.5',
    brand: 'Converse',
    color: 'gold',
    model: 'Incredible Wooden Mouse',
    name: 'Marta',
    description: 'Gorgeous',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 24525
  },
  {
    size: '10',
    brand: 'Adidas',
    color: 'mint green',
    model: 'Generic Concrete Soap',
    name: 'Mariela',
    description: 'Awesome',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 16412
  },
  {
    size: '10.5',
    brand: 'Nike',
    color: 'indigo',
    model: 'Awesome Steel Pizza',
    name: 'Zora',
    description: 'Small',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 11005
  },
  {
    size: '7',
    brand: 'Nike',
    color: 'turquoise',
    model: 'Small Metal Pants',
    name: 'Abel',
    description: 'Licensed',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 9818
  },
  {
    size: '12',
    brand: 'Reebok',
    color: 'green',
    model: 'Practical Soft Gloves',
    name: 'Demario',
    description: 'Practical',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 26454
  },
  {
    size: '12',
    brand: 'Nike',
    color: 'olive',
    model: 'Handcrafted Metal Bacon',
    name: 'Grayce',
    description: 'Gorgeous',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 27209
  },
  {
    size: '10.5',
    brand: 'Adidas',
    color: 'white',
    model: 'Small Frozen Shirt',
    name: 'Ismael',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 13088
  },
  {
    size: '8',
    brand: 'Converse',
    color: 'mint green',
    model: 'Ergonomic Granite Shirt',
    name: 'Austen',
    description: 'Gorgeous',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 13613
  },
  {
    size: '7',
    brand: 'Nike',
    color: 'orchid',
    model: 'Refined Plastic Chicken',
    name: 'Darien',
    description: 'Sleek',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 20912
  },
  {
    size: '14',
    brand: 'Nike',
    color: 'ivory',
    model: 'Tasty Concrete Soap',
    name: 'Alejandra',
    description: 'Awesome',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 25096
  },
  {
    size: '8.5',
    brand: 'Converse',
    color: 'violet',
    model: 'Awesome Rubber Pizza',
    name: 'Tre',
    description: 'Small',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 22207
  },
  {
    size: '7',
    brand: 'Converse',
    color: 'red',
    model: 'Handcrafted Plastic Cheese',
    name: 'Dimitri',
    description: 'Ergonomic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 26141
  },
  {
    size: '11',
    brand: 'Nike',
    color: 'gold',
    model: 'Sleek Plastic Mouse',
    name: 'Zackary',
    description: 'Small',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 22011
  },
  {
    size: '12.5',
    brand: 'Adidas',
    color: 'green',
    model: 'Tasty Cotton Soap',
    name: 'King',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 13405
  },
  {
    size: '11.5',
    brand: 'Converse',
    color: 'ivory',
    model: 'Small Rubber Computer',
    name: 'Annie',
    description: 'Fantastic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 19166
  },
  {
    size: '11',
    brand: 'Converse',
    color: 'gold',
    model: 'Licensed Fresh Sausages',
    name: 'Alivia',
    description: 'Licensed',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 25774
  },
  {
    size: '12',
    brand: 'Reebok',
    color: 'cyan',
    model: 'Unbranded Granite Bike',
    name: 'Telly',
    description: 'Small',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 15969
  },
  {
    size: '9.5',
    brand: 'Adidas',
    color: 'lavender',
    model: 'Tasty Concrete Hat',
    name: 'Enrico',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 11125
  },
  {
    size: '7',
    brand: 'Converse',
    color: 'orchid',
    model: 'Sleek Fresh Bacon',
    name: 'Roxane',
    description: 'Practical',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 8415
  },
  {
    size: '14',
    brand: 'Adidas',
    color: 'orchid',
    model: 'Unbranded Rubber Gloves',
    name: 'Beaulah',
    description: 'Practical',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 14247
  },
  {
    size: '9',
    brand: 'Nike',
    color: 'lavender',
    model: 'Ergonomic Metal Hat',
    name: 'Annabell',
    description: 'Gorgeous',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 28032
  },
  {
    size: '9.5',
    brand: 'Nike',
    color: 'mint green',
    model: 'Handcrafted Concrete Ball',
    name: 'Duane',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 17631
  },
  {
    size: '7.5',
    brand: 'Adidas',
    color: 'turquoise',
    model: 'Rustic Metal Car',
    name: 'Kaia',
    description: 'Refined',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 8604
  },
  {
    size: '13',
    brand: 'Converse',
    color: 'violet',
    model: 'Licensed Granite Computer',
    name: 'Olaf',
    description: 'Sleek',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 26740
  },
  {
    size: '11.5',
    brand: 'Adidas',
    color: 'tan',
    model: 'Tasty Wooden Bacon',
    name: 'Skyla',
    description: 'Licensed',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 28490
  },
  {
    size: '14',
    brand: 'Converse',
    color: 'turquoise',
    model: 'Tasty Steel Cheese',
    name: 'Moshe',
    description: 'Intelligent',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 13405
  },
  {
    size: '7',
    brand: 'Reebok',
    color: 'green',
    model: 'Small Rubber Table',
    name: 'Mya',
    description: 'Sleek',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 9977
  },
  {
    size: '13',
    brand: 'Reebok',
    color: 'teal',
    model: 'Incredible Steel Mouse',
    name: 'Mathias',
    description: 'Licensed',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 14360
  },
  {
    size: '13.5',
    brand: 'Converse',
    color: 'red',
    model: 'Sleek Wooden Tuna',
    name: 'Jocelyn',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 26821
  },
  {
    size: '11',
    brand: 'Adidas',
    color: 'sky blue',
    model: 'Intelligent Wooden Cheese',
    name: 'Haylie',
    description: 'Tasty',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 12265
  },
  {
    size: '7.5',
    brand: 'Adidas',
    color: 'mint green',
    model: 'Ergonomic Cotton Table',
    name: 'Colten',
    description: 'Licensed',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 12226
  },
  {
    size: '7.5',
    brand: 'Converse',
    color: 'violet',
    model: 'Sleek Plastic Shirt',
    name: 'Susanna',
    description: 'Tasty',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 17720
  },
  {
    size: '14',
    brand: 'Reebok',
    color: 'black',
    model: 'Intelligent Granite Chicken',
    name: 'Dashawn',
    description: 'Tasty',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 12274
  },
  {
    size: '9',
    brand: 'Reebok',
    color: 'tan',
    model: 'Gorgeous Plastic Shoes',
    name: 'Abbey',
    description: 'Tasty',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 21803
  },
  {
    size: '13',
    brand: 'Converse',
    color: 'cyan',
    model: 'Intelligent Fresh Keyboard',
    name: 'Christine',
    description: 'Licensed',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 26936
  },
  {
    size: '8',
    brand: 'Converse',
    color: 'lime',
    model: 'Small Soft Chips',
    name: 'Ladarius',
    description: 'Sleek',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 23956
  },
  {
    size: '8.5',
    brand: 'Reebok',
    color: 'teal',
    model: 'Generic Steel Mouse',
    name: 'Willa',
    description: 'Handmade',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 28406
  },
  {
    size: '7.5',
    brand: 'Reebok',
    color: 'mint green',
    model: 'Gorgeous Metal Shirt',
    name: 'Hester',
    description: 'Rustic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 17811
  },
  {
    size: '14',
    brand: 'Converse',
    color: 'azure',
    model: 'Intelligent Wooden Chair',
    name: 'Amy',
    description: 'Small',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 27063
  },
  {
    size: '10',
    brand: 'Converse',
    color: 'lime',
    model: 'Refined Metal Cheese',
    name: 'Lucy',
    description: 'Ergonomic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 13310
  },
  {
    size: '11.5',
    brand: 'Adidas',
    color: 'lavender',
    model: 'Intelligent Soft Ball',
    name: 'Celia',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 21080
  },
  {
    size: '10.5',
    brand: 'Reebok',
    color: 'grey',
    model: 'Licensed Plastic Keyboard',
    name: 'Moses',
    description: 'Refined',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 19864
  },
  {
    size: '9.5',
    brand: 'Converse',
    color: 'tan',
    model: 'Refined Granite Shoes',
    name: 'Abner',
    description: 'Licensed',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 21668
  },
  {
    size: '13',
    brand: 'Converse',
    color: 'black',
    model: 'Tasty Plastic Chips',
    name: 'Rachelle',
    description: 'Refined',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 26730
  },
  {
    size: '10',
    brand: 'Converse',
    color: 'indigo',
    model: 'Licensed Plastic Cheese',
    name: 'Vergie',
    description: 'Intelligent',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 17925
  },
  {
    size: '12.5',
    brand: 'Nike',
    color: 'purple',
    model: 'Intelligent Concrete Cheese',
    name: 'Ariane',
    description: 'Practical',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 11575
  },
  {
    size: '8.5',
    brand: 'Nike',
    color: 'plum',
    model: 'Generic Granite Cheese',
    name: 'Haskell',
    description: 'Sleek',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 21851
  },
  {
    size: '10',
    brand: 'Converse',
    color: 'tan',
    model: 'Awesome Fresh Mouse',
    name: 'Adan',
    description: 'Generic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 13164
  },
  {
    size: '10',
    brand: 'Converse',
    color: 'salmon',
    model: 'Licensed Frozen Bacon',
    name: 'Jamey',
    description: 'Handmade',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 23327
  },
  {
    size: '7',
    brand: 'Reebok',
    color: 'white',
    model: 'Handmade Plastic Tuna',
    name: 'Brisa',
    description: 'Sleek',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 9669
  },
  {
    size: '12',
    brand: 'Adidas',
    color: 'grey',
    model: 'Handcrafted Steel Gloves',
    name: 'Jennie',
    description: 'Handmade',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 11360
  },
  {
    size: '10',
    brand: 'Converse',
    color: 'fuchsia',
    model: 'Gorgeous Metal Bacon',
    name: 'Stan',
    description: 'Sleek',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 20057
  },
  {
    size: '7.5',
    brand: 'Reebok',
    color: 'maroon',
    model: 'Practical Granite Chicken',
    name: 'Delbert',
    description: 'Generic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 27453
  },
  {
    size: '10.5',
    brand: 'Adidas',
    color: 'indigo',
    model: 'Small Soft Bike',
    name: 'Onie',
    description: 'Awesome',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 11115
  },
  {
    size: '11',
    brand: 'Adidas',
    color: 'fuchsia',
    model: 'Generic Steel Fish',
    name: 'Trycia',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 8195
  },
  {
    size: '14',
    brand: 'Converse',
    color: 'violet',
    model: 'Sleek Fresh Chair',
    name: 'Quinton',
    description: 'Sleek',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 17551
  },
  {
    size: '10.5',
    brand: 'Reebok',
    color: 'indigo',
    model: 'Tasty Concrete Car',
    name: 'Elinor',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 27750
  },
  {
    size: '12',
    brand: 'Reebok',
    color: 'blue',
    model: 'Intelligent Rubber Hat',
    name: 'Devyn',
    description: 'Practical',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 17020
  },
  {
    size: '9',
    brand: 'Converse',
    color: 'teal',
    model: 'Licensed Cotton Shirt',
    name: 'Kari',
    description: 'Tasty',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 20772
  },
  {
    size: '10.5',
    brand: 'Nike',
    color: 'lime',
    model: 'Practical Steel Tuna',
    name: 'Albina',
    description: 'Gorgeous',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 16538
  },
  {
    size: '11.5',
    brand: 'Nike',
    color: 'sky blue',
    model: 'Refined Cotton Sausages',
    name: 'Easter',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 21390
  },
  {
    size: '7',
    brand: 'Converse',
    color: 'red',
    model: 'Small Rubber Salad',
    name: 'Zachery',
    description: 'Intelligent',
    image: 'http://lorempixel.com/400/400/shoes',
    price: 22937
  }
]

const orders = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  },
  {
    id: 7
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const createdUsers = await Promise.all(
    users.map(user => {
      return User.create(user)
    })
  )
  const createdShoes = await Promise.all(
    shoes.map(shoe => {
      return Shoe.create(shoe)
    })
  )

  const createdOrders = await Promise.all(
    orders.map(order => {
      return Order.create(order)
    })
  )

  // await createdCarts[0].addShoe(0);
  // await createdCarts[0].addShoe(2);
  // await createdCarts[0].addShoe(1);
  // await createdCarts[1].addShoe(1);
  // await createdCarts[2].addShoe(2);

  await createdUsers[0].addOrder(1)
  await createdUsers[0].addOrder(2)
  await createdUsers[1].addOrder(3)
  await createdUsers[2].addOrder(6)
  await createdUsers[3].addOrder(7)
  await createdUsers[5].addOrder(4)
  await createdUsers[5].addOrder(5)

  await createdOrders[0].addShoe(1)
  await createdOrders[0].addShoe(2)
  await createdOrders[0].addShoe(3)
  await createdOrders[1].addShoe(1)
  await createdOrders[1].addShoe(4)
  await createdOrders[2].addShoe(2)

  // await createdUsers[0].setCart(3);
  // await createdUsers[1].setCart(2);
  // await createdUsers[2].setCart(4);
  // await createdUsers[3].setCart(1);

  // const users = await Promise.all([
  //   User.create({email: 'cody@email.com', password: '123'}),
  //   User.create({email: 'murphy@email.com', password: '123'})
  // ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${shoes.length} shoes`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
