const getVideoUrl = (file) => {
    switch (file) {
        case "1":
            return "https://vlink.lol/vfm/play/CineMaxApp/TheFlash_1080P.mp4";
        case "2":
            return "https://vlink.lol/vfm/play/CineMaxApp/BlackAdam.mp4";
        case "3":
            return "https://vlink.lol/vfm/play/CineMaxApp/MiVillanoFavorito4.mp4";
        default:
            return file;
    }
};

const movies = {
    flash: {
        title: "The Flash",
        json: {
            title: "The Flash",
            id: 1,
            url: "vpnmovie.onrender.com/movies/reproductor?id=1"
        }
    },
    blackAdam: {
        title: "Black Adam",
        json: {
            title: "Black Adam",
            id: 2,
            url: "vpnmovie.onrender.com/movies/reproductor?id=2"
        }
    },
    minions: {
        title: "Minions: The Rise of Gru",
        json: {
            title: "Minions: The Rise of Gru",
            id: 3,
            url: "vpnmovie.onrender.com/live/movies/reproductor?id=3"
        }
    }
};
