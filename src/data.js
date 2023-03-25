export const sellers = [
    {
        '_id': "sl_001",
        'name': "Holly Doe",
        'phone': "(768)467 54546",
        'image': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZl8VZt-3AL75pKCPu-YODhFQn8kXfIv0GgAcdngcqg&s",
    },
    {
        '_id': "sl_002",
        'name': "David Hockney",
        'phone': "(768)345 8787",
        'image': "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        '_id': "sl_003",
        'name': "Jane Gold",
        'phone': "(722)444 8899",
        'image': "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_640.jpg",
    },
    {
        '_id': "sl_004",
        'name': "Carlos Garcia",
        'phone': "(722)444 8899",
        'image': "https://us.123rf.com/450wm/melnyk58/melnyk581906/melnyk58190603679/125464836-cierra-el-retrato-de-un-joven-cauc%C3%A1sico-aislado-en-un-estudio-negro-fotograf%C3%ADa-de-emociones-reales.jpg?ver=6",
    },
    {
        '_id': "sl_005",
        'name': "Juan Fernando Pérez",
        'phone': "(444) 445 7866",
        'image': "https://f.rpp-noticias.io/2019/02/15/753296descarga-7jpg.jpg",
    },
    {
        '_id': "sl_006",
        'name': "Valentina Laverde",
        'phone': "(722)444 8899",
        'image': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZGFbNYuVk4j2nkWOUcdXNbfYMiOCYX23FHilc_6t8NgOZwc0EvFZNLn0YuvckOfJBtM&usqp=CAU",
    },
    {
        '_id': "sl_007",
        'name': "Óscar de la Renta",
        'phone': "(722)412 0087",
        'image': "https://cdnb.20m.es/sites/112/2019/04/cara75.jpg",
    },
    {
        '_id': "sl_008",
        'name': "Sara Teresa Sánchez",
        'phone': "(722)444 8899",
        'image': "https://www.contrareplica.mx/uploads/galerias/normal/93dabd5b458063670d4be2082049d426.jpg",
    },
    {
        '_id': "sl_009",
        'name': "Efraín de las Casas",
        'phone': "(722)444 8899",
        'image': "https://www.contrareplica.mx/uploads/galerias/normal/d51adde6198cd2e5a32ddda82d2ee9b6.jpg",
    },
    {
        '_id': "sl_010",
        'name': "Martín Elías de los Ríos",
        'phone': "(722)444 8899",
        'image': "https://www.contrareplica.mx/uploads/galerias/normal/e2527158aedacc9e7a917a77e269d907.jpg",
    },
    {
        '_id': "sl_011",
        'name': "Julieta Ponce",
        'phone': "(722)444 8899",
        'image': "https://f.rpp-noticias.io/2019/02/15/753301descarga-12jpg.jpg",
    },
    {
        '_id': "sl_012",
        'name': "Ana María de la Peña",
        'phone': "(722)444 8899",
        'image': "https://mochileros.org/nelson/wp-content/uploads/2020/04/esta-persona-no-existe-3.jpg",
    },
    {
        '_id': "sl_013",
        'name': "Matías de Greiff",
        'phone': "(722)444 8899",
        'image': "https://cdnb.20m.es/sites/112/2019/04/cara22.jpg",
    },
    {
        '_id': "sl_014",
        'name': "Gabriela Torres",
        'phone': "(722)444 8899",
        'image': "https://mochileros.org/nelson/wp-content/uploads/2020/04/esta-persona-no-existe-8.jpg",
    }
];
export const products = [
    {
        '_id': "pr_001",
        'name': "Mesas x5 personas",
        'price': "11",
        'image': [
            "https://promart.vteximg.com.br/arquivos/ids/383250-1000-1000/18702.jpg?v=637124708063800000",
            "https://image.made-in-china.com/155f0j00RTZYfneMZAbH/Rectangle-HDPE-Plastic-Foldable-Outdoor-Wedding-Folding-Tables.jpg"
        ],
        'type': "rent_pr",
        'price': "20.00",
        'sellerId': "sl_004"
    },
    {
        '_id': "pr_002",
        'name': "Sillas Negras de cuero",
        'phone': "45",
        'image': [
            "https://http2.mlstatic.com/D_NQ_NP_645443-MLA47920791213_102021-O.webp",
            "https://i.pinimg.com/600x315/6a/7b/d4/6a7bd4b367b464fe1171ffcc317029e8.jpg",
            "https://thumbs.dreamstime.com/b/silla-de-cuero-negra-antigua-16530233.jpg"
        ],
        'type': "sell_pr",
        'inventory': 9,
        'price': "8.00",
        'sellerId': "sl_004"
    },
    {
        '_id': "pr_003",
        'name': "Confetti x10kg",
        'phone': "23",
        'image': ["https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg"],
        'type': "sell_pr",
        'inventory': 19,
        'price': "20.00",
        'sellerId': "sl_002"
    },
    {
        '_id': "pr_004",
        'name': "Vasos de plastico x100",
        'phone': "43",
        'image': ["https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg"],
        'type': "sell_pr",
        'inventory': 78,
        'price': "45.00",
        'sellerId': "sl_003"
    },
    {
        '_id': "pr_005",
        'name': "Utensilios de plástico",
        'phone': "8",
        'image': ["https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg"],
        'type': "sell_pr",
        'inventory': 190,
        'price': "12.00",
        'sellerId': "sl_001"
    }
];