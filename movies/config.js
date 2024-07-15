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
