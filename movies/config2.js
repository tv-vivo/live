const vpn_movie = (file, embed) => {
    switch (file) {
        case "11":
            return embed + "aHR0cHM6Ly9zdHJ3aXNoLmNvbS9lL2E1NmNjcTNqdHdlMA=="
        case "10":
            return embed + "aHR0cHM6Ly9zd2R5dS5jb20vZS9yamdodW0wbzVwcDk="
        case "9":
            return embed + "aHR0cHM6Ly9zdHJ3aXNoLmNvbS9lLzV4MDFtM21hZThxeg"
        case "8":
            return embed + "aHR0cHM6Ly9zdHJ3aXNoLmNvbS9lL3ludTdqaXZ5MjBtag=="
        case "7":
            return embed + "aHR0cHM6Ly9zdHJ3aXNoLmNvbS9lL2FqNXF2eHY3MDVyeg=="
        case "6":
            return embed + "aHR0cHM6Ly9zdHJ3aXNoLmNvbS9lLzVoeTh5ams3bXdmZg=="
        case "5":
            return embed + "aHR0cHM6Ly9zdHJ3aXNoLmNvbS9lLzR6cGplNXZudmpsYg=="
        case "1":
            return embed + "aHR0cHM6Ly9zd2R5dS5jb20vZS8yamdiNzVrMjhjNmw=";
        case "2":
            return embed + "aHR0cHM6Ly9zdHJ3aXNoLmNvbS9lLzJhYzNhbDVobDNwYw=="
        case "3":
            return embed + "aHR0cHM6Ly9zdHJ3aXNoLmNvbS9lL2w4MGw4Zms3ZTduZg=="
        case "4":
            return embed + "aHR0cHM6Ly9zdHJ3aXNoLmNvbS9lL2g5NGg2MjltaDIwNg=="
        default:
            return file;
    }
};

module.exports = {
    vpn_movie
}
