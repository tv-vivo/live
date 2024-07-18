const dominio = "https://vpnmovie.onrender.com/tv/"
const vpn_movie = (file) => {
    switch (file) {
        case "dskids":
            return "https://jactvpro.xyz:443/Upb93ECM5B/RRzkDRt6w8/10301.m3u8"
        case "yugioh":
            return "https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/5fceaab478f2af00080ff51f/master.m3u8?deviceType=unknown&deviceMake=unknown&deviceModel=unknown&deviceVersion=unknown&appVersion=unknown&deviceLat=90&deviceLon=0&deviceDNT=TARGETOPT&deviceId=PSID&advertisingId=PSID&us_privacy=1YNY&profileLimit=&profileFloor=&embedPartner="
        case "naruto":
            return "https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/5ee92e72fb286e0007285fec/master.m3u8?deviceType=unknown&deviceMake=unknown&deviceModel=unknown&deviceVersion=unknown&appVersion=unknown&deviceLat=90&deviceLon=0&deviceDNT=TARGETOPT&deviceId=PSID&advertisingId=PSID&us_privacy=1YNY&profileLimit=&profileFloor=&embedPartner="
        case "bobesponja":
            return "https://service-stitcher.clusters.pluto.tv/v1/stitch/embed/hls/channel/5f1aca0b4e448e00075e7c5e/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&is_lat=1&platform=web&rdid=channel&tags=ROKU_CONTENT_TAGS"
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
    11: {
        title: "Discovery kids",
        json: {
            title: "Discovery kids",
            id: "dskids",
            image: "https://telegra.ph/file/b6c20f4f902eeb622aeb0.jpg",
            url: dominio + "reproductor?id=dskids"
        }
    },
    10: {
        title: "YU-GI-OH 24/7",
        json: {
            title: "YU-GI-OH 24/7",
            id: "yugioh",
            image: "https://telegra.ph/file/aa749f98840c049178a4d.jpg",
            url: dominio + "reproductor2?id=yugioh"
        }
    },
     9: {
        title: "NARUTO 24/7",
        json: {
            title: "NARUTO 24/7",
            id: "naruto",
            image: "https://telegra.ph/file/60dbdb3bba1cef1bd6f1d.jpg",
            url: dominio + "reproductor2?id=naruto"
        }
    },
    8: {
        title: "BOB ESPONJA 24/7",
        json: {
            title: "BOB ESPONJA 24/7",
            id: "bobesponja",
            image: "https://telegra.ph/file/d027989e7506f3f4a60f3.jpg",
            url: dominio + "reproductor2?id=bobesponja"
        }
    },
    7: {
        title: "LOS PADRINOS MAGICOS 24/7",
        json: {
            title: "LOS PADRINOS MAGICOS 24/7",
            id: "pdmagicos",
            image: "https://telegra.ph/file/6ab3331956eb2984e4470.jpg",
            url: dominio + "reproductor2?id=pdmagicos"
        }
    },
    1: {
        title: "Señal Colombia",
        json: {
            title: "Señal Colombia",
            id: "sñlcol",
            image: "https://telegra.ph/file/fcb81189982939fbdc2de.jpg",
            url: dominio + "reproductor?id=sñlcol"
        }
    },
    2: {
        title: "Orbit Tv",
        json: {
            title: "Orbit Tv",
            id: "orbittv",
            image: "https://telegra.ph/file/f5f55d2302cffeab2b745.jpg",
            url: dominio + "reproductor?id=orbittv"
        }
    },
    3: {
        title: "Disney Chanel",
        json: {
            title: "Disney Chanel",
            id: "disneych",
            image: "https://telegra.ph/file/335745e1da7c43e63f8c8.jpg",
            url: dominio + "reproductor?id=disneych"
        }
    },
    4: {
        title: "Canal 1",
        json: {
            title: "Canal 1",
            id: "canal1",
            image: "https://telegra.ph/file/7bdeda4fa548b1d9674fa.jpg",
            url: dominio + "reproductor?id=canal1"
        }
    },
    5: {
        title: "Cartoon Network",
        json: {
            title: "Cartoon Network",
            id: "ctnetwork",
            image: "https://telegra.ph/file/2ea5baa94fcaa17fe2de7.jpg",
            url: dominio + "reproductor?id=ctnetwork"
        }
    },
    6: {
        title: "Disney Jr",
        json: {
            title: "Disney Jr",
            id: "disneyjr",
            image: "https://telegra.ph/file/a0271e29771c5a33854fd.jpg",
            url: dominio + "reproductor?id=disneyjr"
        }
    },
};
