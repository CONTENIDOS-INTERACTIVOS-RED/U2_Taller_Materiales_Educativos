export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad:
      'Diseño de materiales para la educación de la primera infancia',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos del diseño de materiales en la primera infancia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Importancia pedagógica de los materiales en la educación infantil',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Criterios pedagógicos, estéticos y funcionales en el diseño',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Materiales como mediadores del desarrollo integral',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Clasificación y uso pedagógico de los materiales educativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Materiales estructurados y no estructurados',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Objetos de aprendizaje y su intencionalidad didáctica',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Objetos de la naturaleza: uso, adaptación y contextualización',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diseño de experiencias educativas con objetos pedagógicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Fases del diseño de un material educativo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Integración del objeto en una experiencia de aula',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Elaboración de cuadros sinópticos para documentar el proceso creativo',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Mercader Rubio, I. Pérez Esteban, M. D. & Gutiérrez Ángel, N. (2024). Cómo hacer una publicación científica en el ámbito psicológico y educativo: Material docente: (1 ed.). Editorial Universidad de Almería. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/281166 ',
    },
    {
      referencia:
        'Quírell José, M. D. M. (2024). Las Matemáticas ABN a través de sus materiales educativos: los ABN & recursos en educación infantil: (1 ed.). LA LEY Soluciones Legales S.A.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/272469',
    },
    {
      referencia:
        'Sangrà Morer, A. & Girona Campillo, C. (2013). Los materiales de aprendizaje en contextos educativos virtuales: pautas para el diseño tecnopedagógico: ( ed.). Editorial UOC.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/56338',
    },
    {
      referencia:
        'Martínez, Ó. (2022). La emoción de jugar: neuroeducación en acción: (1 ed.). Editorial INDE.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/225302',
    },
    {
      referencia:
        'Carrasco González, R. & Riveros Cornejo, L. (2021). Renovar los procesos educativos en al sociedad del conocimiento digital: (1 ed.). ExLibric. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/221920',
    },
    {
      referencia:
        'Hidalgo, N. (Coord.) & Cañadas, L. (Coord.). (2023). Materiales docentes para el diseño y desarrollo de investigaciones, innovaciones y revisiones sistemáticas en la formación inicial del profesorado: (1 ed.). Dykinson.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/251493',
    },
    {
      referencia:
        'Lazzati, S. C. (2021). El diseño educativo: su aplicación a temas de administración: ( ed.). Ediciones Granica. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/184213',
    },
    {
      referencia:
        'Arrieta, M. Maestre Meyer, M. & Villegas Iriarte, E. (2024). Menos conferencias, más experiencias: diseño educativo conversacional: (1 ed.). Editorial Unimagdalena.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/274016',
    },
    {
      referencia:
        'Elizondo Carmona, C. (2020). Hacia la inclusión educativa en la Universidad: diseño universal para el aprendizaje y la educación de calidad: ( ed.). Ediciones Octaedro, S.L.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/158285',
    },
    {
      referencia:
        'Murcia Rodríguez, M. A. (2020). Diseño instruccional para profes: guía para la innovación educativa con TIC: ( ed.). Ediciones USTA.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/140725',
    },
    {
      referencia:
        'Martínez Pinzón, F. Y. (2019). La importancia de un diseño instruccional para la gestión educativa de personas con deficiencia auditiva en el aprendizaje en línea. Mare Ingenii. Ingenierías, 1 (1), 8-27: ( ed.). Fundación Universitaria San Mateo.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/127844',
    },
    {
      referencia: 'UNICEF. (2019). Aprendizaje a través del juego. ',
      link:
        'https://www.unicef.org/sites/default/files/2019-01/UNICEF-Lego-Foundation-Aprendizaje-a-traves-del-juego.pdf',
    },
    {
      referencia:
        'Gobierno de México, SEP. (2022). Diseño y producción de materiales didácticos. ',
      link:
        'https://dgesum.sep.gob.mx/storage/recursos/planes2022/jXbLJDlLGR-4126.pdf',
    },
    {
      referencia:
        'Montejo, S., et al. (2022). La importancia del material concreto en el aprendizaje. Redalyc. ',
      link: 'https://www.redalyc.org/pdf/4978/497856284008.pdf',
    },
    {
      referencia:
        'Vargas, L. M. (2017). Material concreto y construcción de saberes. Redalyc. ',
      link: 'https://www.redalyc.org/pdf/4978/497856284008.pdf',
    },
    {
      referencia:
        'Pérez-Serrano Flores, V. (2021). El diseño de recursos didácticos digitales: criterios teóricos para su elaboración e implementación. Diálogos sobre educación, 12(22). Redalyc.  ve.scielo.org',
      link: 'https://www.redalyc.org/journal/5534/553471896015/html/',
    },
    {
      referencia:
        'Manrique Orozco, A. M., & Gallego Henao, A. M. (2013). El material didáctico para la construcción de aprendizajes significativos. Revista Colombiana de Ciencias Sociales, 4(1), 101–108. Redalyc.  ',
      link: 'https://www.redalyc.org/pdf/4978/497856284008.pdf',
    },
    {
      referencia:
        'Icaza, J. (2019). El material concreto es la base del aprendizaje. ',
      link: 'https://portal.amelica.org/ameli/journal/591/5912811006/',
    },
    {
      referencia:
        'Redalyc. (2015). La importancia del material didáctico para la construcción de aprendizajes significativos.  ',
      link: 'https://www.redalyc.org/pdf/4978/497856284008.pdf',
    },
    {
      referencia:
        'La utilización de los materiales como estrategia de aprendizaje sensorial en infantil. (2015). Redalyc. ',
      link: 'https://www.redalyc.org/pdf/310/31045568042.pdf',
    },
    {
      referencia: 'Revista de Estilos de Aprendizaje, 13(25), 29-41. ',
      link:
        'https://revistaestilosdeaprendizaje.com/article/download/1491/2872/4887 ',
    },
    {
      referencia:
        'Scielo Chile. (2023). Enlazados con la primera infancia: jugando y aprendiendo en el hogar. Enlazados con la primera infancia. l',
      link:
        'https://www.scielo.cl/scielo.php?pid=S0718-51622023000200370&script=sci_arttext scielo.c',
    },
    {
      referencia:
        'La planificación didáctica y el diseño instruccional en ... Redalyc.  ',
      link: 'https://www.redalyc.org/pdf/658/65830335002.pdf',
    },
    {
      referencia:
        'Castro Pérez, M. C., & Morales Ramírez, M. E. (2015). Los ambientes de aula que promueven el aprendizaje, desde la perspectiva de los niños y niñas escolares. Revista Electrónica Educare. ',
      link: 'https://www.redalyc.org/pdf/1941/194140994008.pdf ',
    },
    {
      referencia:
        'Materiales para el trabajo por rincones en educación infantil. (2020). UVA Investigaciones Educativas.  ',
      link: 'https://uvadoc.uva.es/bitstream/10324/47669/1/TFG-B.1636.pdf',
    },
    {
      referencia:
        'Juego, interacción y material educativo en el nivel Preescolar. (2012). Universidad Alberto Hurtado - Chile. ',
      link:
        'https://siteal.iiep.unesco.org/sites/default/files/sit_investigacion_pdf/1843.pdf ',
    },
    {
      referencia:
        'Universidad Politécnica Salesiana. (2017). Estrategias para desarrollar la creatividad en la educación infantil.  ',
      link:
        'https://dspace.ups.edu.ec/bitstream/123456789/15237/1/UPS-CT007515.pdf',
    },
    {
      referencia:
        'Fundación Universitaria Los Libertadores. (2016). Estrategias de enseñanza creativa. Biblioteca Virtual CLACSO.  ',
      link:
        'https://biblioteca.clacso.edu.ar/Colombia/fce-unisalle/20180225093550/estrategiasen.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Actividad',
      significado: 'Acción planificada con fines educativos.',
    },
    {
      termino: 'Aprendizaje',
      significado:
        'Proceso mediante el cual se adquieren conocimientos o habilidades.',
    },
    {
      termino: 'Contexto',
      significado: 'Entorno en el que se desarrolla el proceso educativo.',
    },
    {
      termino: 'Creatividad',
      significado: 'Capacidad de generar ideas nuevas y originales.',
    },
    {
      termino: 'Currículo',
      significado:
        'Conjunto de objetivos, contenidos y métodos organizados para la enseñanza.',
    },
    {
      termino: 'Didáctica',
      significado:
        'Disciplina que estudia los métodos y técnicas de enseñanza.',
    },
    {
      termino: 'Evaluación',
      significado:
        'Proceso de recogida y análisis de información para tomar decisiones educativas.',
    },
    {
      termino: 'Experiencia',
      significado: 'Vivencia que deja aprendizajes significativos.',
    },
    {
      termino: 'Guía',
      significado:
        'Documento o persona que orienta un proceso de enseñanza-aprendizaje.',
    },
    {
      termino: 'Infancia',
      significado:
        'Etapa del desarrollo humano desde el nacimiento hasta los 6 años aproximadamente.',
    },
    {
      termino: 'Innovación',
      significado:
        'Introducción de novedades para mejorar los procesos educativos.',
    },
    {
      termino: 'Instrumento',
      significado: 'Recurso que se utiliza para realizar una tarea educativa.',
    },
    {
      termino: 'Juego',
      significado: 'Actividad lúdica que favorece el aprendizaje en los niños.',
    },
    {
      termino: 'Material',
      significado: 'Elemento físico o digital que apoya el proceso educativo.',
    },
    {
      termino: 'Metodología',
      significado:
        'Conjunto de estrategias y técnicas utilizadas para enseñar.',
    },
    {
      termino: 'Objetivo',
      significado:
        'Meta o propósito que se pretende alcanzar con una acción educativa.',
    },
    {
      termino: 'Pedagogía',
      significado: 'Ciencia que estudia la educación y cómo mejorarla.',
    },
    {
      termino: 'Proceso',
      significado: 'Conjunto de etapas ordenadas hacia un fin educativo.',
    },
    {
      termino: 'Recurso',
      significado: 'Medio utilizado para facilitar el aprendizaje.',
    },
    {
      termino: 'Síntesis',
      significado:
        'Resumen que integra y organiza la información clave de un tema.',
    },
  ],
}
