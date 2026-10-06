# 📘 Día 2 — Harness Engineering y Spec-Driven Development

## 🎯 Competencias
- Configura un entorno de desarrollo asistido.
- Desarrolla siguiendo Spec-Driven Development.

## Contenido

### 1. Comandos personalizados
Prompt reutilizable ejecutado con `/<nombre>`. Creación: archivo Markdown en `.opencode/commands/`, descripción + instrucciones, reiniciar y ejecutar.

### 2. Agent Skills
Instrucciones reutilizables en `.agents/skills/<nombre>/SKILL.md` que el agente carga **cuando las necesita**.

> Diferencia clave: un comando **nunca** se ejecuta por iniciativa del agente; una skill **sí** se carga automáticamente.

Instalación de skills de terceros: `npx skills add ...`

### 3. MCP — Model Context Protocol
Protocolo para conectar al agente con herramientas externas. MCPs esenciales:
- **Chrome DevTools**: probar la web, consola, capturas.
- **Context7**: documentación actualizada de librerías.
- **GitHub**: repos, issues, PRs.
- **Figma**: diseños a código.
- **Supabase**: bases de datos.

Configuración: `opencode.json` → `mcp`. Gestión: `/mcps`.

### 4. Spec-Driven Development (SDD)
Definir qué debe hacer el sistema **antes** de programar.

**Taxonomía:**
- *Spec-first*: la spec muere tras generar el código.
- *Spec-anchored* ⭐ (recomendada): la spec vive y guía la evolución.
- *Spec-as-source*: solo se edita la spec; el código se genera.

**EARS**: requisitos con plantilla fija (SI… ENTONCES…) → verificables → convertibles en tests.

**Flujo SDD de 7 pasos:**
1. Constitución
2. Especificación (`spec.md`)
3. Clarificación
4. Planificación (`plan.md`)
5. Tareas (`tasks.md`)
6. Implementación
7. Validación

## ✅ Evidencia
Crear un `spec.md`, `plan.md` y `tasks.md` para una mini-app (ej. Diario de Estudio).

📎 Apuntes: `recursos/apuntes_originales/Apuntes-Curso-Desarrollo-IA-Dia-2.pdf`
