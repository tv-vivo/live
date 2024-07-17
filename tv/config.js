const vpn_movie = (file) => {
    switch (file) {
        case "pdmagicos":
            return "https://jmp2.uk/PlutoTV/6322099c822bbc00074857db-alt.m3u8"
        case "sñlcol":
            return "https://streaming.rtvc.gov.co/TV_Senal_Colombia_live/smil:live.smil/playlist.m3u8?PlaylistM3UCL";
        case "orbittv":
          return "https://ss3.domint.net:3134/otv_str/orbittv/playlist.m3u8?PlaylistM3UCL";
        case "disneych": 
            return "https://spa-ha-p005.cdn.masmediatv.es/SVoriginOperatorEdge2/smil:21_HD.smil/manifest.m3u8"
        case "canal1":
            return "https://mdstrm.com/live-stream-playlist/5a5e1c2568b1910913db5fe2.m3u8"
        case "ctnetwork":
            return "https://jactvpro.xyz:443/Upb93ECM5B/RRzkDRt6w8/10295.m3u8"
        case "disneyjr":
            return "https://jactvpro.xyz:443/Upb93ECM5B/RRzkDRt6w8/10297.m3u8"
        default:
            return file;
    }
};

const movies = {
    7: {
        title: "LOS PADRINOS MAGICOS 24/7",
        json: {
            title: "LOS PADRINOS MAGICOS 24/7",
            id: "pdmagicos",
            url: "https://vpnmovie.onrender.com/tv/reproductor2?id=pdmagicos"
        }
    },
    1: {
        title: "Señal Colombia",
        json: {
            title: "Señal Colombia",
            id: "sñlcol",
            url: "https://vpnmovie.onrender.com/tv/reproductor?id=sñlcol"
        }
    },
    2: {
        title: "Orbit Tv",
        json: {
            title: "Orbit Tv",
            id: "orbittv",
            url: "https://vpnmovie.onrender.com/tv/reproductor?id=orbittv"
        }
    },
    3: {
        title: "Disney Chanel",
        json: {
            title: "Disney Chanel",
            id: "disneych",
            url: "https://vpnmovie.onrender.com/tv/reproductor?id=disneych"
        }
    },
    4: {
        title: "Canal 1",
        json: {
            title: "Canal 1",
            id: "canal1",
            url: "https://vpnmovie.onrender.com/tv/reproductor?id=canal1"
        }
    },
    5: {
        title: "Cartoon Network",
        json: {
            title: "Cartoon Network",
            id: "ctnetwork",
            url: "https://vpnmovie.onrender.com/tv/reproductor?id=ctnetwork"
        }
    },
    6: {
        title: "Disney Jr",
        json: {
            title: "Disney Jr",
            id: "disneyjr",
            url: "vpnmovie.onrender.com/tv/reproductor?id=disneyjr"
        }
    },
};
