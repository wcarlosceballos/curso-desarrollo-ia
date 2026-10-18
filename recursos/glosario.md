# 📖 Glosario de términos técnicos

Material de consulta del **Curso de Desarrollo con IA**. No es un curso por sí mismo:
es el diccionario para leer los apuntes de los días 1, 2 y 3 sin quedarse trabado.

> **Cómo usarlo.** Los términos marcados con ⭐ aparecen en las competencias evaluables.
> Si un concepto está aquí y no lo entiendes, casi siempre significa que falta un día de
> apuntes, no que el término esté mal explicado.

---

## 1. Arquitectura de software

**Registro de comandos (*command registry*)**
Lista central donde vive *toda* acción posible de la aplicación, cada una con un nombre
único y sus parámetros. En vez de que la lógica esté metida dentro del código de cada
botón, está centralizada y se puede llamar desde cualquier parte.
→ Ver el análisis de ArtCraft en la sección final de este documento.

**Capa fina (*thin layer*)**
Capa de código que casi no hace lógica propia, solo traduce entre dos cosas. Un mesero
que anota el pedido y lo lleva a la cocina: no cocina, pero sin él nada llega.

**API (*Application Programming Interface*)** ⭐
El contrato entre dos programas: "te prometo estas funciones con estos datos". Es lo que
permite usar una herramienta sin saber cómo está escrita por dentro.

**Interfaz gráfica (GUI) vs. Interfaz de línea de comandos (CLI)**
GUI = lo que tocas con el ratón. CLI = lo que escribes en la terminal. Una aplicación
profesional suele tener las dos.

**Canal de control JSON**
Tercera vía para mandar instrucciones al programa con datos estructurados, sin clics ni
comandos escritos. JSON = el formato donde pones `{"angulo": 51, "vista_previa": true}`.

**MCP (*Model Context Protocol*)** ⭐
Protocolo estándar, creado por Anthropic, que sirve de USB para herramientas de IA.
Permite que un agente (como un asistente de OpenCode) se conecte a un programa y lo use
enviando llamadas estructuradas, en vez de imitar a un humano con el ratón.
→ Es competencia 2 del curso.

**Esquema (*schema*)**
Descripción de qué campos tiene un comando y de qué tipos. Sin esquema, la IA no sabe
qué dato enviar.

**Escape hatch ("válvula de escape")**
Mecanismo genérico que permite hacer *cualquier* cosa aunque no exista un comando
específico para eso. Ejemplo real: en vez de exponer 25 herramientas MCP, se expone una
sola (`command_run`) y con ella se alcanzan los 892 comandos del motor.

**Ventana de contexto (*context window*)** ⭐
Cuánta información puede tener "en la cabeza" un modelo a la vez. Es un límite físico.
Por eso no se exponen 892 esquemas MCP: el modelo se quedaría sin memoria antes de
empezar a trabajar.

**Handler**
La función que *atiende* una petición. Si un comando es una mesa de trabajo, el handler
es el trabajo que se hace en esa mesa.

**Test (prueba automática)**
Código que verifica que el programa hace lo esperado, sin que alguien mire la pantalla.
Los tests pasan solos, mil veces seguidas.

**Binding**
Código que conecta una librería a un lenguaje. Como un cable adaptador: el dispositivo
es el mismo, el enchufe cambia.

**Wrapper (envoltorio)**
Código que envuelve a otro para hacerlo más fácil de usar. Un botón grande que por
dentro llama a 20 cosas.

**Framework**
Estructura base ya resuelta sobre la que construyes. En vez de construir un coche desde
cero, te dan el motor y tú pones la carrocería.

**Instanciar una plantilla**
Crear un objeto concreto a partir de un molde genérico. Rellenar el mismo formato con
datos distintos, doce veces.

**Deshacer / Rehacer (*undo/redo*)**
Pila de operaciones para revertir cambios. Casi toda aplicación seria la tiene.

---

## 2. Gráficos y renderizado

**Backend / renderizador**
El código que está "por debajo" y se encarga de dibujar en pantalla. Un mismo
renderizador puede hablar con distintas máquinas.

**Electron**
Herramienta para crear aplicaciones de escritorio usando el motor de Chrome dentro.
Cómoda pero enorme: cada app pesa 100 MB o más porque va empaquetada con un navegador
completo.

**Binario nativo**
Programa compilado para un sistema específico. Se ejecuta directo, sin intermediarios.
"Nativo" es lo contrario de "envuelto dentro de un navegador".

**API gráfica**
El lenguaje con el que se le piden cosas a la tarjeta de video:

| API | Dónde se usa |
|---|---|
| **Metal** | Apple (macOS, iPhone) |
| **Vulkan** | Linux, Android |
| **DirectX 12** | Windows |
| **WebGPU** | Navegadores modernos |

**`wgpu`**
Librería de Rust que habla con las cuatro APIs de arriba usando un solo código. El
programa ya no usa directamente la GPU: usa `wgpu`, y `wgpu` traduce.

**WebAssembly (WASM)**
Formato que permite compilar un programa (escrito en Rust, en este caso) para que corra
**dentro de un navegador**. Un solo código base produce cuatro destinos: Windows, macOS,
Linux y navegador.

---

## 3. Video y archivos

**Códec**
Algoritmo que comprime y descomprime audio o video. H.264, HEVC, ProRes, VP9 y Opus son
códecs.

**FFmpeg**
La librería libre de video más usada del mundo. Es un monstruo: hace todo, pero es difícil
de compilar, especialmente para navegador.

**Codificar vs. decodificar**
- **Decodificar** = descomprimir para poder ver o reproducir.
- **Codificar** = comprimir para poder guardar o enviar.

**Especificación (*spec*)**
Documento que dice exactamente cómo funciona algo. Si sigues la spec al pie de la letra,
obtienes el mismo resultado que todos. Por eso decodificar es mucho más fácil que
codificar: la spec te dice qué hacer, paso a paso.

**Optimización rate-distortion**
Decidir cómo repartir los bits de un video para que se vea bien ocupando lo mínimo. Es el
corazón de todo compresor de video. Leer el resultado es mecánico; **elegir el mejor
resultado** es investigación. Por eso x264 y x265 (los compresores estándar de la
industria) tardaron años en escribirse.

**Read-only**
Solo lectura. No puede guardar, solo abrir y mostrar.

**Portable**
Versión que no se instala: descomprimes y ejecutas. Útil para probar sin modificar el
sistema.

---

## 4. Inteligencia artificial

**LLM (*Large Language Model*)** ⭐
Modelo de lenguaje grande. Predice el siguiente fragmento de texto más probable. Ejemplos:
los modelos de OpenAI, Anthropic o Google.

**Chat vs. agente** ⭐
Un chat responde. Un agente además *usa herramientas* (CLI, MCP, archivos) y ejecuta
tareas de varios pasos. Es la diferencia entre competencia 1 y competencia 4 del curso.

**Prompting**
El acto de darle instrucciones a un modelo. Buen prompt = buena tarea.

**Asistencia de código**
Cuando un humano le pide a un LLM que le escriba o le ayude a escribir código. Se
diferencia de "automatizar" en que **el humano sigue decidiendo**: elige la arquitectura,
revisa y corrige.

**Vibe coding** ⭐
Escribir software dando instrucciones en lenguaje natural y aceptar el resultado sin
revisar la arquitectura. Contrapuesto a ingeniería con criterio.

---

## 5. Color e imagen

**RGB**
Sistema de color de las pantallas: rojo, verde y azul. Todo lo digital trabaja en RGB.

**CMYK**
Sistema de color de la imprenta: cian, magenta, amarillo y negro. Necesita cuatro tintas,
no se puede obtener solo con RGB.

**Perfil ICC**
Archivo que describe cómo un dispositivo concreto reproduce los colores. Sin perfiles, el
mismo archivo se ve distinto en cada monitor o impresora.

**Gestión de color**
Todo el sistema para que un color se vea igual en cualquier pantalla. Una de las cosas
más complejas de Photoshop, y de las que ArtCraft todavía no tiene resueltas.

**Modo de fusión (*blend mode*)**
Cómo se mezcla una capa con la de debajo. "Multiplicar" oscurece, "Trama" aclara. Hay
alrededor de 27, y cada uno es una fórmula corta.

**Composición de capas (*layer compositing*)**
El arte de apilar las capas en el orden correcto. También es matemática de libro.

**Relleno consciente de contenido (*content-aware fill*)**
Función de Photoshop que borra algo y rellena el hueco mirando lo que hay alrededor. Un
botón, pero **muchos años** de trabajo. Es el ejemplo perfecto de "superficie fácil,
profundidad carísima".

**Matriz**
Tabla de números para transformar valores. Convertir RGB a CMYK, por ejemplo, es
esencialmente una matriz con algunos ajustes.

**Gráficos de primeros semestres**
Todo lo que se aprende en los primeros años de ingeniería: proyección, interpolación,
espacios de color y matemáticas lineales.

---

## 6. Ciclo de vida del software

**Versión 0.x**
Software que todavía no llega a 1.0. Significa **"puede cambiar de forma incompatible en
cualquier momento"**. Por eso una aplicación en 0.8.2 todavía no se puede depender de ella.

**Alfa**
Fase temprana. Funciona, pero con errores y funciones incompletas. Se usa para probar, no
para trabajar.

**Beta**
Más cerca de estar listo. Casi todo funciona, faltan detalles.

**Producción**
Estable. Se puede depender de ella para trabajo real.

**Alcance (*scope*)**
Qué entra y qué no en un proyecto. **Reducción de alcance** = decidir conscientemente no
hacer algo para poder terminar. Es la diferencia entre un proyecto que sale y uno que se
muere en el 80%.

**Caso límite (*edge case*)**
Situación rara o de esquina que rompe el programa. "Pero en mi PC funciona" casi siempre
es un caso límite: pantalla de 1024 px, archivo con tildes, usuario con el nombre más
largo del mundo.

**Reimplementación**
Construir otra cosa que hace lo mismo, desde cero. No es piratería: es programar Photoshop
uno mismo, tardando 30 años en vez de 2 semanas.

**Código propietario**
Software cerrado, que no se puede ni leer ni modificar. Los formatos PSD y AI de Adobe lo
son. Por eso es importante no asumir que una herramienta alternativa los abre.

**Clean-room**
Desarrollar imitando el *comportamiento* observable de un programa, sin ver nunca su
código fuente. Es legal si de verdad no se miró el código; es ilegal si se estudió y se
reescribió.

**Crate**
Paquete de código Rust publicado. El equivalente a una librería. "24 crates" = 24 piezas
de código ya hechas que el proyecto usa.

---

## 7. Términos de modelado de negocio

**Lógica de negocio**
Las reglas que son específicas del negocio: qué es una propuesta válida, cuándo una orden
está pagada, cómo se calcula un saldo. No es tecnología, es contexto.

**Costo marginal**
Costo extra de añadir una cosa más a algo que ya existe. Si vale cero, conviene hacerlo.
Por eso las interfaces gratis de ArtCraft son tan relevantes para un prototipo.

---

## 8. Caso de estudio: cómo se explainió ArtCraft

Caso real que motivationa casi todos los términos anteriores. **ArtCraft** (antes
*Storyteller.ai*, código en `storytold/artcraft`) es un estudio de imagen y video con IA
más una familia de aplicaciones de edición en Rust.

### La decisión que lo explica todo: registro de comandos

Si cada menú, herramienta y diálogo es una entrada en un registro con parámetros JSON,
entonces la GUI, la CLI, el canal JSON y el servidor MCP son cuatro capas finísimas sobre
el mismo motor. Se escribe la lógica una vez y se obtienen cuatro interfaces casi gratis.
De ahí que `photocraft-cli` tenga 892 comandos y el MCP exponga solo 25 herramientas
genéricas con un `command_run` como escape hatch.

### Por qué Rust y no Electron

`wgpu` abstrae Metal, Vulkan, DirectX 12 y WebGPU en una sola API. El mismo código de
dibujo compila a nativo en tres sistemas y a WebAssembly. Si se usara Electron habría que
mantener un backend por plataforma: ese multiplicador es la diferencia entre "imposible en
dos semanas" y "posible".

### Por qué la IA encaja con esa forma de trabajo

Los modelos de lenguaje son Storpes en decisiones de arquitectura y en depurar lógica
sutil, pero muy buenos generando cientos de handlers pequeños y uniformes, wrappers,
bindings y tests. Un registro de comandos es exactamente esa forma: miles de unidades
pequeñas, cada una con una sola responsabilidad, cada una testeable. El humano aporta la
arquitectura; el modelo aporta el ancho. Los 1.700 tests de PhotoCraft en dos semanas son
la evidencia más fuerte de ese reparto.

### Por qué doce aplicaciones y no una

Una vez que existe el núcleo (registro, modelo de documento, undo/redo, capa de UI,
renderizador, parser de CLI, servidor MCP, compilación a WASM), cada aplicación nueva es
*instanciar una plantilla*: definir sus comandos, sus paneles y su formato de archivo. La
aplicación 2 a la 12 cuestan mucho menos que la primera.

### Lo que es superficie y lo que es profundidad

Lo difícil de Photoshop nunca fue la interfaz: son 30 años de casos límite, gestión de
color, CMYK, perfiles ICC y relleno consciente de contenido. Pero buena parte de la
*superficie visible* es código delgado sobre algoritmos bien entendidos — los modos de
fusión son matemáticas de primeros semestres, la conversión CMYK es una matriz. Lo
genuinamente difícil, el 5% real, se puede aplazar o estimar. De ahí la honestidad del
rótulo "alfa": **la superficie existe, la profundidad todavía no.**

### Lectura honesta

No es una hazaña todavía. Es un **avance en amplitud demostrablemente alto con una
profundidad aún no probada**, hecho por muy poca gente con asistencia de IA y una
arquitectura muy buena. Conviene revisarlo en seis meses.

### La leccióntransferible

El aprendizaje no es "la IA programa rápido". Es que **el diseño de la interfaz manda
sobre la velocidad de generación**. Si la API de un sistema tiene un registro de comandos
por encima de la lógica de negocio, el día que se quiera panel, API web o control desde
un agente, el costo marginal es una capa finísima. Ahí está el 90% del truco.

---

## 🔗 Ver también

- Día 1 — `../01_dia1_fundamentos.md`: prompt engineering, chat vs. agente, vibe coding.
- Día 2 — `../02_dia2_harness_sdd.md`: comandos personalizados, Agent Skills, MCP, SDD.
- Día 3 — `../03_dia3_multiagentes.md`: agentes, subagentes, sistemas multiagentes.
- `../evaluacion/preguntas.md` — banco de preguntas por día.