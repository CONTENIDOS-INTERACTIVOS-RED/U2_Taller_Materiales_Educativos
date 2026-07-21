<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Clasificación y uso pedagógico de los materiales educativos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-6.p-4(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el ámbito de la educación infantil, los materiales didácticos desempeñan un rol esencial en la construcción del conocimiento. Su correcta clasificación, como materiales permanentes, informativos, experimentales o tecnológicos, permite seleccionar recursos adecuados a la intencionalidad pedagógica y al contexto del aula. Además, su uso pedagógico consciente potencia aprendizajes significativos al promover la exploración, la manipulación y la interacción.
        p Clasificación de materiales:
    
    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/3.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="21.2%" y="42.5%" numero="+")
                h5 Material informativo
                p Textos, enciclopedias o pizarras visuales, esenciales para introducir conceptos y fomentar la alfabetización inicial.
    
              .bg-color-white.box-shadow.p-3(x="29.2%" y="14.3%" numero="+")
                h5 Material experimental
                p Recursos manipulativos como bloques o elementos naturales que facilitan la indagación sensorial y científica.
    
              .bg-color-white.box-shadow.p-3(x="78.3%" y="24.7%" numero="+")
                h5 Material tecnológico
                p Herramientas digitales y aplicaciones educativas que complementan la enseñanza presencial con contenidos interactivos.
    
              .bg-color-white.box-shadow.p-3(x="63.2%" y="88.6%" numero="+")
                h5 Material permanente
                p Objetos duraderos como pizarras, reglas o tabletas, usados para actividades de rutina.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8
        h2 Uso pedagógico efectivo
        p(data-aos="fade-left").mb-5 La selección debe responder a objetivos claros: explorar sentidos, desarrollar habilidades motrices, inducir reflexión o favorecer el trabajo colaborativo. Por ejemplo, los materiales experimentales concretos “fomentan aprendizajes significativos mediante la manipulación y la observación”. Asimismo, los recursos digitales amplían oportunidades para el aprendizaje interactivo cooperativo.
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En suma, clasificar y utilizar materiales con propósito pedagógico no solo facilita una enseñanza estructurada, sino que también empodera al docente en la creación de experiencias integrales que estimulan el desarrollo cognitivo, social, emocional y motriz en los niños y las niñas.
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Materiales estructurados y no estructurados
    
    p.mb-5 La clasificación de los materiales educativos en estructurados y no estructurados constituye una herramienta clave para enriquecer las experiencias pedagógicas en la educación infantil.

    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") Materiales estructurados y no estructurados
            p.mb-4(data-aos="fade-right") En el PDF <b>Materiales estructurados y no estructurados</b>, se analizan las características, usos y beneficios de ambos tipos de recursos, así como su impacto en el desarrollo integral de los niños. A través de ejemplos y actividades prácticas, se brinda a los futuros docentes una base sólida para seleccionar, combinar y adaptar estos materiales según los objetivos de aprendizaje y las particularidades del contexto educativo.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Materiales estructurados y no estructurados.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/6.png', alt='')

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Objetos de aprendizaje y su intencionalidad didáctica
    
    .bg-full-width.bg-color-9
      .px-4.px-md-5.pb-md-3
        p Los objetos de aprendizaje son recursos, físicos o digitales, diseñados con un propósito educativo claro y estructurado para facilitar el proceso de enseñanza-aprendizaje (Chiappe et al., 2007). A diferencia de los elementos sueltos, estos objetos contienen componentes definidos: contenido, actividad orientadora y contexto.
        p.mb-5 Características de los objetos de aprendizaje:

        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Contenido explicativo
                p.mb-0.text-center Incluyen información organizada que permite comprender un concepto o habilidad (como algoritmos o fenómenos científicos).
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Actividad intencionada
                p.mb-0.text-center Proponen tareas o ejercicios que guían al estudiante en la construcción activa del conocimiento.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/9.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Contextualización
                p.mb-0.text-center Proporciona un marco o historia que dota de sentido a la actividad.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Esta estructura pedagógica concuerda con el enfoque de aprendizaje significativo, según el cual los niños construyen conocimiento relacionando nuevo contenido con sus experiencias previas. En la educación infantil, los objetos de aprendizaje promueven procesos cognitivos y socioemocionales cuando se seleccionan en función de las necesidades del grupo y se acompañan adecuadamente.
    
    h2(data-aos="fade-left").mb-5 Ejemplo práctico. “Contando con texturas”

    .bg-full-width.bg-color-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Componente de contenido: tarjetas con números (1-10) y texturas asociadas (arena, telas, papel).
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Actividad: el niño recorre la tarjeta, nombra la textura y cuenta hasta el número indicado mientras toca la superficie.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Contextualización: se plantea como un recorrido sensorial por un "bosque mágico" donde cada textura representa un entorno.
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/11.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-color-13.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Este objeto integra desarrollo numérico, exploración sensorial y lenguaje descriptivo en un solo recurso. Además, puede reutilizarse para clasificaciones (por color o tacto), fomentando la sostenibilidad del diseño.
    
    p.mb-5 Beneficios pedagógicos:

    .bg-full-width.bg-color-9
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/12.svg" alt="" style="width: 90px")
              h5.text-center Promueven el aprendizaje multisensorial
              p.mb-0.text-center Combinan lo visual, táctil y numérico, fortaleciendo el procesamiento desde las múltiples inteligencias.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/13.svg" alt="" style="width: 90px")
              h5.text-center Favorecen la autonomía y la reflexión
              p.mb-0.text-center El alumno regresa sobre las acciones ejecutadas al interpretar el objeto y evaluar su propio proceso.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/14.svg" alt="" style="width: 90px")
              h5.text-center Estimulan habilidades blandas
              p.mb-0.text-center Si se trabaja en pares o grupos, el objeto fomenta la comunicación, cooperación y empatía entre niños.

        p.mb-5 Consideraciones para su diseño:

    .bg-full-width.bg-color-14
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.order-2
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Deben ser reutilizables y adaptables, como señala Chiappe et al. (2007), para favorecer su eficiencia educativa.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 La selección de componentes (texturas, imágenes, números) debe responder a criterios pedagógicos, ajustados a los objetivos de la unidad.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Se recomienda incluir una guía docente con sugerencias variadas (puede explorar en solitario, en parejas o ubicar el objeto en rincones didácticos).
              .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema2/15.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-color-6.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 <b>Conclusión</b>. Los objetos de aprendizaje representan un avance en el diseño de materiales educativos intencionales, combinando conocimiento, actividad y contexto en un recurso atractivo y funcional. Cuando se diseñan con intencionalidad, estos objetos potencian múltiples dimensiones del desarrollo infantil, cognitiva, motora, socioemocional y comunicativa, consolidando procesos de enseñanza significativos y preparados para la diversidad del aula.
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Objetos de la naturaleza: uso, adaptación y contextualización
    
    p.mb-5 El uso de objetos de la naturaleza en la educación infantil ofrece una vía pedagógica poderosa para fomentar el aprendizaje significativo y el vínculo con el entorno.

    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") Objetos de la naturaleza: uso, adaptación y contextualización
            p.mb-4(data-aos="fade-right") En el PDF <b>Objetos de la naturaleza</b>, se presentan estrategias prácticas para integrar elementos naturales en el aula, potenciando el desarrollo cognitivo, sensorial, emocional y ambiental de los niños. A través de ejemplos contextualizados y actividades adaptadas, se destaca el valor de estos recursos como mediadores activos del desarrollo integral y promotores de una educación consciente y sostenible.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Objetos de la naturaleza: uso, adaptación y contextualización.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/16.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Material_did%C3%A1ctico" target="_blank" rel="noopener noreferrer") Material educativo. (2023). Wikipedia.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ve.scielo.org/scielo.php?pid=S2739-00632025000202055&script=sci_arttext" target="_blank" rel="noopener noreferrer") Larreategui, E. (2023). Relación entre materiales didácticos y el rendimiento académico en primaria. SciELO Venezuela. 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.scielo.br/j/er/a/yYXT6zsLtYpYQzZfgmkCMmF/" target="_blank" rel="noopener noreferrer") Scielo Brasil. (2023). Los materiales usados en escuelas de Educación infantil. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.cardenalcisneros.es/article/view/5884" target="_blank" rel="noopener noreferrer") Rodrigo Moriche, M., & Gómez Redondo, C. (2023). El material no estructurado en la práctica educativa dentro del primer ciclo de Educación infantil. 



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Realia_%28objetos%29" target="_blank" rel="noopener noreferrer") Wikipedia. (2024). Realia (objetos). 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ve.scielo.org/scielo.php?pid=S2739-00632024000200116&script=sci_arttext" target="_blank" rel="noopener noreferrer") Scielo Venezuela. (2024). Impacto del juego con arena como recurso didáctico natural en el fomento del pensamiento crítico. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.scielo.br/j/er/a/yYXT6zsLtYpYQzZfgmkCMmF/" target="_blank" rel="noopener noreferrer") Scielo Brasil. (2023). Los materiales usados en escuelas de Educación infantil. Recuperado de 



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=sN7CFDzV_t0" target="_blank" rel="noopener noreferrer") EDUCAGRATIS (2021, 18 de septiembre). Importancia del uso del material didáctico en educación inicial. [Vídeo] YouTube.            



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
