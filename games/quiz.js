  const quiz = [
        {
        question: "¿Cuál es la capital de Francia?",
        options: ["Lisboa", "Madrid", "París", "Berlín"],
        answer: 2 // Correcta: París
    },
    {
        question: "¿Qué planeta es conocido como el planeta rojo?",
        options: ["Saturno", "Venus", "Marte", "Júpiter"],
        answer: 2 // Correcta: Marte
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        options: ["Índico", "Pacífico", "Atlántico", "Ártico"],
        answer: 1 // Correcta: Pacífico
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        options: ["Gabriel García Márquez", "Mario Vargas Llosa", "Jorge Luis Borges", "Julio Cortázar"],
        answer: 0 // Correcta: Gabriel García Márquez
    },
    {
        question: "¿Qué animal es conocido por ser el rey de la selva?",
        options: ["Elefante", "León", "Tigre", "Jirafa"],
        answer: 1 // Correcta: León
    },
    {
        question: "¿Cuál es el idioma oficial de Brasil?",
        options: ["Francés", "Portugués", "Español", "Inglés"],
        answer: 1 // Correcta: Portugués
    },
    {
        question: "¿Qué es la fotosíntesis?",
        options: ["Ninguna de las anteriores", "Proceso de respiración", "Proceso de producción de energía en plantas", "Proceso de nutrición en animales"],
        answer: 2 // Correcta: Proceso de producción de energía en plantas
    },
    {
        question: "¿Cuál es la capital de España?",
        options: ["Sevilla", "Madrid", "Valencia", "Barcelona"],
        answer: 1 // Correcta: Madrid
    },
    {
        question: "¿Qué gas es esencial para la respiración de los seres humanos?",
        options: ["Nitrógeno", "Dióxido de carbono", "Oxígeno", "Helio"],
        answer: 2 // Correcta: Oxígeno
    },
    {
        question: "¿Cuál es el continente más grande del mundo?",
        options: ["Europa", "Asia", "África", "América"],
        answer: 1 // Correcta: Asia
    },
    {
        question: "¿Cuál es la moneda de Japón?",
        options: ["Yuan", "Won", "Dólar", "Yen"],
        answer: 3 // Correcta: Yen
    },
    {
        question: "¿Cuál es el elemento químico con símbolo H?",
        options: ["Helio", "Hidrógeno", "Hierro", "Hafnio"],
        answer: 1 // Correcta: Hidrógeno
    },
    {
        question: "¿Qué instrumento mide la presión atmosférica?",
        options: ["Termómetro", "Barómetro", "Higrómetro", "Anemómetro"],
        answer: 1 // Correcta: Barómetro
    },
    {
        question: "¿Cuál es la capital de Argentina?",
        options: ["Buenos Aires", "Santiago", "Lima", "Montevideo"],
        answer: 0 // Correcta: Buenos Aires
    },
    {
        question: "¿Qué es la biodiversidad?",
        options: ["Variedad de especies en un ecosistema", "Número de individuos en un área", "Proceso de adaptación de especies", "Estudio de la genética"],
        answer: 0 // Correcta: Variedad de especies en un ecosistema
    },
    {
        question: "¿Quién pintó la Mona Lisa?",
        options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"],
        answer: 2 // Correcta: Da Vinci
    },
    {
        question: "¿Cuál es el gas más abundante en la atmósfera terrestre?",
        options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Argón"],
        answer: 1 // Correcta: Nitrógeno
    },
    {
        question: "¿Qué país es famoso por el vino y la moda?",
        options: ["Italia", "Francia", "España", "Grecia"],
        answer: 1 // Correcta: Francia
    },
    {
        question: "¿Qué es la tabla periódica?",
        options: ["Clasificación de elementos químicos", "Sistema de unidades", "Escala de pH", "Diagrama de fases"],
        answer: 0 // Correcta: Clasificación de elementos químicos
    },
    {
        question: "¿Cuál es el deporte más popular del mundo?",
        options: ["Béisbol", "Fútbol", "Baloncesto", "Tenis"],
        answer: 1 // Correcta: Fútbol
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        options: ["Saturno", "Neptuno", "Júpiter", "Urano"],
        answer: 2 // Correcta: Júpiter
    },
    {
        question: "¿Qué es el ADN?",
        options: ["Ácido desoxirribonucleico", "Ácido ribonucleico", "Proteína", "Carbohidrato"],
        answer: 0 // Correcta: Ácido desoxirribonucleico
    },
    {
        question: "¿Quién fue el primer presidente de los Estados Unidos?",
        options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
        answer: 1 // Correcta: George Washington
    },
    {
        question: "¿Qué gas es producido por las plantas durante la fotosíntesis?",
        options: ["Dióxido de carbono", "Oxígeno", "Metano", "Nitrógeno"],
        answer: 1 // Correcta: Oxígeno
    },
    {
        question: "¿Cuál es el país más poblado del mundo?",
        options: ["India", "China", "Estados Unidos", "Indonesia"],
        answer: 1 // Correcta: China
    },
    {
        question: "¿Qué órgano es responsable de bombear sangre en el cuerpo humano?",
        options: ["Hígado", "Riñón", "Corazón", "Pulmón"],
        answer: 2 // Correcta: Corazón
    },
    {
        question: "¿Cuál es el proceso por el cual las plantas producen su alimento?",
        options: ["Respiración", "Transpiración", "Fotosíntesis", "Digestión"],
        answer: 2 // Correcta: Fotosíntesis
    },
    {
        question: "¿Cuál es el metal más ligero?",
        options: ["Litio", "Aluminio", "Oro", "Mercurio"],
        answer: 0 // Correcta: Litio
    },
    {
        question: "¿Quién descubrió la penicilina?",
        options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Thomas Edison"],
        answer: 1 // Correcta: Alexander Fleming
    },
    {
        question: "¿Qué país ganó la Copa Mundial de la FIFA en 2014?",
        options: ["Brasil", "Alemania", "Argentina", "Italia"],
        answer: 1 // Correcta: Alemania
    },
    {
        question: "¿Cuál es el símbolo químico del oro?",
        options: ["Ag", "Au", "Pb", "Fe"],
        answer: 1 // Correcta: Au
    },
    {
        question: "¿Quién es conocido como el padre de la física moderna?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
        answer: 1 // Correcta: Albert Einstein
    },
    {
        question: "¿Qué continente tiene más países?",
        options: ["África", "Asia", "Europa", "América"],
        answer: 0 // Correcta: África
    },
    {
        question: "¿Qué instrumento musical tiene 88 teclas?",
        options: ["Piano", "Guitarra", "Violín", "Trompeta"],
        answer: 0 // Correcta: Piano
    },
    {
        question: "¿Cuál es la capital de Italia?",
        options: ["Milán", "Roma", "Venecia", "Nápoles"],
        answer: 1 // Correcta: Roma
    },
    {
        question: "¿Qué partícula subatómica tiene carga negativa?",
        options: ["Protón", "Neutrón", "Electrón", "Ion"],
        answer: 2 // Correcta: Electrón
    },
    {
        question: "¿Quién escribió 'El Quijote'?",
        options: ["Gabriel García Márquez", "Miguel de Cervantes", "Pablo Neruda", "Jorge Luis Borges"],
        answer: 1 // Correcta: Miguel de Cervantes
    },
    {
        question: "¿Cuál es el continente más pequeño?",
        options: ["Oceanía", "Europa", "Antártida", "Asia"],
        answer: 0 // Correcta: Oceanía
    },
    {
        question: "¿Qué es la gravedad?",
        options: ["Una fuerza electromagnética", "La fuerza que atrae los objetos hacia la Tierra", "Una fuerza nuclear", "Una propiedad de los fluidos"],
        answer: 1 // Correcta: La fuerza que atrae los objetos hacia la Tierra
    },
    {
        question: "¿Cuál es el río más largo de América del Sur?",
        options: ["Río Amazonas", "Río Paraná", "Río Orinoco", "Río Magdalena"],
        answer: 0 // Correcta: Río Amazonas
    },
    {
        question: "¿Qué océano se encuentra entre África y Australia?",
        options: ["Atlántico", "Índico", "Pacífico", "Ártico"],
        answer: 1 // Correcta: Índico
    },
    {
        question: "¿Cuál es el animal más rápido del mundo?",
        options: ["Guepardo", "Halcon", "Antílope", "León"],
        answer: 0 // Correcta: Guepardo
    },
    {
        question: "¿Qué continente es conocido como la cuna de la civilización?",
        options: ["Asia", "África", "Europa", "América"],
        answer: 1 // Correcta: África
    },
    {
        question: "¿Qué tipo de energía se obtiene del sol?",
        options: ["Energía geotérmica", "Energía solar", "Energía eólica", "Energía hidráulica"],
        answer: 1 // Correcta: Energía solar
    },
    {
        question: "¿Cuál es el elemento más abundante en el universo?",
        options: ["Hidrógeno", "Oxígeno", "Helio", "Carbono"],
        answer: 0 // Correcta: Hidrógeno
    },
    {
        question: "¿Qué país es famoso por sus tulipanes?",
        options: ["Francia", "Países Bajos", "Italia", "España"],
        answer: 1 // Correcta: Países Bajos
    },
    {
        question: "¿Qué sistema de escritura es utilizado por los egipcios antiguos?",
        options: ["Cuneiforme", "Jeroglífico", "Alfabético", "Silábico"],
        answer: 1 // Correcta: Jeroglífico
    },
    {
        question: "¿Cuál es el idioma más hablado en el mundo?",
        options: ["Inglés", "Mandarín", "Español", "Hindi"],
        answer: 1 // Correcta: Mandarín
    },
    {
        question: "¿Quién pintó la 'Última Cena'?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        answer: 1 // Correcta: Leonardo da Vinci
    },
    {
        question: "¿Qué país alberga la Torre Eiffel?",
        options: ["Reino Unido", "Francia", "Alemania", "Italia"],
        answer: 1 // Correcta: Francia
    },
    {
        question: "¿Cuál es la moneda oficial de Japón?",
        options: ["Yuan", "Won", "Yen", "Dólar"],
        answer: 2 // Correcta: Yen
    },
    {
        question: "¿Quién fue el primer hombre en volar en el espacio?",
        options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"],
        answer: 1 // Correcta: Yuri Gagarin
    },
    {
        question: "¿Cuál es el animal nacional de Australia?",
        options: ["Canguro", "Koala", "Emú", "Wombat"],
        answer: 0 // Correcta: Canguro
    },
    {
        question: "¿Qué invento es Alexander Graham Bell famoso por crear?",
        options: ["Teléfono", "Lámpara", "Avión", "Computadora"],
        answer: 0 // Correcta: Teléfono
    },
    {
        question: "¿Cuál es la capital de Egipto?",
        options: ["El Cairo", "África", "Túnez", "Marrakech"],
        answer: 0 // Correcta: El Cairo
    },
    {
        question: "¿Quién es conocido como el 'padre de la historia'?",
        options: ["Heródoto", "Plinio", "Sócrates", "Platón"],
        answer: 0 // Correcta: Heródoto
    },
    {
        question: "¿Cuál es el símbolo químico del hierro?",
        options: ["H", "Fe", "Hg", "Pb"],
        answer: 1 // Correcta: Fe
    },
    {
        question: "¿En qué continente se encuentra el desierto del Sahara?",
        options: ["Asia", "América", "África", "Oceanía"],
        answer: 2 // Correcta: África
    },
    {
        question: "¿Qué evento se conmemora el 4 de julio en Estados Unidos?",
        options: ["Día de la Independencia", "Día de Acción de Gracias", "Navidad", "Día del Trabajo"],
        answer: 0 // Correcta: Día de la Independencia
    },
    {
        question: "¿Cuál es la capital de Rusia?",
        options: ["San Petersburgo", "Moscú", "Kiev", "Varsovia"],
        answer: 1 // Correcta: Moscú
    },
    {
        question: "¿Cuál es la capital de Alemania?",
        options: ["Berlín", "Múnich", "Fráncfort", "Hamburgo"],
        answer: 0 // Correcta: Berlín
    },
    {
        question: "¿Qué continente es el más poblado?",
        options: ["África", "Asia", "Europa", "América"],
        answer: 1 // Correcta: Asia
    },
    {
        question: "¿Cuál es el principal ingrediente del guacamole?",
        options: ["Tomate", "Cebolla", "Aguacate", "Pimiento"],
        answer: 2 // Correcta: Aguacate
    },
    {
        question: "¿Cuál es la capital de Italia?",
        options: ["Milán", "Venecia", "Roma", "Florencia"],
        answer: 2 // Correcta: Roma
    },
    {
        question: "¿Qué gas se produce durante la fotosíntesis?",
        options: ["Dióxido de carbono", "Oxígeno", "Metano", "Nitrógeno"],
        answer: 1 // Correcta: Oxígeno
    },
    {
        question: "¿Cuál es el continente más pequeño?",
        options: ["Oceanía", "Europa", "Antártida", "Asia"],
        answer: 0 // Correcta: Oceanía
    },
    {
        question: "¿Qué famoso libro fue escrito por George Orwell?",
        options: ["Matar a un ruiseñor", "1984", "El gran Gatsby", "Fahrenheit 451"],
        answer: 1 // Correcta: 1984
    },
    {
        question: "¿Quién fue el primer presidente de los Estados Unidos?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        answer: 1 // Correcta: George Washington
    },
    {
        question: "¿Cuál es el océano más pequeño del mundo?",
        options: ["Ártico", "Índico", "Atlántico", "Pacífico"],
        answer: 0 // Correcta: Ártico
    },
    {
        question: "¿Qué instrumento mide la temperatura?",
        options: ["Barómetro", "Termómetro", "Higrómetro", "Anemómetro"],
        answer: 1 // Correcta: Termómetro
    },
    {
        question: "¿Quién pintó 'La noche estrellada'?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Edvard Munch"],
        answer: 1 // Correcta: Vincent van Gogh
    },
    {
        question: "¿Qué es la capital de Argentina?",
        options: ["Buenos Aires", "Santiago", "Lima", "Bogotá"],
        answer: 0 // Correcta: Buenos Aires
    },
    {
        question: "¿Cuál es el metal más ligero?",
        options: ["Aluminio", "Litio", "Sodio", "Magnesio"],
        answer: 1 // Correcta: Litio
    },
    {
        question: "¿Qué famoso físico desarrolló la teoría de la relatividad?",
        options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Niels Bohr"],
        answer: 2 // Correcta: Albert Einstein
    },
    {
        question: "¿Cuál es el país conocido como el 'Techo del Mundo'?",
        options: ["Nepal", "Tíbet", "Chile", "Perú"],
        answer: 1 // Correcta: Tíbet
    },
    {
        question: "¿Cuál es el nombre del primer satélite artificial lanzado al espacio?",
        options: ["Apollo 11", "Hubble", "Sputnik 1", "Voyager 1"],
        answer: 2 // Correcta: Sputnik 1
    },
    {
        question: "¿Cuál es la montaña más alta del mundo?",
        options: ["K2", "Kangchenjunga", "Everest", "Makalu"],
        answer: 2 // Correcta: Everest
    },
    {
        question: "¿Qué océano se encuentra entre África y Australia?",
        options: ["Atlántico", "Índico", "Pacífico", "Ártico"],
        answer: 1 // Correcta: Índico
    },
    {
        question: "¿Qué famoso personaje de Disney vive en el océano?",
        options: ["Mulan", "Ariel", "Cenicienta", "Simba"],
        answer: 1 // Correcta: Ariel
    },
    {
        question: "¿Quién es conocido como el 'Rey del Rock'?",
        options: ["Elvis Presley", "Johnny Cash", "Chuck Berry", "Buddy Holly"],
        answer: 0 // Correcta: Elvis Presley
    },
    {
        question: "¿Qué país es famoso por el sushi?",
        options: ["Corea", "China", "Japón", "Tailandia"],
        answer: 2 // Correcta: Japón
    },
    {
        question: "¿Cuál es el principal ingrediente del pan?",
        options: ["Harina", "Agua", "Levadura", "Sal"],
        answer: 0 // Correcta: Harina
    },
    {
        question: "¿Cuál es el símbolo químico del oro?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: 0 // Correcta: Au
    }

        ];
