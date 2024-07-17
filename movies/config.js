const embed = "https://vpn-movie-ofc.blogspot.com/2024/05/embed_27.html?r="
const dominio = "https://vpnmovie.onrender.com/movies/reproductor?id="
const getVideoUrl = (file) => {
    switch (file) {
        case "5":
            return embed + "aHR0cHM6Ly9zdHJ3aXNoLmNvbS9lLzR6cGplNXZudmpsYg=="
        case "1":
            return embed + "aHR0cHM6Ly9zd2R5dS5jb20vZS8yamdiNzVrMjhjNmw=";
        case "2":
            return embed + "aHR0cHM6Ly9zdHJ3aXNoLmNvbS9lLzJhYzNhbDVobDNwYw=="
        case "3":
            return embed + "aHR0cHM6Ly9zdHJ3aXNoLmNvbS9lL2w4MGw4Zms3ZTduZg=="
        case "4":
            return embed + "aHR0cHM6Ly9zdHJ3aXNoLmNvbS9lL2g5NGg2MjltaDIwNg=="
        default:
            return file;
    }
};

const movies = {
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
