const getVideoUrl = (file) => {
    switch (file) {
        case "1":
            return "https://vpn-movie-ofc.blogspot.com/2024/05/embed_27.html?r=aHR0cHM6Ly9zd2R5dS5jb20vZS8yamdiNzVrMjhjNmw=";
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
            url: "vpnmovie.onrender.com/movies/reproductor?id=1"
        }
    },
};
