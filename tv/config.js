const getVideoUrl = (file) => {
    switch (file) {
        case "sñlcol":
            return "https://streaming.rtvc.gov.co/TV_Senal_Colombia_live/smil:live.smil/playlist.m3u8?PlaylistM3UCL";
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
};
