<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Diseño de experiencias educativas con objetos pedagógicos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p El diseño de experiencias educativas con objetos pedagógicos exige una planificación cuidadosa que articula propósito, creatividad y aprendizaje significativo para los niños. Estos objetos, ya sean físicos o digitales, sirven como herramientas concretas que estructuran la exploración, la curiosidad y la reflexión del alumno.
    p.mb-5 Para garantizar experiencias enriquecedoras, es fundamental combinar tres elementos claves:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Contextualización motivadora")
            p El objeto debe insertarse en una narrativa o escenario que otorgue sentido a su manipulación. Por ejemplo, convertir fichas con imágenes de animales en un safari imaginario estimula la imaginación, el lenguaje descriptivo y el vínculo emocional con el aprendizaje (Scielo Chile, 2023).
    
          .div(titulo="Secuencia pedagógica progresiva")
            p Una experiencia efectiva se organiza en fases, exploración, manipulación y reflexión. Una investigación en contextos STEM reporta que esta estructura facilita no solo la comprensión, sino también el desarrollo del pensamiento científico incipiente.
    
          .div(titulo="Evaluación activa")
            p Los objetos pueden incluir mecanismos de autoevaluación, como registros de pegatinas, dibujos o narraciones, que promueven la metacognición y ofrecen al docente información sobre el nivel de comprensión de los niños (SciELO Chile, 2023).
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Cuando estas tres dimensiones operan en conjunto, se generan experiencias integrales que estimulan el desarrollo cognitivo, socioemocional y expresivo. Además, al diseñar objetos con flexibilidad y capacidad de adaptación, el docente fortalece en sus estudiantes habilidades blandas como la autonomía, la creatividad, el pensamiento crítico y la colaboración.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Fases del diseño de un material educativo
    
    p.mb-5 El diseño de materiales educativos en la educación infantil, exige un proceso reflexivo y estructurado para garantizar que cada recurso tenga un propósito pedagógico claro y contribuya al aprendizaje significativo. El reconocido modelo ADDIE, Análisis, Diseño, Desarrollo, Implementación y Evaluación, ofrece un marco sólido y adaptable a esta realidad.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Análisis
              p En esta fase inicial se reúnen datos sobre los objetivos educativos, el perfil de los niños (edad, intereses, necesidades) y el contexto (espacio, tiempo, recursos disponibles). Además, se identifican las competencias a desarrollar y se evalúan las limitaciones materiales y tecnológicas del entorno. Este diagnóstico permite una selección precisa de los materiales a diseñar.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Diseño
              p Aquí se establecen los objetivos específicos, la estructura del material y las actividades a incluir. Se define el tipo de objeto (físico, digital, sensorial) y se eligen criterios pedagógicos, técnicos y estéticos. Según Redalyc, este es el momento en que el docente transita del análisis a la acción, definiendo contenido, formato y secuencia didáctica.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Desarrollo
              p Implica la producción del prototipo del material. Si es digital, se generan recursos interactivos; si es físico, se seleccionan y ensamblan materiales seguros y apropiados para los niños. Según un estudio de SciELO Brasil, esta etapa requiere varias pruebas que ajusten interactividad, función y estética antes de su uso definitivo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Implementación
              p Se integra el material en el aula. El docente presenta el objeto, explica su uso y orienta a los niños para explorarlo. Durante esta fase, se observa la dinámica del grupo, se registran dificultades y se llevan a cabo ajustes en tiempo real para mejorar la experiencia y asegurar su pertinencia educativa.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Evaluación
              p Este proceso es formativo y continuo: se recogen datos sobre la respuesta de los niños, su interés, habilidades desarrolladas y logros alcanzados. Finalmente, se evalúa el diseño del material. ¿Se cumplen los objetivos? ¿Resulta adecuado para el grupo? ¿Qué mejoras se pueden realizar? El ciclo completo concluye con ajustes que enriquecen futuras iteraciones del recurso.
    
    .row.justify-content-center
      .col-lg-10
        div.bg-color-8.p-5
          h2(data-aos="fade-left") Ejemplo ilustrativo.
          .row.justify-content-center.align-items-center.bg-color-5.bor-3
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-lg-9(data-aos="fade-left").order-2
                  h5 Material a diseñar:
                  p.mb-0 “Puzzle sensorial de emociones” para niños de 4 años.
                .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                  img.img-fluid(src='@/assets/curso/tema3/8.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p <b>Análisis</b>: se detectó dificultad en la expresión emocional en un grupo de 4-5 años.
    
          .div(titulo="Paso 2")
            p <b>Diseño</b>: piezas con texturas y rostros expresivos, acompañadas de guía de uso y secuencia de actividades.
    
          .div(titulo="Paso 3")
            p <b>Desarrollo</b>: se elabora un prototipo con cartón, telas y texturas variadas; se corrigen bordes y textura, según retornamientos de colegas.
    
          .div(titulo="Paso 4")
            p <b>Implementación</b>: se presenta el puzzle en clase, los niños lo manipulan, identifican emociones y narran situaciones vividas.
          .div(titulo="Paso 5")
            p <b>Evaluación</b>: el docente observa mayor vocabulario emocional y propone mejoras visuales antes de su utilización permanente.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-1.p-5(data-aos="fade-left")
          p.mb-0 <b>Conclusión</b>. El modelo ADDIE permite diseñar materiales didácticos efectivos y coherentes con las etapas del desarrollo infantil. Cada fase exige reflexión, prueba y ajuste, asegurando que los recursos favorezcan el aprendizaje cognitivo, emocional y social de los niños, al tiempo que desarrollan habilidades profesionales importantes en los futuros docentes.
    
    .titulo-figura.mb-4
      h5 Tabla 2.
      span Modelo ADDIE: fases del diseño de materiales educativos
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-3.text-center.text-white Fase
            th.bg-color-3.text-center.text-white Descripción
        tbody.bg-color-8
          tr
            th A - Análisis.
            td Identificación de necesidades educativas, perfil de los estudiantes y condiciones del entorno.
          tr
            th D - Diseño.
            td Planificación de objetivos, estructura del contenido y selección de medios y recursos.
          tr
            th D - Desarrollo.
            td Producción del material, elaboración de prototipos y selección de herramientas.
          tr
            th I - Implementación.
            td Aplicación del material en el contexto educativo real y orientación al estudiante.
          tr
            th E - Evaluación.
            td Revisión de resultados, observación de uso y retroalimentación para mejoras.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Integración del objeto en una experiencia de aula
    
    p.mb-5 La integración de un objeto pedagógico en el aula transforma un recurso aislado en un elemento central de la experiencia educativa. Este proceso involucra no solo la selección del objeto, sino también su diseño de contexto, su articulación con objetivos educativos y su evaluación participativa, todo dentro de un entorno significativo para los niños.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Selección y contextualización
              p El docente comienza identificando un objeto apropiado, como cubos sensoriales, regletas de Cuisenaire o fichas temáticas, que resuene con los intereses y necesidades del grupo. Luego, lo inserta en un contexto narrativo: por ejemplo, los cubos representan “piedras mágicas” para clasificar por color o tamaño durante una “expedición” en el aula. Esta contextualización promueve motivación emocional y sentido del propósito (Castro Pérez & Morales Ramírez, 2015).
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Diseño de actividades secuenciadas
              p La experiencia se estructura en fases: exploración libre del objeto, actividades dirigidas y cierre reflexivo. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Inicio</b>: presentación e invitar a observar y manipular.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Desarrollo</b>: retos grupales o individuales, como construir patrones o comparar cantidades.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Cierre</b>: los niños comparten lo aprendido y reflexionan sobre su experiencia.
              p Investigaciones sobre uso de objetos han demostrado cómo este enfoque guía la construcción del pensamiento (Aprendizaje basado en objetos, 2021).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Organización del espacio y dinámica de aula
              p Un ambiente cuidadosamente organizado, como rincones temáticos bien definidos, facilita la integración del objeto en la rutina diaria. En áreas específicas con materiales accesibles, los niños desarrollan autonomía, exploración y colaboración. Se observa un entorno donde los estudiantes interactúan sin necesidad de supervisión constante del docente (espacios de trabajo por rincones).
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Evaluación observacional y adaptativa
              p La integración efectiva requiere evaluación constante del uso y el impacto del objeto. El docente realiza observación participante, identifica nivel de interés, habilidades desarrolladas y dificultades. Este proceso, tanto presencial como en registros narrativos o fotográficos, permite ajustar actividades e incluir más retos o variaciones según las respuestas de los estudiantes (Redención, evaluación mixta, Chile).
    
    h2(data-aos="fade-left").mb-5 Ejemplo práctico: mini laboratorio de texturas con cajas exploradoras
    
    .bg-full-width.bg-color-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.order-2
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Objeto central</b>: cajas con materiales naturales y artificiales (arena, telas, botones, pelotas).
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Contexto</b>: “viaje por una isla desconocida” donde los niños descubren terrenos diferentes.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Fases</b>:
                ol.lista-ol.ms-5
                  li.d-flex 
                    span.text-bold 1. 
                    p.mb-0 <b>Exploración libre</b>: manipulación asequible.
                  li.d-flex 
                    span.text-bold 2. 
                    p.mb-0 <b>Actividades dirigidas</b>: clasificar por textura, agrupar por suavidad y describir sensaciones.
                  li.d-flex 
                    span.text-bold 3. 
                    p.mb-0 <b>Reflexión</b>: compartir comparaciones sobre cómo se sintieron y qué descubrieron. 
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Evaluación</b>: mediante observación, registros de participación, vocabulario empleado y cooperación entre pares.

              .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema3/15.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-color-13.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Integrar un objeto pedagógico de forma intencional en el aula convierte una actividad común en una experiencia rica, significativa y multidimensional. Este enfoque promueve el desarrollo cognitivo, social y emocional de los niños, al tiempo que fortalece la práctica docente analítica y flexible. La clave está en contextualizar, secuenciar, situar y reflexionar para aprovechar todo el potencial educativo de cada objeto.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Elaboración de cuadros sinópticos para documentar el proceso creativo
    
    p.mb-5 Para conocer sobre esta temática, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.scielo.cl/scielo.php?pid=S0718-07052022000200311&script=sci_arttext" target="_blank" rel="noopener noreferrer") Scielo Chile. (2022). Revisión bibliográfica sobre investigaciones relacionadas con materiales didácticos.  


            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Dise%C3%B1o_instruccional" target="_blank" rel="noopener noreferrer") Diseño instruccional. (s. f.). Wikipedia.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.scielo.br/j/er/a/yYXT6zsLtYpYQzZfgmkCMmF/" target="_blank" rel="noopener noreferrer") Los materiales usados en escuelas de Educación infantil. SciELO Brasil.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repositorio.unan.edu.ni/14293/" target="_blank" rel="noopener noreferrer") Mora Flores, J. del S., & Serrato, M. del S. (2019). El cuadro sinóptico como estrategia de comprensión lectora en educación secundaria. Universidad Nacional Autónoma de Nicaragua.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.researchgate.net/publication/350716462" target="_blank" rel="noopener noreferrer") Aprendizaje basado en objetos en Educación infantil: evaluación de una estrategia de intervención. (2021). Reidics. 

            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=n2kgNfxTEvE" target="_blank" rel="noopener noreferrer") Armartinell. (2020, 2 de agosto). Desarrollo de experiencias educativas virtuales. [Video] YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Cuál es el propósito principal de un cuadro sinóptico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Organizar jerárquicamente información de forma visual.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Evaluar el rendimiento académico de los estudiantes.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Registrar asistencia y participación.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Presentar informes administrativos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué elemento se debe definir primero al construir un cuadro sinóptico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El tema central del contenido.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Los colores a usar en el diseño.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'El tipo de letra del texto.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La extensión del documento.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes beneficios aporta el uso de cuadros sinópticos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Facilitan la comprensión y síntesis de información.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Eliminan la necesidad de libros de texto.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Sustituyen completamente las exposiciones orales.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Aumentan la cantidad de contenido sin reducirlo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Qué caracteriza a un cuadro sinóptico bien elaborado?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Claridad, jerarquía y conexión lógica entre conceptos.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Uso exclusivo de imágenes y gráficos.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Presentación en una sola columna textual.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Desarrollo de ideas de forma desorganizada.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cómo puede emplearse un cuadro sinóptico en la educación infantil?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Para representar el proceso creativo de un proyecto.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Para corregir exámenes escritos.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Como plan de alimentación escolar.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Para decorar las paredes del aula.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
