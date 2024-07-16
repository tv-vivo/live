const getVideoUrl = (file) => {
    switch (file) {
        case "1":
            return "https://vpn-movie-ofc.blogspot.com/2024/05/embed_27.html?r=aHR0cHM6Ly9zd2R5dS5jb20vZS8yamdiNzVrMjhjNmw=";
        case "2":
            return "https://vpn-movie-ofc.blogspot.com/2024/05/embed_27.html?r=aHR0cHM6Ly9zdHJ3aXNoLmNvbS9lLzJhYzNhbDVobDNwYw=="
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
            url: "https://vpnmovie.onrender.com/movies/reproductor?id=1"
        }
    },
    1: {
        title: "Un Lugar En Silencio (2024)",
        json: {
            title: "Un Lugar En Silencio (2024)",
            id: 1,
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/jGOi939xU8BDRfAAhN6eiTSf3H8.jpg",
            url: "https://vpnmovie.onrender.com/movies/reproductor?id=2"
        }
    },
};
