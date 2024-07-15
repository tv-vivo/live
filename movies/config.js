const urlParams = new URLSearchParams(window.location.search);
const file = urlParams.get('file') || urlParams.get('id');
let id = "";

if (file === 1) {
    id = "https://vlink.lol/vfm/play/CineMaxApp/TheFlash_1080P.mp4";
} else if(file === 2) {
    id = "https://vlink.lol/vfm/play/CineMaxApp/BlackAdam.mp4"
}

var player = jwplayer("megaplay");
player.setup({
    "title": "VPN•Movie",
    sources: [{
        "file": id,
    }],
    width: "100vw",
    height: "100vh",
    stretching: "fill",
    aspectratio: "16:9",
    startparam: "start",
    primary: "html5",
    autostart: false,
    preload: "auto",
    image: "",
    advertising: {
        client: "vast",
        tag: ""
    },
    skin: {
        name: "Vpn-Player"
    },
    logo: {
        file: "https://i.ibb.co/PZNtyDK/VERSION-20240616-022100-0000-2-removebg-preview.png"
    },
    captions: {
        color: "#f3f368",
        fontSize: 16,
        backgroundOpacity: 0,
        fontfamily: "Helvetica",
        edgeStyle: "raised"
    },
    tracks: [{
        file: "",
        label: "Español",
        kind: "captions"
    }]
});
