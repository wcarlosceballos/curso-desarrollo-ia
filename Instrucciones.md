Actúa simultáneamente como:

1. Diseñador instruccional especializado en educación por competencias.
2. Experto en diseño de Objetos Virtuales de Aprendizaje (OVA).
3. Especialista en UX/UI educativa.
4. Desarrollador senior Frontend especializado en HTML5, CSS3 y JavaScript vanilla.
5. Experto en evaluación formativa y auténtica.
6. Especialista en accesibilidad educativa bajo WCAG 2.2 AA.
7. Experto en metodologías activas, Bloom revisada, DUA y aprendizaje basado en retos.
8. Desarrollador de experiencias educativas offline-first.

## CONTEXTO

Se dispone de un OVA educativo denominado:

"Desarrollo con IA — El Nuevo Programador"

Autor:
Carlos Ceballos

El OVA está construido actualmente con:

* HTML5
* CSS3
* JavaScript vanilla
* Sin backend
* Sin framework obligatorio
* Sin dependencias externas obligatorias
* Debe poder ejecutarse localmente abriendo `index.html`
* Debe funcionar preferiblemente sin conexión a Internet.

El proyecto actual contiene aproximadamente:

* `index.html`
* `leccion1.html`
* `leccion2.html`
* `leccion3.html`
* `evaluacion.html`
* `css/style.css`

Estas rutas son **relativas al OVA**: los archivos están dentro de la carpeta
`ova/` del repositorio. En el repositorio completo se ven como
`ova/index.html`, `ova/leccion1.html`, `ova/css/style.css`, etc.

El contenido actual está organizado en tres días:

### Día 1 — Fundamentos de IA y Prompt Engineering

Competencia:

"Dirige modelos de IA con criterio profesional."

Contenidos:

* impacto de la IA en el desarrollo de software;
* LLM;
* tokens;
* parámetros;
* temperatura;
* prompts;
* ventana de contexto;
* multimodalidad;
* razonamiento;
* alucinaciones;
* latencia;
* selección de modelos;
* prompt engineering;
* vibe coding vs ingeniería de software.

Evidencia:

Crear un prompt profesional utilizando:

1. Rol
2. Contexto
3. Tarea
4. Restricciones
5. Formato de salida

### Día 2 — Harness Engineering y Spec-Driven Development

Competencias:

* Configura un entorno de desarrollo asistido.
* Desarrolla siguiendo Spec-Driven Development.

Contenidos:

* comandos personalizados;
* Agent Skills;
* MCP;
* Chrome DevTools;
* Context7;
* GitHub;
* Figma;
* Supabase;
* Spec-Driven Development;
* Spec-first;
* Spec-anchored;
* Spec-as-source;
* EARS;
* Constitución;
* especificación;
* clarificación;
* planificación;
* tareas;
* implementación;
* validación.

Evidencia:

Crear:

* `spec.md`
* `plan.md`
* `tasks.md`

para una mini aplicación.

### Día 3 — Multiagentes

Competencia:

"Coordina sistemas multiagentes con permisos y flujo SDD."

Contenidos:

* agentes;
* subagentes;
* agentes principales;
* agentes especializados;
* coordinador;
* planificador;
* implementador;
* revisor;
* permisos;
* flujo multiagente;
* arquitectura;
* contexto;
* delegación.

Evidencia:

Diseñar y documentar una arquitectura multiagente con permisos.

---

# PROBLEMA ACTUAL

El OVA actual funciona principalmente como un documento web.

Presenta información mediante:

* títulos;
* párrafos;
* listas;
* tablas;
* botones;
* algunas tarjetas.

La evaluación actual solamente contiene preguntas de selección simple.

Esto NO es suficiente para una experiencia pedagógica por competencias.

El objetivo es transformar completamente la experiencia sin perder el contenido conceptual existente.

---

# OBJETIVO PRINCIPAL

Rediseña y reconstruye el OVA para convertirlo en una:

**EXPERIENCIA PEDAGÓGICA INTERACTIVA, POR COMPETENCIAS, BASADA EN RETOS Y CON APRENDIZAJE ACTIVO.**

No quiero simplemente una página más bonita.

Quiero que el estudiante:

1. Explore.
2. Comprenda.
3. Tome decisiones.
4. Practique.
5. Se equivoque.
6. Reciba retroalimentación.
7. Corrija.
8. Construya productos.
9. Demuestre competencias.
10. Obtenga evidencias de aprendizaje.

---

# PRINCIPIO PEDAGÓGICO CENTRAL

Aplicar el ciclo:

CONTEXTO
↓
RETO
↓
EXPLORACIÓN
↓
CONCEPTO
↓
PRÁCTICA GUIADA
↓
PRÁCTICA AUTÓNOMA
↓
RETROALIMENTACIÓN
↓
EVIDENCIA
↓
EVALUACIÓN
↓
REFLEXIÓN

Cada módulo debe seguir este patrón.

No presentar grandes bloques de teoría de manera continua.

Convertir el contenido en microaprendizajes.

---

# METODOLOGÍAS QUE DEBES INTEGRAR

Utiliza de manera coherente:

* Aprendizaje basado en retos.
* Aprendizaje activo.
* Microlearning.
* Bloom revisada.
* DUA — Diseño Universal para el Aprendizaje.
* Evaluación formativa.
* Evaluación auténtica.
* Aprendizaje por competencias.
* Metacognición.

No es necesario mostrar estos nombres constantemente al estudiante.

Deben estar incorporados en el diseño de la experiencia.

---

# NUEVA EXPERIENCIA DEL ESTUDIANTE

Al entrar a `index.html`, no debe aparecer inmediatamente un bloque largo de teoría.

Debe aparecer un:

## PANEL DE BIENVENIDA

Mostrar:

"Desarrollo con IA — El Nuevo Programador"

Subtítulo:

"Aprende a dirigir, verificar y coordinar sistemas de IA para desarrollar software con criterio profesional."

Mostrar:

* nivel inicial;
* duración estimada;
* competencias;
* ruta de aprendizaje;
* progreso;
* botón "Comenzar diagnóstico".

---

# DIAGNÓSTICO INICIAL

Crear una evaluación diagnóstica de aproximadamente 8-10 preguntas.

No debe generar una nota definitiva.

Debe determinar el nivel inicial:

* Explorador
* Practicante
* Desarrollador asistido
* Arquitecto de IA

Mostrar al finalizar:

"Tu punto de partida"

y recomendar una ruta.

Guardar resultado en `localStorage`.

---

# MAPA DE APRENDIZAJE

Crear una interfaz visual con tres módulos:

### MÓDULO 1

"Dirigir la IA"

### MÓDULO 2

"Construir con especificaciones"

### MÓDULO 3

"Coordinar agentes"

Cada módulo debe mostrar:

* competencia;
* objetivos;
* progreso;
* actividades completadas;
* evidencia;
* nivel alcanzado.

---

# MÓDULO 1 — DIRIGIR LA IA

Transformar el contenido actual del Día 1.

## Actividad 1 — ¿Qué harías tú?

Presentar un escenario:

"Un desarrollador le pide a una IA que construya una aplicación completa con una instrucción de una sola línea."

Ofrecer varias decisiones.

Después de cada respuesta:

* indicar si es adecuada;
* explicar por qué;
* mostrar la consecuencia profesional.

---

## Actividad 2 — Descubre el LLM

Crear una representación visual sencilla:

PROMPT
↓
TOKENS
↓
MODELO
↓
PROBABILIDADES
↓
RESPUESTA

Permitir hacer clic sobre cada elemento.

Cada elemento debe mostrar una explicación breve.

---

## Actividad 3 — Detecta la alucinación

Mostrar varias respuestas generadas por una IA.

El estudiante debe identificar:

* respuesta confiable;
* respuesta dudosa;
* posible alucinación.

Mostrar retroalimentación explicando qué señales permiten detectar el problema.

---

## Actividad 4 — Constructor de prompts

Crear un formulario interactivo con cinco componentes:

1. Rol
2. Contexto
3. Tarea
4. Restricciones
5. Formato

El estudiante debe completar cada campo.

Mostrar en tiempo real el prompt resultante.

Agregar botón:

"Evaluar mi prompt"

El sistema debe comprobar:

* que estén presentes los cinco componentes;
* claridad;
* especificidad;
* restricciones;
* formato esperado.

Generar una puntuación de 0-100.

Mostrar recomendaciones.

Permitir:

"Mejorar mi prompt"

---

## RETO DEL MÓDULO 1

Crear un prompt profesional para resolver un problema real de desarrollo de software.

El estudiante debe construirlo desde cero.

Al finalizar:

* evaluar;
* retroalimentar;
* guardar evidencia;
* marcar competencia.

---

# MÓDULO 2 — HARNESS + SDD

No limitarse a explicar SDD.

Convertirlo en un laboratorio.

## Actividad 1 — Ordena el proceso

Mostrar tarjetas:

* Constitución
* Spec
* Clarificación
* Plan
* Tasks
* Implementación
* Validación

El estudiante debe arrastrarlas al orden correcto.

Al terminar:

mostrar explicación del flujo.

---

# ACTIVIDAD 2 — CONSTRUYE UNA SPEC

Presentar un problema:

"Crear una mini aplicación de Diario de Estudio."

Guiar al estudiante paso a paso.

Preguntar:

¿Qué debe hacer?

¿Qué usuario tendrá?

¿Qué datos manejará?

¿Qué restricciones existen?

¿Qué comportamiento debe cumplir?

Construir progresivamente un `spec.md`.

---

# ACTIVIDAD 3 — EARS

Presentar requisitos incompletos.

El estudiante debe convertirlos en requisitos verificables.

Ejemplo conceptual:

"El usuario debe poder guardar una nota."

Convertirlo en una estructura EARS adecuada.

Mostrar feedback.

---

# ACTIVIDAD 4 — SPEC → PLAN

Tomar automáticamente la especificación construida por el estudiante y mostrar cómo se transforma en un plan.

Permitir editar el plan.

---

# ACTIVIDAD 5 — PLAN → TASKS

Convertir el plan en tareas.

Mostrar:

Tarea
Descripción
Dependencias
Estado

Permitir marcar tareas.

---

# RETO DEL MÓDULO 2

Construir una mini especificación completa:

* `spec.md`
* `plan.md`
* `tasks.md`

El sistema debe permitir visualizar y descargar estos archivos.

Guardar también la evidencia en `localStorage`.

---

# MÓDULO 3 — SISTEMAS MULTIAGENTES

Transformar el Día 3 en un laboratorio visual.

## ACTIVIDAD 1 — ¿QUIÉN HACE QUÉ?

Mostrar agentes:

COORDINADOR
PLANIFICADOR
IMPLEMENTADOR
REVISOR

Permitir arrastrar responsabilidades hacia cada agente.

Mostrar feedback.

---

# ACTIVIDAD 2 — SIMULADOR MULTIAGENTE

Crear una animación o flujo visual:

USUARIO
↓
COORDINADOR
↓
PLANIFICADOR
↓
IMPLEMENTADOR
↓
REVISOR
↓
COORDINADOR
↓
RESULTADO

Cada agente debe poder seleccionarse.

Mostrar:

* misión;
* permisos;
* entrada;
* salida;
* restricciones.

---

# ACTIVIDAD 3 — PERMISOS

Presentar diferentes acciones:

* leer archivos;
* editar código;
* ejecutar tests;
* modificar especificaciones;
* desplegar;
* revisar.

El estudiante debe asignar permisos a cada agente.

El sistema debe detectar configuraciones inseguras.

Ejemplo:

"No permitas que el revisor modifique el código."

Explicar el principio de mínimo privilegio.

---

# ACTIVIDAD 4 — DETECTA EL ERROR

Presentar arquitecturas multiagente con errores.

Ejemplos:

* agente sin permisos adecuados;
* coordinador modificando directamente código;
* implementador sin capacidad de ejecutar pruebas;
* revisor que también modifica el sistema.

El estudiante debe detectar el problema.

---

# RETO FINAL DEL MÓDULO 3

Diseñar un sistema multiagente completo.

Debe incluir:

* coordinador;
* planner;
* implementer;
* reviewer;
* responsabilidades;
* permisos;
* flujo;
* contexto;
* entradas;
* salidas.

Generar automáticamente un diagrama visual y una documentación resumida.

---

# EVALUACIÓN FINAL

Reemplazar la actual evaluación de cuatro preguntas por una evaluación por competencias.

Debe contener diferentes tipos de actividades:

* selección múltiple;
* verdadero/falso;
* ordenar;
* relacionar;
* detectar errores;
* construir;
* resolver escenarios;
* crear un producto.

No evaluar solamente memoria.

Distribución sugerida:

### Competencia 1

Dirigir IA: 30%

### Competencia 2

SDD/Harness: 35%

### Competencia 3

Multiagentes: 35%

---

# SISTEMA DE RETROALIMENTACIÓN

Nunca limitarse a:

"Correcto."

o:

"Incorrecto."

Utilizar:

### Respuesta correcta

"Correcto. Esta decisión es adecuada porque..."

### Respuesta parcialmente correcta

"Vas por buen camino, pero..."

### Respuesta incorrecta

"No es la mejor opción porque..."

Mostrar:

* explicación;
* pista;
* concepto relacionado;
* oportunidad para volver a intentarlo.

---

# SISTEMA DE PROGRESO

Implementar mediante `localStorage`.

Guardar:

* diagnóstico;
* actividades completadas;
* puntuaciones;
* retos;
* evidencias;
* módulos completados;
* progreso general;
* nivel alcanzado.

Mostrar:

"Tu progreso: 67%"

y una barra visual.

---

# GAMIFICACIÓN MODERADA

No convertir el OVA en un videojuego infantil.

Utilizar gamificación profesional.

Crear:

### Insignia 1

"Director de IA"

### Insignia 2

"Arquitecto SDD"

### Insignia 3

"Coordinador Multiagente"

### Insignia final

"Desarrollador aumentado por IA"

Mostrar las insignias cuando se cumplan los criterios.

---

# PORTAFOLIO DE EVIDENCIAS

Crear una sección:

"Mi portafolio"

Debe mostrar:

* Prompt profesional;
* Spec;
* Plan;
* Tasks;
* Arquitectura multiagente;
* puntuaciones;
* competencias alcanzadas.

Permitir descargar las evidencias como archivos `.txt` o `.md`.

---

# REFLEXIÓN METACOGNITIVA

Después de cada módulo presentar tres preguntas:

1. ¿Qué aprendí?
2. ¿Qué fue difícil?
3. ¿Qué cambiaría en mi forma de desarrollar software?

Guardar las respuestas localmente.

---

# ACCESIBILIDAD

Implementar criterios WCAG 2.2 AA razonables.

Incluir:

* navegación por teclado;
* foco visible;
* etiquetas ARIA donde correspondan;
* contraste suficiente;
* botones accesibles;
* textos alternativos;
* estructura semántica;
* tamaño de fuente configurable;
* modo de alto contraste;
* reducción de animaciones;
* no depender exclusivamente del color.

---

# RESPONSIVE

Debe funcionar correctamente en:

* computador;
* portátil;
* tablet;
* teléfono.

La barra lateral actual debe transformarse en un menú móvil.

---

# DISEÑO VISUAL

Mantener la identidad tecnológica existente, pero evolucionarla.

Utilizar:

* tarjetas;
* paneles;
* indicadores de progreso;
* timeline;
* diagramas;
* badges;
* estados;
* iconografía;
* microinteracciones.

Evitar:

* bloques enormes de texto;
* apariencia de documento;
* exceso de texto corrido;
* interfaces infantiles;
* animaciones innecesarias.

La interfaz debe transmitir:

"laboratorio profesional de desarrollo de software con IA".

---

# ARQUITECTURA DEL PROYECTO

Puedes reorganizar el proyecto.

Propuesta:

```text
ova/
│
├── index.html
│
├── diagnostico.html
│
├── modulo1/
│   ├── index.html
│   ├── conceptos.html
│   ├── actividades.html
│   └── reto.html
│
├── modulo2/
│   ├── index.html
│   ├── conceptos.html
│   ├── laboratorio.html
│   └── reto.html
│
├── modulo3/
│   ├── index.html
│   ├── conceptos.html
│   ├── simulador.html
│   └── reto.html
│
├── evaluacion.html
├── portafolio.html
├── resultados.html
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── accessibility.css
│
└── js/
    ├── app.js
    ├── progress.js
    ├── storage.js
    ├── quiz.js
    ├── prompts.js
    ├── sdd.js
    ├── agents.js
    └── accessibility.js
```

Puedes modificar esta arquitectura si existe una solución técnicamente mejor.

---

# REQUISITO FUNDAMENTAL

No introducir frameworks innecesarios.

Priorizar:

* HTML5
* CSS3
* JavaScript ES6+

La aplicación debe ser:

* ligera;
* portable;
* mantenible;
* offline-first;
* fácil de editar;
* comprensible para un estudiante de ADSO.

---

# REQUISITO DE PRESERVACIÓN

NO eliminar el contenido conceptual existente.

Debes:

1. analizar el contenido actual;
2. reorganizarlo;
3. fragmentarlo;
4. convertirlo en microcontenidos;
5. convertir parte de la teoría en actividades;
6. mantener los conceptos importantes;
7. mejorar las explicaciones cuando sea necesario.

Si encuentras conceptos técnicamente dudosos o posiblemente desactualizados, márcalos y propón una corrección antes de eliminarlos.

---

# REQUISITO DE CALIDAD PEDAGÓGICA

Para cada competencia debes poder responder:

### Saber

¿Qué debe conocer el estudiante?

### Saber hacer

¿Qué debe ser capaz de hacer?

### Saber ser

¿Qué actitud profesional debe demostrar?

### Evidencia

¿Qué producto demuestra que aprendió?

### Criterio

¿Cómo sabemos que lo hizo correctamente?

---

# CRITERIOS DE FINALIZACIÓN

No consideres terminado el proyecto simplemente porque:

* las páginas cargan;
* los botones funcionan;
* el CSS se ve bonito.

El proyecto solamente estará terminado cuando:

1. Las tres competencias tengan actividades prácticas.
2. Cada módulo tenga un reto.
3. Exista retroalimentación formativa.
4. Exista progreso persistente.
5. Exista diagnóstico.
6. Exista evaluación final.
7. Existan evidencias.
8. Exista portafolio.
9. Exista accesibilidad básica.
10. Sea responsive.
11. Funcione offline.
12. El estudiante pueda completar una ruta completa sin depender del profesor.

---

# PRUEBAS

Antes de finalizar:

### Prueba funcional

Comprobar todos los enlaces, botones, formularios y actividades.

### Prueba pedagógica

Comprobar que cada actividad realmente desarrolla una competencia y no solamente presenta información.

### Prueba responsive

Probar 375px, 768px y 1366px.

### Prueba de accesibilidad

Comprobar navegación mediante teclado, foco, etiquetas y contraste.

### Prueba de persistencia

Cerrar y volver a abrir la aplicación y verificar que:

* progreso;
* resultados;
* evidencias;

continúan disponibles mediante `localStorage`.

### Prueba offline

Desconectar Internet y comprobar que el OVA continúa funcionando.

---

# FORMA DE TRABAJO

Antes de modificar código:

1. Analiza todos los archivos existentes.
2. Identifica qué contenido debe conservarse.
3. Construye un mapa pedagógico.
4. Identifica las actividades necesarias.
5. Define la arquitectura.
6. Después implementa.

No realices solamente cambios cosméticos.

El resultado final debe sentirse como un **laboratorio interactivo de aprendizaje**, no como un PDF convertido en HTML.

Al finalizar, entrega:

1. estructura final del proyecto;
2. descripción de las mejoras;
3. competencias y actividades implementadas;
4. criterios de evaluación;
5. instrucciones para ejecutar el OVA;
6. lista de pruebas realizadas;
7. posibles mejoras futuras.

La prioridad absoluta es:

**APRENDIZAJE > INTERACCIÓN > EVIDENCIA > EVALUACIÓN > ESTÉTICA.**

El objetivo final es que el estudiante pueda decir:

"Yo no solamente leí sobre desarrollo con IA. Practiqué, tomé decisiones, construí artefactos, recibí retroalimentación y demostré que puedo utilizar estas técnicas profesionalmente."

