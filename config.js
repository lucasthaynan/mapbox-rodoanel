var config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1IjoibHVjYXN0aGF5bmFuLWVzdGFkYW8iLCJhIjoiY2xnM3N1amQzMGlqeDNrbWdla3doY2o2dCJ9.OXh3OY3_HFqAiF-zzZ6SDQ',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'phl',
            alignment: 'right',
            title: 'Rodoanel - 25 anos',
            image: '',
            description: 'Lorem ipsum dolor sit amet. Et iusto debitis aut voluptatum ipsam et dolore cupiditate sit galisum mollitia eos officia nesciunt in galisum voluptatem et excepturi provident. Et incidunt laudantium sed internos consequatur ad suscipit corrupti. Eum odit itaque et molestiae enim non assumenda doloremque et distinctio iusto ut suscipit ipsum.',
            location: {
                center: [-46.588768, -23.57823],
                zoom: 9.83,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bike-lanes',
            alignment: 'right',
            title: 'Lorem ipsum dolor sit amet',
            image: 'https://f.i.uol.com.br/fotografia/2022/12/25/167198508663a877be24ffc_1671985086_3x2_md.jpg',
            description: 'Lorem ipsum dolor sit amet. Et iusto debitis aut voluptatum ipsam et dolore cupiditate sit galisum mollitia eos officia nesciunt in galisum voluptatem et excepturi provident. Et incidunt laudantium sed internos consequatur ad suscipit corrupti. Eum odit itaque et molestiae enim non assumenda doloremque et distinctio iusto ut suscipit ipsum.',
            location: {
                center: [-46.490122,-23.73038332],
                zoom: 14.62,
                pitch: 70.50, // inclinacao
                bearing: -20.20 // rotacao
            },
            onChapterEnter: [
                {
                    layer: 'phl-bike-network',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'indego',
            alignment: 'right',
            title: 'Lorem ipsum dolor',
            image: '',
            description: 'Lorem ipsum dolor sit amet. Et iusto debitis aut voluptatum ipsam et dolore cupiditate sit galisum mollitia eos officia nesciunt in galisum voluptatem et excepturi provident. Et incidunt laudantium sed internos consequatur ad suscipit corrupti. Eum odit itaque et molestiae enim non assumenda doloremque et distinctio iusto ut suscipit ipsum.',
            location: {
                center:[-46.821718,-23.69903332],
                zoom: 13.15,
                pitch: 60.00,
                bearing: -16.80
            },
            onChapterEnter: [
                {
                    layer: 'indego-stations',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'indego-stations',
                    opacity: 0
                }
            ]
        },
        {
            id: 'belmont',
            alignment: 'right',
            title: 'Et iusto debitis',
            image: '',
            description: 'Lorem ipsum dolor sit amet. Et iusto debitis aut voluptatum ipsam et dolore cupiditate sit galisum mollitia eos officia nesciunt in galisum voluptatem et excepturi provident. Et incidunt laudantium sed internos consequatur ad suscipit corrupti. Eum odit itaque et molestiae enim non assumenda doloremque et distinctio iusto ut suscipit ipsum.',
            location: {
                center: [-46.8343978,-23.63821632],
                zoom: 14.99,
                pitch: 44.00,
                bearing: -40.00
            },
            onChapterEnter: [
                {
                    layer: 'belmont',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'belmont',
                    opacity: 0
                }
            ]
        },
        {
            id: 'wiss',
            alignment: 'right',
            title: 'Wissahickon Park Trails',
            image: 'https://datavizproject.com/wp-content/uploads/types/Bar-Chart-Horizontal.png',
            description: 'Lorem ipsum dolor sit amet. Et iusto debitis aut voluptatum ipsam et dolore cupiditate sit galisum mollitia eos officia nesciunt in galisum voluptatem et excepturi provident. Et incidunt laudantium sed internos consequatur ad suscipit corrupti. Eum odit itaque et molestiae enim non assumenda doloremque et distinctio iusto ut suscipit ipsum.',
            location: {
                center: [-46.490122,-23.73038332],
                zoom: 13.08,
                pitch: 47.50,
                bearing: 32.80
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'pennypack',
            alignment: 'right',
            title: 'Pennypack Park Trails',
            image: '',
            description: 'Lorem ipsum dolor sit amet. Et iusto debitis aut voluptatum ipsam et dolore cupiditate sit galisum mollitia eos officia nesciunt in galisum voluptatem et excepturi provident. Et incidunt laudantium sed internos consequatur ad suscipit corrupti. Eum odit itaque et molestiae enim non assumenda doloremque et distinctio iusto ut suscipit ipsum.',
            location: {
                center: [-46.5900808,-23.76333682],
                zoom: 15.73,
                pitch: 43.50,
                bearing: 96.80
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        },
        {
            id: 'pennypack',
            alignment: 'right',
            title: 'Ultimo',
            image: '',
            description: 'Lorem ipsum dolor sit amet. Et iusto debitis aut voluptatum ipsam et dolore cupiditate sit galisum mollitia eos officia nesciunt in galisum voluptatem et excepturi provident. Et incidunt laudantium sed internos consequatur ad suscipit corrupti. Eum odit itaque et molestiae enim non assumenda doloremque et distinctio iusto ut suscipit ipsum.',
            location: {
                center: [-46.726526,-23.416842],
                zoom: 15.73,
                pitch: 43.50,
                bearing: 96.80
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        },
        
    ]
};
