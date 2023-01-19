const servicios = [
  {
    id: "1",
    titulo: "Prueba COVID PCR en tiempo real",
    category: "covid",
    imagen:
      "https://img.freepik.com/free-vector/types-coronavirus-rapid-pcr-tests_23-2148545852.jpg",
    precio: 1500,
    oldPrice: 1800,
    descripcionLarga:
      "Método específico para determinar la presencia del virus.  Es recomendada si el paciente tuvo contacto con una persona diagnosticada, incluso si no presenta síntomas. Se requiere la recolección de células infectadas de la nasofaringe y orofaringe del paciente mediante un hisopo.",
    descripcioncorta:
      "Detecta la presencia de material genético viral, la muestra para el análisis se obtiene de la faringe y nasofaringe, siendo la más efectiva para detectar el virus de COVID.",
    resultados: "RESULTADOS DE 24 a 48 horas",
    comentarios:
      "Prueba más confiable para detectar VIRUS COVID-19. Es la prueba solicitada para fines de viajes e intervenciones médicas, entre otras.",
    tipoMuestra: "Muestra de nariz y garganta",
    requerimiento: "Ninguno",
    creadoPorPrueba: "LUZ MARIA",
  },
  {
    id: "2",
    titulo: "PRUEBA DE ANTÍGENO (prueba rápida)",
    category: "covid",
    imagen:
      "https://img.freepik.com/free-vector/family-protected-from-virus_52683-38997.jpg",
    precio: "",
    oldPrice: "",
    tiempoResultado: 30,
    descripcion:
      "Una prueba rápida de antígenos o prueba rápida es una prueba de diagnóstico rápida que directamente detecta la presencia o ausencia de un antígeno, en este caso para detectar la presencia de SARS-CoV-2, el virus que causa COVID-19. Las pruebas rápidas son un tipo de pruebas de flujo lateral que detectan proteínas, lo que las distingue de otras pruebas médicas que detectan anticuerpos (pruebas de anticuerpos) o ácido nucleico (pruebas de ácido nucleico), de tipo laboratorio o punto de atención.",
    descripcioncorta:
      "Una prueba rápida de antígenos o prueba rápida es una prueba de diagnóstico rápida que directamente detecta la presencia o ausencia de un antígeno, en este caso para detectar la presencia de COVID-19.",
    resultados: "RESULTADOS EN 2 horas",
    comentarios:
      "Si tu resultado es POSITIVO se confirma COVID-19. Si tu resultado es NEGATIVO es necesario realizar una PRUEBA DE PCR",
    tipoMuestra: "Muestra de nariz",
    requerimiento: "Ninguno",
  },

  {
    id: "4",
    titulo: "Grupo Sanguíneo y RH",
    category: "rapidas",
    imagen:
      "https://img.freepik.com/vector-gratis/examen-sangre-coronavirus_23-2148540142.jpg",
    precio: 60,
    oldPrice: 70,
    descripcion:
      "Es un método para indicarle cuál es el tipo de sangre que usted tiene. La determinación del grupo sanguíneo se realiza para que usted pueda donar sangre o recibir una transfusión de sangre de manera segura. También se realiza para ver si usted posee una sustancia llamada factor Rh en la superficie de sus glóbulos rojos. No se requiere ayuno para esta prueba.",
    descripcioncorta: "Quieres saber que tipo de sangre y factor Rh eres.",
    resultados: "RESULTADOS EN 2 horas",
    comentarios: "Es fundamental saber que tipo de sangre y factor contamos.",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "Ninguno",
  },

  {
    id: "6",
    titulo: "VDRL",
    category: "rapidas",
    imagen:
      "https://img.freepik.com/free-vector/retrovirusesr-concept-illustration_114360-7567.jpg",
    precio: 70,
    oldPrice: 85,
    descripcion:
      "Es un examen para detectar sífilis, entre otras enfermedades. Mide sustancias (proteínas), llamadas anticuerpos, que su cuerpo puede producir si usted entra en contacto con la bacteria que causa la sífilis.",
    descripcioncorta:
      "Es un examen para detectar sífilis. Mide sustancias (proteínas), llamadas anticuerpos, que su cuerpo puede producir si usted entra en contacto con la bacteria que causa la sífilis.",
    resultados: "RESULTADOS EN 2 horas",
    comentarios:
      "La Sífilis es una enfermedad de transmisión sexual transmitida por una bacteria.",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "No requiere ayuno",
  },
  {
    id: "7",
    titulo: "Prueba Inmunológica de Embarazo (PIE)",
    category: "rapidas",
    imagen:
      "https://img.freepik.com/vector-gratis/cuidado-prenatal-ecografista-escaneando-examinando-mujer-embarazada-mientras-esperaba-que-padre-mirara-monitor-ilustracion-vector-examen-medico-ecografia-temas-prueba-ultrasonido_74855-8535.jpg",
    precio: 100,
    oldPrice: 120,
    descripcion:
      "Es una prueba que mide una hormona llamada gonadotropina coriónica humana (GCH), producida durante el embarazo. Esta hormona aparece en la sangre y en la orina de las mujeres embarazadas incluso ya a los 10 días después de la concepción.",
    descripcioncorta: "Prueba que cualitativa de embarazo",
    resultados: "RESULTADOS EN 30 minutos",
    comentarios:
      "Este es una prueba sencilla cualitativa para detectar presencia de embarazo.",
    tipoMuestra: "Muestra de orina",
    requerimiento: "No requiere ayuno",
  },
  {
    id: "8",
    titulo: "Prueba Antidoping (6 drogas)",
    category: "rapidas",
    imagen:
      "https://img.freepik.com/vector-gratis/prueba-orina-chequeo-enfermedades-hospital-o-laboratorio-clinico_87771-10493.jpg",
    precio: 380,
    oldPrice: 400,
    descripcion:
      "Prueba rápida para detección de abuso de drogas en panel múltiple de 6 elementos, con la que se podrá determinar el uso de cocaína, anfetaminas, marihuana. Panel multidroga empacado en sobre de aluminio que garantiza la integridad de la prueba así como su efectividad, incluye pipeta dosificadora que permite la manipulación segura de la muestra en cuestión.",
    descripcioncorta:
      "Prueba en la cual se hace la detección de 6 tipos de drogas.",
    resultados: "RESULTADOS EN 60 minutos",
    comentarios:
      "Este es una prueba sencilla cualitativa para detectar presencia de de 6 tipos de drogas.",
    tipoMuestra: "Muestra de orina",
    requerimiento: "No requiere ayuno",
  },

  {
    id: "10",
    titulo: "Tiempo de Coagulación",
    category: "rapidas",
    imagen: "https://imagenesrutalab.s3.amazonaws.com/rutalab/PCR_vector.jpg",
    precio: 90,
    oldPrice: 110,
    descripcion:
      "“Consiste en una prueba rápida que puede realizarse al lado de la persona antes, durante y después de la cirugía o de otros procedimientos médicos.",
    descripcioncorta:
      "La prueba del tiempo de coagulación se realiza con fines medicos o preoperatorios.",
    resultados: "RESULTADOS EN 10 minutos",
    comentarios: "Evalúa la actividad de la coagulación de tu cuerpo.",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "No requiere ayuno",
  },
  {
    id: "11",
    titulo: "Biometría Hemática",
    imagen:
      "https://img.freepik.com/vector-gratis/ilustracion-concepto-desarrollo-vacunas_114360-2233.jpg",
    precio: 110,
    oldPrice: 120,
    descripcion:
      "Este examen se hace a la sangre e inspecciona las células que la componen y están presentes en ella como los glóbulos rojos, encargados de transportar oxígeno; los glóbulos blancos, que combaten infecciones, y las plaquetas, que detienen hemorragias mediante la formación de coágulos.",
    resultados: "RESULTADOS EN 2 horas",
    descripcioncorta:
      "Obtiene un conteo sanguíneo que permite evaluar información de las células presentes en la sangre.",
    comentarios:
      "La biometría hemática es un auxiliar en el diagnostico y seguimiento de anemias, leucemias, pacientes con quimioterapias, síndrome febril e infecciones.",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "Ayuno mínimo de 8 horas y máximo de 10 horas",
  },
  {
    id: "13",
    titulo: "Química Sanguínea 6, 12 y 24 elementos",
    imagen:
      "https://img.freepik.com/vector-gratis/cientifico-femenino-dibujado-mano-ilustracion_52683-31879.jpg",
    precio: 600,
    oldPrice: 700,
    descripcion:
      "“La química sanguínea es un análisis de la sangre realizado en el laboratorio para medir cantidades de ciertas sustancias en el organismo como sales, enzimas, grasas o lípidos, hormonas, azúcar o glucosa, proteínas, vitaminas y minerales.",
    descripcioncorta:
      "Es una serie de pruebas de sangre que analizan diversos elementos en el suero sanguíneo.",
    resultados: "RESULTADOS EN el mismo día",
    comentarios:
      "Esta prueba ayuda a diagnosticar ciertos problemas de salud. Si los resultados son anormales, puede apuntar a un problema que necesite ser tratado a la brevedad.",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "Ayuno mínimo de 8 horas y máximo de 10 horas",
  },
];

export default servicios;
