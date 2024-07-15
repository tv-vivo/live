const getVideoUrl = (file) => {
    switch (file) {
        case "sñlcol":
            return "https://streaming.rtvc.gov.co/TV_Senal_Colombia_live/smil:live.smil/playlist.m3u8?PlaylistM3UCL";
        case "orbittv":
            return "https://ss3.domint.net:3134/otv_str/orbittv/playlist.m3u8?PlaylistM3UCL";
        default:
            return file;
    }
};

const movies = {
    1: {
        title: "Señal Colombia",
        json: {
            title: "Señal Colombia",
            id: "sñlcol",
            url: "vpnmovie.onrender.com/tv/reproductor?id=sñlcol"
        }
    },
    2: {
        title: "Orbit Tv",
        json: {
            title: "Orbit Tv",
            id: "orbittv",
            url: "vpnmovie.onrender.com/tv/reproductor?id=orbittv"
        }
    },
};
