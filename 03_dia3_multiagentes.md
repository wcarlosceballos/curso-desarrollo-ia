# 📘 Día 3 — Multiagentes y Subagentes

## 🎯 Competencia
Coordina sistemas multiagentes con permisos y flujo SDD.

## Contenido

### 1. Agentes y subagentes
- **Custom agent**: asistente configurado con sus instrucciones, permisos y modelo (`mode: primary`).
- **Subagente**: agente especializado al que el principal delega (`mode: subagent`), trabaja en sesión separada.

Creación: `.opencode/agents/<nombre>.md` + reiniciar OpenCode + invocar con `@nombre`.

### 2. Agentes por defecto en OpenCode
- Principales: `build` (escribe código), `plan` (planifica).
- Subagentes: `general` (varias pasos), `explore` (exploración solo lectura).
- Consulta: `/agents`.

### 3. Sistemas multiagentes
Varios agentes especializados coordinados por un agente principal:

```
coordinador → planificador → implementador → revisor
```

| Rol | Función |
|---|---|
| Coordinador | Organiza fases, transmite contexto |
| Planificador | Analiza la petición, diseña la solución |
| Implementador | Modifica código, ejecuta pruebas |
| Revisor | Comprueba el código contra el plan |

### 4. Estructura multiagente

```
project/
├── AGENTS.md, MEMORY.md
├── docs/, specs/, tests/
└── .opencode/agents/
    ├── coordinator.md
    ├── planner.md
    ├── implementer.md
    └── reviewer.md
```

**Permisos por agente** (clave del Day 3):
- Planner: `edit` denegado, solo `specs/**` permitido.
- Coordinador: no edita, solo delega en los tres subagentes.
- Implementador: edita código y ejecuta tests.
- Reviewer: solo lectura + veredicto.

> Los subagentes **no ven** la conversación principal: el coordinador les pasa todo el contexto en cada llamada.

## ✅ Evidencia
Diseñar y documentar la arquitectura de un sistema multiagente con sus permisos.

📎 Apuntes: `recursos/apuntes_originales/Apuntes-Curso-Desarrollo-IA-Dia-3.pdf`
