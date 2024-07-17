const embed = "https://vpn-movie-ofc.blogspot.com/2024/05/embed_27.html?r="
const dominio = "https://vpnmovie.onrender.com/movies/reproductor?id="
const vpn_movie = require("./config2.js")
const getVideoUrl = (file) => {
    return vpn_movie(file, "https://vpn-movie-ofc.blogspot.com/2024/05/embed_27.html?r=")
}
const movies = {
    11: {
        title: "Bad Boys: Corre o muere (2024)",
        json: {
            title: "Bad Boys: Corre o muere (2024)",
            id: 11,
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg",
            url: dominio + "11"
        }
    },
    10: {
        title: "Coco (2017)",
        json: {
            title: "Coco (2017)",
            id: 10,
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/lUZZhYLLDU4g4XGQ5tvjYNVytxc.jpg",
            url: dominio + "10"
        }
    },
    9: {
        title: "Hombres de negro: Internacional (2019)",
        json: {
            title: "Hombres de negro: Internacional (2019)",
            id: 9,
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg",
            url: dominio + "9"
        }
    },
    8: {
        title: "The Boxtrolls (2014)",
        json: {
            title: "The Boxtrolls (2014)",
            id: 8,
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/npBf0yc5Gt7aAyyVOcYtFyT2IPa.jpg",
            url: dominio + "8"
        }
    },
    7: {
        title: "Transformers: Rise of the Beasts (2023)",
        json: {
            title: "Transformers: Rise of the Beasts (2023)",
            id: 7,
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
            url: dominio + "7"
        }
    },
    6: {
        title: "IntensaMente 2 (2024)",
        json: {
            title: "IntensaMente 2 (2024)",
            id: 6,
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/aQnbNiadeGzGSjWLaXyeNxpAUIx.jpg",
            url: dominio + "6"
        }
    },
    5: {
        title: "Iron Man 2 (2010)",
        json: {
            title: "Iron Man 2 (2010)",
            id: 5,
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
            url: dominio + "5"
        }
    },
    1: {
        title: "Un Lugar En Silencio (2024)",
        json: {
            title: "Un Lugar En Silencio (2024)",
            id: 1,
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/jGOi939xU8BDRfAAhN6eiTSf3H8.jpg",
            url: dominio + "1"
        }
    },
    2: {
        title: "Free Guy",
        json: {
            title: "Free Guy",
            id: 1,
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
            url: dominio + "2"
        }
    },
    3: {
        title: "Tarot (2024)",
        json: {
            title: "Tarot (2024)",
            id: 1,
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/gAEUXC37vl1SnM7PXsHTF23I2vq.jpg",
            url: dominio + "3"
        }
    },
    4: {
        title: "Atlas (2024)",
        json: {
            title: "Atlas (2024)",
            id: 1,
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg",
            url: dominio + "4"
        }
    },
};
