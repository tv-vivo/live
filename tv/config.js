const getVideoUrl = (file) => {
    switch (file) {
        case "sñlcol":
            return "https://streaming.rtvc.gov.co/TV_Senal_Colombia_live/smil:live.smil/playlist.m3u8?PlaylistM3UCL";
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
            url: "vpnmovie.onrender.com/movies/reproductor?id=3"
        }
    }
};
