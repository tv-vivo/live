const getVideoUrl = (file) => {
    switch (file) {
        case "sñlcol":
            return "https://streaming.rtvc.gov.co/TV_Senal_Colombia_live/smil:live.smil/playlist.m3u8?PlaylistM3UCL";
        case "bobesponja24":
            return "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f1aca0b4e448e00075e7c5e/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&is_lat=1&platform=web&rdid=channel&tags=ROKU_CONTENT_TAGS";
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
        title: "Bob Esponja 24h",
        json: {
            title: "Bob Esponja 24h",
            id: "bobesponja24",
            url: "vpnmovie.onrender.com/tv/reproductor?id=bobesponja24"
        }
    },
};
