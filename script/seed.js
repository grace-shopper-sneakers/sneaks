'use strict'

const db = require('../server/db')
const {User, Shoe, Cart, Order} = require('../server/db/models')

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
    size: '11.5',
    brand: 'Reebok',
    color: 'lime',
    model: 'Practical Cotton Fish',
    name: 'Margaretta',
    description: 'Fantastic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '147.00'
  },
  {
    size: '12',
    brand: 'Adidas',
    color: 'tan',
    model: 'Handmade Soft Pizza',
    name: 'Jaylen',
    description: 'Fantastic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '186.00'
  },
  {
    size: '12.5',
    brand: 'Adidas',
    color: 'salmon',
    model: 'Awesome Concrete Salad',
    name: 'Elizabeth',
    description: 'Small',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '96.00'
  },
  {
    size: '11',
    brand: 'Nike',
    color: 'gold',
    model: 'Tasty Plastic Mouse',
    name: 'Richard',
    description: 'Handmade',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '190.00'
  },
  {
    size: '8.5',
    brand: 'Reebok',
    color: 'salmon',
    model: 'Rustic Fresh Hat',
    name: 'Noah',
    description: 'Small',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '215.00'
  },
  {
    size: '9.5',
    brand: 'Adidas',
    color: 'blue',
    model: 'Fantastic Plastic Chicken',
    name: 'Harry',
    description: 'Small',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '122.00'
  },
  {
    size: '12.5',
    brand: 'Nike',
    color: 'violet',
    model: 'Rustic Frozen Sausages',
    name: 'Jeff',
    description: 'Fantastic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '141.00'
  },
  {
    size: '13.5',
    brand: 'Reebok',
    color: 'lime',
    model: 'Handmade Metal Chips',
    name: 'Mariane',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '111.00'
  },
  {
    size: '12.5',
    brand: 'Converse',
    color: 'plum',
    model: 'Generic Wooden Shoes',
    name: 'Cathrine',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '267.00'
  },
  {
    size: '14',
    brand: 'Reebok',
    color: 'blue',
    model: 'Gorgeous Steel Table',
    name: 'Brooks',
    description: 'Fantastic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '255.00'
  },
  {
    size: '11',
    brand: 'Converse',
    color: 'tan',
    model: 'Intelligent Plastic Bacon',
    name: 'Arnoldo',
    description: 'Practical',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '296.00'
  },
  {
    size: '12',
    brand: 'Nike',
    color: 'lavender',
    model: 'Fantastic Cotton Table',
    name: 'Charlene',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '272.00'
  },
  {
    size: '11.5',
    brand: 'Converse',
    color: 'pink',
    model: 'Generic Soft Sausages',
    name: 'Mariana',
    description: 'Intelligent',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '278.00'
  },
  {
    size: '8',
    brand: 'Adidas',
    color: 'magenta',
    model: 'Tasty Concrete Keyboard',
    name: 'Dolly',
    description: 'Generic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '88.00'
  },
  {
    size: '7',
    brand: 'Adidas',
    color: 'maroon',
    model: 'Intelligent Rubber Fish',
    name: 'Glen',
    description: 'Small',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '247.00'
  },
  {
    size: '11',
    brand: 'Nike',
    color: 'indigo',
    model: 'Tasty Fresh Fish',
    name: 'Harvey',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '281.00'
  },
  {
    size: '9.5',
    brand: 'Converse',
    color: 'blue',
    model: 'Ergonomic Wooden Soap',
    name: 'Regan',
    description: 'Fantastic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '192.00'
  },
  {
    size: '7',
    brand: 'Reebok',
    color: 'lime',
    model: 'Small Fresh Car',
    name: 'Norris',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '130.00'
  },
  {
    size: '7',
    brand: 'Converse',
    color: 'azure',
    model: 'Tasty Soft Car',
    name: 'Darrell',
    description: 'Awesome',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '284.00'
  },
  {
    size: '9.5',
    brand: 'Converse',
    color: 'ivory',
    model: 'Refined Rubber Hat',
    name: 'Armando',
    description: 'Practical',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '183.00'
  },
  {
    size: '7.5',
    brand: 'Nike',
    color: 'grey',
    model: 'Sleek Frozen Hat',
    name: 'Betty',
    description: 'Licensed',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '259.00'
  },
  {
    size: '8',
    brand: 'Adidas',
    color: 'ivory',
    model: 'Tasty Cotton Pizza',
    name: 'Enoch',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '150.00'
  },
  {
    size: '8',
    brand: 'Reebok',
    color: 'teal',
    model: 'Small Wooden Computer',
    name: 'Alfonzo',
    description: 'Awesome',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '135.00'
  },
  {
    size: '8',
    brand: 'Converse',
    color: 'yellow',
    model: 'Unbranded Metal Fish',
    name: 'Bobbie',
    description: 'Licensed',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '232.00'
  },
  {
    size: '7',
    brand: 'Adidas',
    color: 'fuchsia',
    model: 'Sleek Cotton Hat',
    name: 'Madisyn',
    description: 'Unbranded',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '245.00'
  },
  {
    size: '7.5',
    brand: 'Reebok',
    color: 'white',
    model: 'Refined Metal Table',
    name: 'Leonel',
    description: 'Practical',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '295.00'
  },
  {
    size: '7.5',
    brand: 'Converse',
    color: 'sky blue',
    model: 'Small Soft Bike',
    name: 'Saul',
    description: 'Sleek',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '245.00'
  },
  {
    size: '9.5',
    brand: 'Nike',
    color: 'olive',
    model: 'Tasty Rubber Car',
    name: 'Uriel',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '161.00'
  },
  {
    size: '13',
    brand: 'Reebok',
    color: 'magenta',
    model: 'Rustic Metal Towels',
    name: 'Ubaldo',
    description: 'Practical',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '146.00'
  },
  {
    size: '14',
    brand: 'Converse',
    color: 'pink',
    model: 'Ergonomic Concrete Fish',
    name: 'Jazlyn',
    description: 'Handmade',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '111.00'
  },
  {
    size: '7.5',
    brand: 'Converse',
    color: 'white',
    model: 'Gorgeous Wooden Fish',
    name: 'Verner',
    description: 'Intelligent',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '219.00'
  },
  {
    size: '12.5',
    brand: 'Nike',
    color: 'grey',
    model: 'Incredible Cotton Cheese',
    name: 'Else',
    description: 'Sleek',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '89.00'
  },
  {
    size: '10.5',
    brand: 'Converse',
    color: 'lavender',
    model: 'Practical Fresh Table',
    name: 'Rosalind',
    description: 'Generic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '135.00'
  },
  {
    size: '7',
    brand: 'Nike',
    color: 'gold',
    model: 'Licensed Soft Mouse',
    name: 'Christophe',
    description: 'Fantastic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '248.00'
  },
  {
    size: '10.5',
    brand: 'Adidas',
    color: 'blue',
    model: 'Practical Wooden Table',
    name: 'Itzel',
    description: 'Intelligent',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '173.00'
  },
  {
    size: '13',
    brand: 'Reebok',
    color: 'mint green',
    model: 'Unbranded Wooden Cheese',
    name: 'Geovanny',
    description: 'Intelligent',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '158.00'
  },
  {
    size: '10',
    brand: 'Nike',
    color: 'plum',
    model: 'Generic Plastic Bacon',
    name: 'Colten',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '266.00'
  },
  {
    size: '7',
    brand: 'Reebok',
    color: 'yellow',
    model: 'Handcrafted Cotton Chair',
    name: 'Zaria',
    description: 'Intelligent',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '122.00'
  },
  {
    size: '13',
    brand: 'Nike',
    color: 'blue',
    model: 'Small Plastic Tuna',
    name: 'Dagmar',
    description: 'Ergonomic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '85.00'
  },
  {
    size: '9.5',
    brand: 'Nike',
    color: 'teal',
    model: 'Ergonomic Concrete Ball',
    name: 'Christop',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '256.00'
  },
  {
    size: '12',
    brand: 'Reebok',
    color: 'grey',
    model: 'Practical Plastic Tuna',
    name: 'Georgette',
    description: 'Sleek',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '211.00'
  },
  {
    size: '10',
    brand: 'Reebok',
    color: 'mint green',
    model: 'Awesome Plastic Soap',
    name: 'Alana',
    description: 'Rustic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '201.00'
  },
  {
    size: '10',
    brand: 'Converse',
    color: 'turquoise',
    model: 'Handcrafted Wooden Shoes',
    name: 'Samanta',
    description: 'Practical',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '110.00'
  },
  {
    size: '8',
    brand: 'Adidas',
    color: 'blue',
    model: 'Awesome Cotton Fish',
    name: 'Mason',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '253.00'
  },
  {
    size: '11.5',
    brand: 'Nike',
    color: 'lavender',
    model: 'Incredible Granite Bike',
    name: 'Earlene',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '149.00'
  },
  {
    size: '14',
    brand: 'Nike',
    color: 'black',
    model: 'Gorgeous Metal Chair',
    name: 'Vallie',
    description: 'Ergonomic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '226.00'
  },
  {
    size: '12.5',
    brand: 'Nike',
    color: 'pink',
    model: 'Tasty Granite Car',
    name: 'Ena',
    description: 'Unbranded',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '84.00'
  },
  {
    size: '13.5',
    brand: 'Reebok',
    color: 'cyan',
    model: 'Generic Metal Cheese',
    name: 'Axel',
    description: 'Handmade',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '281.00'
  },
  {
    size: '7.5',
    brand: 'Adidas',
    color: 'mint green',
    model: 'Tasty Wooden Fish',
    name: 'Ella',
    description: 'Rustic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '290.00'
  },
  {
    size: '10',
    brand: 'Nike',
    color: 'lavender',
    model: 'Rustic Granite Chicken',
    name: 'Cory',
    description: 'Fantastic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '195.00'
  },
  {
    size: '10.5',
    brand: 'Reebok',
    color: 'fuchsia',
    model: 'Refined Cotton Pizza',
    name: 'Denis',
    description: 'Tasty',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '161.00'
  },
  {
    size: '13',
    brand: 'Converse',
    color: 'green',
    model: 'Handcrafted Wooden Sausages',
    name: 'Wilbert',
    description: 'Gorgeous',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '166.00'
  },
  {
    size: '7',
    brand: 'Reebok',
    color: 'lavender',
    model: 'Intelligent Rubber Shoes',
    name: 'Desiree',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '273.00'
  },
  {
    size: '12',
    brand: 'Adidas',
    color: 'gold',
    model: 'Handmade Soft Shirt',
    name: 'Ephraim',
    description: 'Sleek',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '213.00'
  },
  {
    size: '7.5',
    brand: 'Reebok',
    color: 'indigo',
    model: 'Generic Rubber Bike',
    name: 'Trinity',
    description: 'Refined',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '132.00'
  },
  {
    size: '10.5',
    brand: 'Converse',
    color: 'green',
    model: 'Rustic Metal Shoes',
    name: 'May',
    description: 'Generic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '219.00'
  },
  {
    size: '8.5',
    brand: 'Adidas',
    color: 'green',
    model: 'Awesome Metal Bike',
    name: 'Cruz',
    description: 'Generic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '277.00'
  },
  {
    size: '10.5',
    brand: 'Reebok',
    color: 'purple',
    model: 'Incredible Metal Fish',
    name: 'Golden',
    description: 'Small',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '145.00'
  },
  {
    size: '7.5',
    brand: 'Reebok',
    color: 'plum',
    model: 'Sleek Metal Pants',
    name: 'Lillian',
    description: 'Sleek',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '91.00'
  },
  {
    size: '7',
    brand: 'Converse',
    color: 'lavender',
    model: 'Tasty Steel Chips',
    name: 'Stefan',
    description: 'Licensed',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '133.00'
  },
  {
    size: '8.5',
    brand: 'Converse',
    color: 'green',
    model: 'Handmade Concrete Towels',
    name: 'Kathryne',
    description: 'Awesome',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '252.00'
  },
  {
    size: '13.5',
    brand: 'Converse',
    color: 'violet',
    model: 'Ergonomic Concrete Pants',
    name: 'Salvatore',
    description: 'Generic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '94.00'
  },
  {
    size: '12',
    brand: 'Nike',
    color: 'maroon',
    model: 'Handmade Wooden Tuna',
    name: 'Kenna',
    description: 'Refined',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '103.00'
  },
  {
    size: '13.5',
    brand: 'Adidas',
    color: 'azure',
    model: 'Licensed Soft Salad',
    name: 'Nicole',
    description: 'Practical',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '230.00'
  },
  {
    size: '7.5',
    brand: 'Converse',
    color: 'lavender',
    model: 'Handmade Steel Pants',
    name: 'Carey',
    description: 'Licensed',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '283.00'
  },
  {
    size: '11.5',
    brand: 'Nike',
    color: 'plum',
    model: 'Unbranded Rubber Car',
    name: 'Jakayla',
    description: 'Handmade',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '134.00'
  },
  {
    size: '12',
    brand: 'Nike',
    color: 'purple',
    model: 'Ergonomic Metal Towels',
    name: 'Michaela',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '250.00'
  },
  {
    size: '7',
    brand: 'Nike',
    color: 'plum',
    model: 'Practical Granite Fish',
    name: 'Emmanuel',
    description: 'Gorgeous',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '292.00'
  },
  {
    size: '8.5',
    brand: 'Nike',
    color: 'lime',
    model: 'Sleek Fresh Gloves',
    name: 'Dimitri',
    description: 'Tasty',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '271.00'
  },
  {
    size: '9.5',
    brand: 'Reebok',
    color: 'indigo',
    model: 'Incredible Rubber Pizza',
    name: 'Anderson',
    description: 'Refined',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '212.00'
  },
  {
    size: '11.5',
    brand: 'Nike',
    color: 'mint green',
    model: 'Handmade Fresh Chicken',
    name: 'Bobby',
    description: 'Sleek',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '200.00'
  },
  {
    size: '8.5',
    brand: 'Reebok',
    color: 'gold',
    model: 'Handcrafted Concrete Cheese',
    name: 'Aleen',
    description: 'Refined',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '255.00'
  },
  {
    size: '10',
    brand: 'Converse',
    color: 'sky blue',
    model: 'Tasty Fresh Computer',
    name: 'Delores',
    description: 'Licensed',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '274.00'
  },
  {
    size: '13.5',
    brand: 'Adidas',
    color: 'magenta',
    model: 'Gorgeous Plastic Gloves',
    name: 'Savanna',
    description: 'Unbranded',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '189.00'
  },
  {
    size: '11',
    brand: 'Adidas',
    color: 'salmon',
    model: 'Generic Rubber Chicken',
    name: 'Deshaun',
    description: 'Awesome',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '129.00'
  },
  {
    size: '7',
    brand: 'Converse',
    color: 'gold',
    model: 'Unbranded Granite Soap',
    name: 'Seamus',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '102.00'
  },
  {
    size: '9.5',
    brand: 'Nike',
    color: 'orchid',
    model: 'Incredible Wooden Computer',
    name: 'Kathryn',
    description: 'Tasty',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '285.00'
  },
  {
    size: '9',
    brand: 'Converse',
    color: 'ivory',
    model: 'Handcrafted Plastic Chair',
    name: 'Marina',
    description: 'Ergonomic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '225.00'
  },
  {
    size: '7',
    brand: 'Reebok',
    color: 'yellow',
    model: 'Licensed Granite Towels',
    name: 'Angeline',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '163.00'
  },
  {
    size: '7',
    brand: 'Nike',
    color: 'grey',
    model: 'Sleek Metal Keyboard',
    name: 'Rickie',
    description: 'Awesome',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '298.00'
  },
  {
    size: '11',
    brand: 'Adidas',
    color: 'cyan',
    model: 'Small Granite Ball',
    name: 'Stanley',
    description: 'Tasty',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '156.00'
  },
  {
    size: '7',
    brand: 'Converse',
    color: 'yellow',
    model: 'Intelligent Steel Salad',
    name: 'Tito',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '137.00'
  },
  {
    size: '10',
    brand: 'Adidas',
    color: 'turquoise',
    model: 'Fantastic Metal Pants',
    name: 'Lea',
    description: 'Handcrafted',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '260.00'
  },
  {
    size: '14',
    brand: 'Nike',
    color: 'olive',
    model: 'Unbranded Metal Chips',
    name: 'Gabe',
    description: 'Gorgeous',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '191.00'
  },
  {
    size: '8',
    brand: 'Nike',
    color: 'orchid',
    model: 'Intelligent Soft Bacon',
    name: 'Scottie',
    description: 'Awesome',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '172.00'
  },
  {
    size: '7',
    brand: 'Nike',
    color: 'plum',
    model: 'Small Fresh Table',
    name: 'Susana',
    description: 'Intelligent',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '120.00'
  },
  {
    size: '10',
    brand: 'Converse',
    color: 'turquoise',
    model: 'Small Frozen Shoes',
    name: 'Dustin',
    description: 'Fantastic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '196.00'
  },
  {
    size: '11.5',
    brand: 'Nike',
    color: 'fuchsia',
    model: 'Small Metal Shoes',
    name: 'Jake',
    description: 'Practical',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '168.00'
  },
  {
    size: '10.5',
    brand: 'Nike',
    color: 'azure',
    model: 'Intelligent Cotton Chicken',
    name: 'Jessika',
    description: 'Small',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '177.00'
  },
  {
    size: '13.5',
    brand: 'Reebok',
    color: 'gold',
    model: 'Tasty Wooden Salad',
    name: 'Camryn',
    description: 'Handmade',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '139.00'
  },
  {
    size: '14',
    brand: 'Reebok',
    color: 'purple',
    model: 'Awesome Soft Salad',
    name: 'Kale',
    description: 'Awesome',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '178.00'
  },
  {
    size: '13',
    brand: 'Reebok',
    color: 'mint green',
    model: 'Sleek Wooden Salad',
    name: 'Chyna',
    description: 'Handmade',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '192.00'
  },
  {
    size: '9.5',
    brand: 'Nike',
    color: 'white',
    model: 'Intelligent Cotton Car',
    name: 'Rachel',
    description: 'Licensed',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '217.00'
  },
  {
    size: '11.5',
    brand: 'Converse',
    color: 'blue',
    model: 'Practical Wooden Pants',
    name: 'Werner',
    description: 'Unbranded',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '140.00'
  },
  {
    size: '13',
    brand: 'Converse',
    color: 'ivory',
    model: 'Gorgeous Concrete Keyboard',
    name: 'Clark',
    description: 'Gorgeous',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '114.00'
  },
  {
    size: '8',
    brand: 'Nike',
    color: 'turquoise',
    model: 'Ergonomic Plastic Pants',
    name: 'Keyshawn',
    description: 'Sleek',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '222.00'
  },
  {
    size: '14',
    brand: 'Adidas',
    color: 'silver',
    model: 'Ergonomic Wooden Keyboard',
    name: 'Luis',
    description: 'Intelligent',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '249.00'
  },
  {
    size: '14',
    brand: 'Reebok',
    color: 'maroon',
    model: 'Tasty Concrete Bike',
    name: 'Lonnie',
    description: 'Generic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '274.00'
  },
  {
    size: '13',
    brand: 'Reebok',
    color: 'blue',
    model: 'Ergonomic Fresh Sausages',
    name: 'Willy',
    description: 'Small',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '254.00'
  },
  {
    size: '8.5',
    brand: 'Reebok',
    color: 'cyan',
    model: 'Ergonomic Concrete Chair',
    name: 'Mellie',
    description: 'Ergonomic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '89.00'
  }
]

const carts = [
  {
    id: 1,

    checkedOut: false
  },
  {
    id: 2,

    checkedOut: true
  },
  {
    id: 3,

    checkedOut: false
  },
  {
    id: 4,

    checkedOut: true
  }
]

const orders = [
  {
    orderId: 1,
    orderDate: '2020-01-02',
    size: '12',
    brand: 'Adidas',
    color: 'tan',
    model: 'Handmade Soft Pizza',
    name: 'Jaylen',
    description: 'Fantastic',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '186.00'
  },

  {
    orderId: 1,
    orderDate: '2020-01-02',
    size: '14',
    brand: 'Converse',
    color: 'pink',
    model: 'Ergonomic Concrete Fish',
    name: 'Jazlyn',
    description: 'Handmade',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '111.00'
  },
  {
    orderId: 2,
    orderDate: '2020-02-02',
    size: '8',
    brand: 'Nike',
    color: 'turquoise',
    model: 'Ergonomic Plastic Pants',
    name: 'Keyshawn',
    description: 'Sleek',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '222.00'
  },
  {
    orderId: 3,
    orderDate: '2020-03-03',
    size: '7',
    brand: 'Converse',
    color: 'gold',
    model: 'Unbranded Granite Soap',
    name: 'Seamus',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '102.00'
  },
  {
    orderId: 3,
    orderDate: '2020-03-03',
    size: '10.5',
    brand: 'Adidas',
    color: 'blue',
    model: 'Practical Wooden Table',
    name: 'Itzel',
    description: 'Intelligent',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '173.00'
  },
  {
    orderId: 4,
    orderDate: '2020-01-05',
    size: '9.5',
    brand: 'Nike',
    color: 'olive',
    model: 'Tasty Rubber Car',
    name: 'Uriel',
    description: 'Incredible',
    image: 'http://lorempixel.com/400/400/shoes',
    price: '161.00'
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
  const createdCarts = await Promise.all(
    carts.map(cart => {
      return Cart.create(cart)
    })
  )

  const createdOrders = await Promise.all(
    orders.map(order => {
      return Order.create(order)
    })
  )

  await createdCarts[0].addShoe(0)
  await createdCarts[0].addShoe(2)
  await createdCarts[0].addShoe(1)
  await createdCarts[1].addShoe(1)
  await createdCarts[2].addShoe(2)

  await createdUsers[0].addOrder(1)
  await createdUsers[0].addOrder(2)
  await createdUsers[1].addOrder(3)
  await createdUsers[3].addOrder(6)
  await createdUsers[5].addOrder(4)
  await createdUsers[5].addOrder(5)

  await createdUsers[0].setCart(3)
  await createdUsers[1].setCart(2)
  await createdUsers[2].setCart(4)
  await createdUsers[3].setCart(1)

  // const users = await Promise.all([
  //   User.create({email: 'cody@email.com', password: '123'}),
  //   User.create({email: 'murphy@email.com', password: '123'})
  // ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${shoes.length} shoes`)
  console.log(`seeded ${carts.length} carts`)
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
