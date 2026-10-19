# 🕰️ Historia de la IA generativa

Material de estudio del **Curso de Desarrollo con IA**. Complementa el
[Día 1 — Fundamentos](../01_dia1_fundamentos.md): allí se explica *qué es* un
modelo de lenguaje; aquí se explica *de dónde salió* y, sobre todo, **por qué
se equivoca sin darse cuenta**.

> **Cómo usarlo.** Está escrito para leerse de corrido (90 minutos) y luego
> usarse como base del taller de 45 minutos que está al final. No necesitas
> saber programar ni matemáticas. Si un término no está en el
> [glosario](glosario.md), búscalo ahí.

**Prerrequisitos:** saber qué es un programa de computador y qué es un archivo
de texto. Nada más.

---

## 1. Las cinco palabras que sostienen todo

Si una de estas se te escapa, vuelve a ella. El resto del documento se apoya
en ellas.

| Palabra | Qué significa, en palabras sencillas |
|---|---|
| **Modelo** | Un archivo gigante con números adentro que guardan lo que una máquina aprendió de muchos ejemplos. Es como un cuaderno con patrones, no con respuestas. |
| **Parámetro** | Cada uno de esos números. Un modelo con 175 mil millones de parámetros tiene 175 mil millones de números ajustados por una máquina. |
| **Entrenamiento** | El proceso de ajustar esos números usando millones de ejemplos. Es un trabajo de meses, con miles de chips. |
| **Token** | Un pedacito de texto, normalmente una palabra o parte de palabra. "Hola, ¿cómo estás?" puede ser 5 fichas. El modelo trabaja con fichas, no con letras. |
| **Alucinación** | Una respuesta falsa que el modelo da con el formato exacto de una respuesta verdadera. No es mentira: es un error de fábrica. |

**Dato que parece absurdo y es real:** si este documento lo conviertes en texto
y se lo mandas a un modelo, ocupa **miles de tokens**. Un libro de 300 páginas
son unas 100 mil fichas. Cada vez que le escribes a una IA estás gastando (o
usando cuota) por las fichas que mandas **más** las que te devuelve.

---

## 2. La biblioteca y el archivista

Esta es la analogía que sostiene toda la explicación. Léela completa antes de
seguir.

### 2.1 El escenario

Imagina una biblioteca municipal con un solo archivista, llamado **Atlas**.
Atlas no es una persona: es un personaje con una capacidad desbordada. Leyó
millones de documentos y de cada uno se quedó con el **molde**, no con el
contenido.

La diferencia es importantísima y hay que tenerla clara:

- Atlas **no puede mostrarte** un documento de su archivo. Si le pides "repite
  el artículo tal cual", puede que no sepa cuál era.
- Atlas **sí sabe imitar la forma** en que están escritos los documentos:
  cómo arranca una novela, cómo se redacta un manual técnico, cómo se escribe
  un correo de venta, cómo se estructura un mensaje corto.

Toda la IA generativa actual, en lo esencial, es eso: **Atlas, pero con un
archivista que además escribe**.

### 2.2 Antes de 2014: la biblioteca solo clasificaba

Hasta 2014, las máquinas eran hábiles clasificando. Les dabas fotos y te
decían "gato" o "perro". Les dabas correos y te decían "spam" o "no spam". Se
le llamaba **aprendizaje automático**, que es simplemente esto: en vez de que
un programador escriba la regla, le das muchos ejemplos y la máquina deduce la
regla sola.

Pero clasificar y **crear** son cosas muy distintas. Una máquina que clasifica
no inventa nada nuevo: reconoce cosas que ya existen. Desde 2014, el objetivo
cambió: no solo reconocer, sino **generar**.

### 2.3 2014: el falsificador y el perito

Aparece un invento que enciende la mecha: dos personajes jugando en el mismo
edificio.

- **El Falsificador** inventa documentos falsos.
- **El Perito** los revisa y dictamina: "esto es auténtico" o "esto es
  inventado".

Atlas hace **las dos cosas a la vez**, y entrena en rondas:

1. Atlas falsifica un documento.
2. Se lo pasan al Perito.
3. El Perito lo rechaza: "es falso".
4. Atlas ajusta su técnica y vuelve a falsificar.
5. El Perito lo acepta por error: "es auténtico".
6. Atlas aprende que esa técnica sí convence.

Cuando el Perito **ya no puede distinguir** los documentos falsos de los
reales, Atlas ha aprendido a escribir como los reales. Ese duelo se llama
**GAN**: *Generative Adversarial Networks*, en español **redes generadoras
adversarias** (adversarias porque las dos redes compiten entre sí, una contra
la otra).

**Por qué importa en la historia:** sin el duelo del falsificador y el perito no
existirían hoy los generadores de imágenes. Es el antepasado directo de
herramientas como DALL·E, Midjourney y Stable Diffusion.

### 2.4 2017: el salto de estante

Hasta aquí, Atlas leía **documento por documento, en orden**, como alguien que
lee un libro sin poder pasar páginas. Para entender el último párrafo
necesitaba recorrer todos los anteriores. Eso hace el entrenamiento lentísimo,
y mientras sea lento no hay escala posible.

En 2017, un equipo de Google publica un documento titulado *"Attention Is All
You Need"* (en español: *"La atención lo es todo lo que necesitas"*). La idea
central:

> En vez de leer todo en orden, **saltar directo al estante que importa** y
> atender solo ese.

Eso se llama **atención**, y funciona como cuando estás en una reunión y,
aunque hablen diez personas, prestas atención selectiva a lo que te concierne.
El salto de estante es el invento técnico más importante de toda la historia
de la IA generativa.

**Todos** los modelos que existen hoy (ChatGPT, Gemini, Claude, Llama,
DeepSeek, Mistral, y también el que esté corrigiendo este material) usan esta
misma idea en su base. Cuando leas "Transformer" en cualquier artículo, se
refiere a esto: una forma de organizar el trabajo de una red para que pueda
atender a lo importante sin recorrerlo todo.

### 2.5 2018-2020: más estantes, más libros

Con el salto de estante resuelto, la pregunta de la industria fue simple:
**¿qué pasa si el archivista es más grande?** OpenAI lanza tres versiones:

| Año | Modelo | Qué sabía hacer |
|---|---|---|
| 2018 | GPT-1 | Redactar frases coherentes |
| 2019 | GPT-2 | Escribir como una persona. Lo publicaron por partes porque les parecía demasiado bueno para soltarlo de una |
| 2020 | GPT-3 | Una biblioteca de **175 mil millones de parámetros**. Ya responde preguntas, resume y traduce, sin que nadie le enseñara esas tareas |

**El descubrimiento que sostiene toda la industria:** GPT-3 no fue una idea
nueva. Fue **GPT-2 pero mucho más grande**. Al darle suficientes libros, Atlas
desarrolló habilidades que **nadie le había enseñado**: nadie le mostró cómo
resumir y sin embargo resume. A esas habilidades se les llama **emergentes**
(aparecen solas cuando el tamaño cruza cierto punto).

Desde ese día, la receta de la industria es la misma y no ha cambiado mucho:
más datos, más tamaño, más chips.

### 2.6 2021-2022: Atlas aprende a dibujar

Atlas aprende un oficio nuevo: **dibujar**. Su método es el de un **borrador
que se pule**:

1. Parte de una mancha de ruido, como la estática de un televisor viejo.
2. Le va quitando "niebla" poco a poco.
3. Cuando despeja, aparece la imagen.

Ese método se llama **difusión** (la imagen se va difuminando hacia el ruido, o
el ruido se difumina hacia la imagen). De ahí salieron DALL·E, Midjourney y
Stable Diffusion. Este último tiene un detalle importante: es **de código
abierto**, o sea que cualquiera puede tener un Atlas dibujante en su propio
computador, sin pagarle a nadie.

### 2.7 Noviembre de 2022: se abre la ventanilla

Hasta este momento, Atlas vivía dentro del edificio, y solo la gente que sabía
entrar podía usarlo.

Entonces alguien puso **una ventanilla de atención al público**.

**ChatGPT** no fue un invento técnico: era la misma conversación con Atlas,
pero con una interfaz donde se le pregunta como si fuera una persona. En dos
meses alcanzó 100 millones de usuarios, más rápido que cualquier tecnología
anterior en la historia.

**Esta es la lección más importante de toda la materia:** en noviembre de 2022
**no mejoró el archivista**. Atlas ya existía, con las mismas capacidades,
desde 2021. Lo que cambió fue que le pusieron un mostrador al que la gente
podía acercarse.

Cuando alguien diga "la IA llegó en 2022", no está diciendo que la tecnología
nació ese año. Está diciendo que ese año la tecnología **se hizo accesible**. Y
esa es la razón de que tu tarea no sea aprender a usar IA, sino **aprender a
verificar lo que la IA te da**.

### 2.8 2023-2025: Atlas deja de contestar y empieza a hacer

Aquí la analogía se vuelve literal, y conecta con lo que se usa en las
sesiones del curso.

- **RAG (2023):** le entregas una carpeta con tus documentos y Atlas **los
  consulta antes de responder**, en vez de improvisar. Esto reduce muchísimo
  los inventos. Ojo con un detalle: Atlas **no guarda** tus documentos para
  siempre; los vuelve a consultar cada vez que le preguntas.
- **Multimodalidad (2023-2025):** Atlas ya no solo lee texto. Ahora también
  **mira imágenes, escucha audio y entiende video**.
- **Modelos abiertos (2024):** Meta libera Llama; Mistral, Qwen y DeepSeek
  compiten. Atlas se vuelve reproducible: puedes tener una copia corriendo en
  tu propio equipo.
- **Herramientas y agentes (2024-2025):** el cambio grande. Atlas deja de solo
  *hablar del* documento: **abre** el documento, **modifica** el archivo,
  **ejecuta** el comando en la terminal, **verifica** si salió bien. Esta es
  exactamente la diferencia entre un chat y un **agente** como OpenCode, que
  edita código y corre pruebas.
- **Modelos con razonamiento (2024-2025):** una familia nueva que **escribe su
  propio borrador de razonamiento** antes de dar la respuesta final, como
  cuando uno piensa "en papel" antes de contestar. Mejora en lógica,
  matemáticas y código, a costa de más tiempo y más consumo.
- **Costo decreciente:** lo que en 2021 costaba cientos de dólares por millón
  de palabras hoy cuesta centavos. Por eso la IA generativa está metida en
  todas partes: en el celular, en el correo, en los buscadores.

### 2.9 2026: de archivista a ayudante de taller

Tres líneas de fuerza definen la etapa actual:

1. **De responder a hacer.** El modelo ya opera herramientas y coordina varios
   pasos.
2. **Del texto a todo.** Imagen, voz, video, código y datos estructurados, con
   el mismo motor detrás.
3. **Local y privado.** Modelos pequeños que corren en tu equipo, sin que nada
   salga de tu máquina.

---

## 3. La falla más importante: la alucinación

Volvamos a la biblioteca, porque ahí está la explicación completa.

Atlas **no consulta un catálogo**. Reproduce el molde. Por eso, si le pides un
dato que no conoce, **no responde "no lo sé"**: lo inventa, y lo inventa con la
forma correcta.

Lo que sale de ahí se llama **alucinación**, y son cuatro cosas distintas que
se confunden todo el tiempo:

| Lo que el modelo inventa | Ejemplo típico |
|---|---|
| **Un dato falso** | "El estudio de la Universidad de X encontró que el 73% de los usuarios prefiere Y" |
| **Una fuente que no existe** | Un artículo de revista, un libro, un enlace |
| **Una cita atribuida a alguien real** | "Como dijo Feynman en su libro *Talento*" (ese libro no existe) |
| **Un detalle verosímil pero cambiado** | Un número de ley, una fecha, un nombre propio |

**El punto que debes llevarte:**

> El riesgo no es que Atlas "sea malo" ni que "quiera engañarte". El riesgo es
> que **Atlas no sabe lo que no sabe**.

Y de ahí se deriva la regla de oro:

> **Si una respuesta de IA contiene un dato que se puede verificar (fecha,
> cifra, nombre, cita, ley), ese dato se verifica en la fuente antes de
> publicarlo.**

Da igual si la respuesta está bien redactada, si el tono es convincente, si
"suena a experto" o si viene con ejemplos. **El tono no es evidencia. La
forma no es evidencia. Solo la fuente lo es.**

---

## 4. Cómo funciona por dentro, en cinco pasos

Sin fórmulas, para entender la secuencia cuando alguien te lo pregunte.

1. **Lo que escribes se corta en fichas** (tokens). "Hola" puede ser una ficha;
   "programación" puede ser tres.
2. **Cada ficha se convierte en una lista de números** que representa su
   significado en contexto. Palabras parecidas contextualmente terminan con
   números parecidos.
3. **El modelo calcula qué viene después.** Aquí está el corazón: dada toda la
   conversación hasta ahora, estima con qué probabilidad la siguiente ficha es
   X, o Y, o Z.
4. **Elige una** (la de mayor probabilidad, o una de las que casi empatan, para
   que no siempre suene igual) y la escribe.
5. **Repite desde el punto 3**, ahora incluyendo la ficha que acaba de escribir.

De ahí se entiende todo lo demás:

- **Por qué alucina:** en el paso 3, una frase inventada puede tener *más*
  probabilidad que la verdadera, porque es la forma más "normal" según lo que
  leyó. El modelo no tiene un interruptor de "esto no lo sé".
- **Por qué escribe igual que un libro:** no está "recordando" un texto, está
  reproduciendo el molde de la prosa.
- **Por qué el contexto se llena:** todo lo que hay en la conversación (tus
  preguntas, las respuestas, los archivos cargados) se guarda como fichas en
  una memoria de trabajo con límite. Si se llena, el modelo tiene que comprimir
  lo viejo, y ahí pierde detalle.

**Sobre eso, una analogía:** es como una mesa de trabajo. Si está llena con 200
hojas y tratas de dibujar algo en una esquina, el resultado sale peor. Vaciar la
mesa (empezar una conversación nueva) es barato y funciona.

---

## 5. Tres cosas que la IA generativa NO es

Este apartado evita errores muy comunes.

**No es una base de datos con respuestas guardadas.** Si le preguntas algo y te
da una respuesta, no te está "consultando". Salió de un cálculo, no de una
búsqueda. Por eso puede darte datos que suenan perfectos y son inventados, y
también por eso puede darte la respuesta correcta con palabras diferentes a las
que usaría un libro.

**No entiende lo que dice.** No tiene intención, no quiere ayudarte, no se
alegra de que acertaras. "Entender" aquí significa que los números internos de
la red quedaron organizados de forma que ese tema produce resultados
coherentes. Es una metáfora útil, no una descripción literal.

**No siempre da lo mismo.** Un mismo prompt puede dar respuestas distintas
porque en el paso 4 hay un componente aleatorio. Por eso las tareas de IA
generativa se evalúan con una rúbrica, no con una respuesta única correcta.

---

## 6. Línea de tiempo

```
1990-2013  ▸ La IA clasifica: reconoce gatos, spam, rostros.
            No crea nada.

2014       ▸ GAN: el Falsificador vs el Perito. Nace la
            generación de imágenes, música y texto.

2017       ▸ Transformer + atención: el salto de estante.
            Base de todos los modelos actuales.

2018-2020  ▸ Escala: GPT-1, GPT-2, GPT-3 (175 mil millones).
            "Más grande" produce habilidades nuevas.

2021-2022  ▸ Modelos de difusión: del ruido al dibujo.
            DALL-E, Midjourney, Stable Diffusion.

nov 2022   ▸ ChatGPT: 100 millones de usuarios en 2 meses.
            No cambió la tecnología; cambió la accesibilidad.

2023       ▸ RAG: la IA consulta tus documentos antes de
            responder. Empieza a ver y oír.

2024-2025  ▸ Agentes: deja de contestar y empieza a hacer.
            Modelos con razonamiento y modelos abiertos.

2026       ▸ De responder a hacer. Local y privado.
            El costo por palabra cae a centavos.
```

| Año | Hito | Qué cambió en concreto | Por qué importa |
|---|---|---|---|
| 2014 | **GAN** | Dos redes compiten: una falsifica, otra juzga | Nace la generación de contenido real |
| 2017 | **Transformer** | La red salta a lo relevante en vez de leer en orden | Permite escalar; base de todo lo actual |
| 2020 | **GPT-3** | 175 mil millones de parámetros | Se descubre que la escala genera habilidades nuevas |
| 2022 | **ChatGPT** | Interfaz de conversación sobre un modelo que ya existía | La demanda pública se dispara |
| 2023 | **RAG** | Consulta fuentes antes de responder | Menos inventos; base de los asistentes con documentos |
| 2024-2025 | **Agentes** | Usa herramientas: lee, edita, ejecuta | Pasa de asesor a ejecutor |
| 2025-2026 | **Modelos abiertos y locales** | Corren en el propio computador, costo bajo | Se democratiza y se privatiza |

**Idea para la lámina:** dibuja una línea divisoria en **noviembre de 2022**. A
la izquierda, "el laboratorio". A la derecha, "la vida cotidiana". Es el corte
que la audiencia recuerda, y es la idea que hay que trasmitir.

---

## 7. Taller (45 minutos)

**Producto final esperado:** un documento de **una página** (foto o PDF) que
contenga: (a) la línea de tiempo con **cuatro hitos** y qué cambió en cada
uno, (b) **una analogía propia** para explicar la IA generativa, y (c) **un
ejemplo real** de una respuesta de IA que se haya verificado o que haya parecido
dudosa.

### Paso a paso

**Minutos 0-10 — La línea de tiempo en equipo (30%)**

1. Dividan la línea de tiempo de la sección 6 en cuatro momentos: **2014,
   2017, 2022, 2024-2025**.
2. Escriban, para cada momento, una frase con este formato: *"En este año pasó
   \_\_\_\_\_, y sirvió para \_\_\_\_\_."*
3. Cuiden que la segunda parte sea una **utilidad concreta**, no una
   descripción.

**Minutos 10-20 — Su propia analogía (30%)**

4. Inventen una analogía para explicar qué es un modelo de IA generativa,
   usando algo de su vida cotidiana: un oficio, un juego, un lugar.
5. Su analogía debe poder responder estas tres preguntas:
   - ¿Qué aprende la máquina y qué NO aprende?
   - ¿Por qué puede equivocarse sin darse cuenta?
   - ¿Qué cambió en noviembre de 2022?
6. Si su analogía no responde las tres, está incompleta. Ajústenla.

**Minutos 20-35 — Cazando una alucinación (45%)**

7. Escriban un **prompt** (una instrucción) para pedirle a un modelo de IA
   generativa un dato verificable sobre un tema cualquiera: por ejemplo, un
   dato sobre un autor, una fecha histórica, un porcentaje de un estudio o la
   dirección de una institución.
8. Copien **exactamente** lo que respondió.
9. Busquen la fuente real (sitio oficial, bibliografía, artículo original).
10. Escriban esta tabla:

| Dato que dio la IA | ¿Verdadero o falso? | Fuente donde lo comprobaron |
|---|---|---|
| | | |

11. Saquen una conclusión de **una frase** sobre por qué ese dato era difícil
    de detectar.

**Minutos 35-45 — Armando el entregable (20%)**

12. Organicen la página final con las tres partes: línea de tiempo, analogía
    propia y caso de alucinación.
13. Escriban al final, en una línea, **su regla de oro** para trabajar con IA
    generativa.
14. Entreguen la página.

### Materiales

- Un dispositivo con navegador (puede ser uno por equipo de tres personas).
- Acceso a cualquier modelo de IA generativa gratuito en línea.
- Cuaderno o documento digital.
- Este material (secciones 1, 3 y 6).

### Criterios de evaluación

| Criterio | Sí | No |
|---|---|---|
| La línea de tiempo incluye los cuatro hitos con su año | 2014, 2017, 2022, 2024-2025, cada uno con su año | Faltan hitos o los años están mal |
| Cada hito explica una utilidad concreta | Dice para qué sirvió, no solo qué pasó | Solo describe ("en 2017 inventaron el Transformer") |
| La analogía responde las tres preguntas | Explica qué aprende, por qué se equivoca y qué cambió en 2022 | Responde solo una o dos |
| El caso de alucinación está verificado con fuente | Incluye la fuente donde se comprobó el dato | Afirma si/no sin fuente |
| Concluye con una regla de uso verificable | Regla aplicable, tipo "todo dato con cifra o nombre se comprueba" | Frase genérica ("hay que tener cuidado") |

### Para el docente: qué mirar al calificar

- **La analogía es la evidencia de comprensión.** Si el equipo logra explicar
  por qué el modelo se equivoca *sin dar la espalda*, entendieron el material.
  Si solo repiten "porque la IA alucina", no lo entendieron: eso es memorizar
  el síntoma, no la causa.
- **Un caso donde la IA acertó también vale**, siempre que se verifique la
  fuente. El objetivo no es "pescar errores", es el hábito de verificar.
- Si eligen un dato que no se puede verificar en internet, pídanles que lo
  cambien por uno verificable (una cifra de un estudio publicado, la fecha de
  publicación de un libro).
- La **regla de oro final** es el mejor indicador: si dice algo aplicable y
  concreto, la sesión funcionó. Si dice "cuidado con la IA", pídanles una
  versión más específica.

---

## 8. Preguntas de verificación

*Para autoevaluación del estudiante o para el banco de preguntas del curso.*

1. ¿Por qué se dice que ChatGPT no fue un invento técnico en 2022?
2. ¿Qué problema resolvió el invento de 2017 y por qué hizo posible todo lo
   que vino después?
3. Explica, sin usar la palabra "alucinación", por qué un modelo puede dar un
   dato falso con tono seguro.
4. ¿Qué diferencia hay entre "consultar una fuente" y "producir una
   respuesta"? ¿Por qué importa al evaluar una IA?
5. Un modelo responde: *"Según un estudio de la Universidad de Cambridge de
   2019, el 82% de los estudiantes mejora su aprendizaje con herramientas de
   IA."* ¿Qué haces y por qué?
6. ¿Por qué una conversación larga puede hacer que el modelo dé respuestas
   peores?

### Respuestas breves (para el docente)

1. La tecnología existía desde 2021; en 2022 se puso una interfaz de
   conversación.
2. La lectura secuencial era lentísima; la atención permite saltar a lo
   relevante, y eso hace posible el entrenamiento a gran escala.
3. Porque el modelo reproduce el molde de lo que leyó en vez de buscar un
   dato, y no tiene forma de detectar que no lo sabe.
4. Consultar es buscar en una fuente real; producir es calcular una respuesta
   plausible. En lo segundo, el tono no dice nada sobre la veracidad.
5. Buscar el estudio, verificar que existe, que es de esa universidad y de ese
   año, y que el 82% corresponde a lo que dice. Si algo no cuadra, se
   descarta.
6. Porque todo el contexto se guarda en fichas dentro de una memoria con
   límite; al llenarse, se comprime lo viejo y se pierde detalle.

---

## 9. Glosario de este material

| Término | Significado en palabras sencillas |
|---|---|
| **Modelo** | Archivo con números que guardan lo aprendido de millones de ejemplos |
| **Parámetro** | Cada uno de esos números (175 mil millones en GPT-3) |
| **Entrenamiento** | El proceso de ajustar esos números; tarda meses |
| **Token** | Pedacito de texto (una palabra o parte de ella) en el que se corta lo que escribes |
| **Atención** | La capacidad de saltar directo a la parte relevante del texto sin recorrerlo todo |
| **Transformer** | La arquitectura (el diseño) que usa la atención; base de todos los modelos actuales |
| **GAN** | Duelo entre una red que falsifica y otra que juzga; origen de la generación de imágenes |
| **Difusión** | Técnica de dibujo: partir del ruido y quitarle niebla hasta que aparece la imagen |
| **RAG** | Consultar documentos antes de responder, en vez de improvisar |
| **Alucinación** | Dato falso con el formato exacto de un dato verdadero |
| **Código abierto** | Programa libre que cualquiera puede copiar, modificar y usar |
| **Agente** | Modelo que además usa herramientas: lee archivos, ejecuta comandos, verifica resultados |
| **Modelo multimodal** | Modelo que no solo lee texto: también ve imágenes, escucha audio y entiende video |
| **Modelo con razonamiento** | Modelo que escribe su propio borrador de razonamiento antes de dar la respuesta final |

---

## 10. Para profundizar

- **Video sugerido:** el documento *"Attention Is All You Need"* explicado en
  video (buscar en YouTube con ese nombre; hay versiones de 10 a 15 minutos
  muy claras, en español).
- **Guía del curso:** `Guia-de-Modelos-de-IA-2026-La-comparativa-definitiva-Curso-de-Desarrollo-con-IA.pdf` (en esta misma carpeta) — complementaria a este material: el **qué** hay hoy (modelos, costos, capacidades); este documento es el **por qué y desde cuándo**.
- **Para practicar la verificación:** la web *Lateral*, de Richard Stallman, y
  los sitios de verificación de datos *Full Fact* y *Reuters Fact Check*, donde
  se muestra cómo se comprueba una cifra.

---

## Referencias internas

- Día 1 — `../01_dia1_fundamentos.md`: qué es un LLM, tokens, parámetros,
  alucinaciones, prompt engineering.
- Día 2 — `../02_dia2_harness_sdd.md`: comandos personalizados, Agent Skills,
  MCP, SDD.
- Día 3 — `../03_dia3_multiagentes.md`: agentes, subagentes, sistemas
  multiagentes.
- `../evaluacion/preguntas.md` — banco de preguntas por día.
- `glosario.md` — diccionario de términos técnicos del curso.
