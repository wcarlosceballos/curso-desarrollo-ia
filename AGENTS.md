# AGENTS.md — Curso: Desarrollo con IA — El Nuevo Programador

**OVA publicada en:** https://wcarlosceballos.github.io/curso-desarrollo-ia/
**Repo:** `wcarlosceballos/curso-desarrollo-ia` — ramas `main` (fuente) y `gh-pages` (publicado)
**Licencia:** CC BY 4.0
**Próxima sesión relevante:** la del **video con avatar v0.2**, que requiere que él lo grabe

> Este archivo contiene lo que **no se deduce leyendo el código**. El `README.md` ya
> explica la estructura y las competencias; aquí va lo que no está en ninguna parte.

---

## Qué es

Curso de **3 días** con metodología **por competencias** (ADDIE + Matriz de Resultados),
para formar*a un desarrollador que dirige IA con criterio profesional*. El objetivo no es
que usen la herramienta, sino que **la dirijan**.

Es un **entregable de formación de la SENA**, no un proyecto personal. Eso cambia el
criterio: lo que importa es que las competencias se puedan evaluar, no solo que la página
se vea bien.

---

## Arquitectura: sin build step

```
*.md            ← LA FUENTE EDITABLE (lecciones, ejercicios, evaluación)
ova/            ← el sitio: HTML, CSS y JS planos
├── index.html          ruta de aprendizaje y progreso
├── diagnostico.html    8 preguntas que fijan el nivel inicial
├── leccion1-3.html     teoría
├── modulo1-3/          práctica: quizzes, simuladores, retos con evidencia
├── evaluacion.html     10 preguntas finales (se aprueba con 60%)
├── portafolio.html     evidencias del estudiante + descarga .md y .json
├── resultados.html     insignias y resumen de desempeño
└── js/, css/           progress.js · storage.js · lesson-tracker.js
```

**No hay build, ni `npm install`, ni bundler.** Editar un `.md` **no** cambia el sitio:
hay que editar el HTML de `ova/` a mano. El `.md` es el guion del curso; `ova/` es el curso.

**El progreso se guarda en `localStorage`** — por eso funciona offline una vez cargada y
no requiere cuenta ni registro.

**Ramas:** `main` es la fuente; `gh-pages` es lo que GitHub Pages publica. **Un cambio en
`main` no aparece en el sitio hasta que se copie a `gh-pages` y se suba.**

---

## ⚠️ Dos reglas muertas en `.gitignore`

```bash
git ls-files --error-unmatch ova.zip ova/css/style.css.bak   # ambos TRACKEADOS
```

`.gitignore` lista `ova.zip` y `*.bak`, **pero los dos están versionados**. La regla está
muerta: **`.gitignore` no desversiona lo que ya está trackeado.** Si algún día se quiere
que dejen de subirse, hace falta `git rm --cached`, no tocar el `.gitignore`.

> `ova.zip` son 23 KB, así que no es un problema de peso. Es una inconsistencia.

---

## El `.gitignore` también protege un duplicado de 18,6 MB

```bash
recursos/apuntes_originales/Guia-de-Modelos-de-IA-2026-*.pdf   # ignorado
```

La copia de referencia vive en `recursos/`. La de `apuntes_originales/` es **el mismo
archivo con MD5 idéntico** y no se versiona para no duplicar 18,6 MB. **La de `recursos/`
sí está versionada** — es la que hay que mantener.

---

## ⚠️ `gh-pages` publica los `.md` y los PDF

Corregido el 17 oct 2026. Este archivo decía antes que los documentos "no son
alcanzables desde el sitio". **Es falso, y estaba en un commit ya publicado.**

Lo que pasa: `gh-pages` contiene **52 archivos**, incluidos los `.md` de la fuente, los
PDF de `recursos/apuntes_originales/` (2,8 MB cada uno), `Instrucciones.md` y `spec.txt`.
Todos responden **200** en su URL pública:

```bash
curl -o /dev/null -w "%{http_code}" \
  https://wcarlosceballos.github.io/curso-desarrollo-ia/recursos/apuntes_originales/Apuntes-Curso-Desarrollo-IA-Dia-1.pdf
```

**La distinción correcta:** los documentos **no están enlazados** desde el HTML —los HTML
solo muestran la ruta como texto plano—. Eso es deliberado. Pero **sí están publicados**,
y "no enlazado" no es "no público". Un archivo en la URL se encuentra con un buscador.

**Decidir:** ¿los apuntes originales de la SENA deben estar públicos en el sitio, o solo
en el repo? Hoy están en los dos sitios.

## ⚠️ `gh-pages` tiene DOS copias del sitio

```text
raíz:     index.html · leccion1-3.html · css/ · js/ · modulo1-3/ · portafolio.html
y además: ova/  ← copia completa de lo mismo
```

Por eso funcionan tanto `/leccion2.html` como `/ova/leccion2.html`: **los dos dan 200.**
Duplicado que no se documentaba en ninguna parte.

## El `.gitignore` protege un duplicado, pero el sitio publica el otro

**Lo que sí es cierto:** los HTML no los enlazan. Muestran la ruta como texto plano:

```html
<p>📎 Apuntes originales: <code>recursos/apuntes_originales/Apuntes-...-Dia-1.pdf</code></p>
```

Así que quien navega el sitio no los encuentra por ahí — pero **quien sepa la URL sí**, y
eso incluye a un buscador. Que estén "sin enlazar" es una decisión de navegación, no una
medida de privacidad.

---

## ⚠️ Tres correcciones pendientes en el material

Verificados contra la documentación de OpenCode V2. **Están publicados y son erróneos:**

1. **`02_dia2_harness_sdd.md:10` — "reiniciar y ejecutar"** los comandos. La documentación
   dice *"OpenCode reloads command files and configuration changes automatically."*
   **No hay que reiniciar.** Es un paso inútil que alguien siguiendo el curso hará cada vez.

2. **`02_dia2_harness_sdd.md:13` — `.agents/skills/<nombre>/SKILL.md`.** Esa ruta existe
   como *compatibility*, pero la forma canónica es **`.opencode/skills/<id>/SKILL.md`**.
   No está mal, pero quien lo busque después de leerlo va a preguntar por qué.

3. **`03_dia3_multiagentes.md:37` — `MEMORY.md`** aparece junto a `AGENTS.md` en un
   diagrama de estructura. **No aparece en la documentación V2** que se revisó
   (instructions, config, skills, commands, permissions). No se pudo confirmar que exista.
   Lo mismo con `npx skills add`: la vía documentada es el array `skills` en
   `opencode.json`, no un comando de npm.

> El punto 3 **no está confirmado como error** — solo no se pudo verificar. Revisarlo
> antes de tocarlo.

---

## Cómo verificar que el sitio sigue bien

```bash
# las tres rutas responden
curl -s -o /dev/null -w "%{http_code}" https://wcarlosceballos.github.io/curso-desarrollo-ia/
curl -s -o /dev/null -w "%{http_code}" https://wcarlosceballos.github.io/curso-desarrollo-ia/ova/leccion2.html
curl -s -o /dev/null -w "%{http_code}" https://wcarlosceballos.github.io/curso-desarrollo-ia/ova/portafolio.html
```

Y localmente, mirando que no haya enlaces rotos:

```bash
grep -ohE '(href|src)="[^"#:]*"' ova/*.html ova/modulo*/*.html | sed 's/.*="//;s/"//' | sort -u
```

⚠️ **En el curso de Git pasó lo contrario:** `portafolio.html` y `resultados.html` estaban
enlazados pero **no existían**. Aquí ambos existen. Verificar cuando se toca el `nav`.

---

## Lo que falta

- **El video con avatar (v0.2).** No se puede escribir: **requiere que él lo grabe.**
- Las tres correcciones de arriba.
- Decidir si `ova.zip` y `style.css.bak` se desversionan o si se quitan del `.gitignore`.