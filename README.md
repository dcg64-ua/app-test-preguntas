# Test de preguntas

App de tests tipo test en el navegador: un solo `index.html`, sin servidor ni base de datos.

## Formato de `preguntas.json`

```json
{
  "titulo": "Mi test",
  "ajustes": { "penaltyOn": true, "penalty": 0.3333, "simPreguntas": 100, "simMinutos": 90, "simCorte": 5 },
  "preguntas": [
    {
      "pregunta": "Texto de la pregunta",
      "opciones": ["A", "B", "C", "D"],
      "correcta": 2,
      "explicacion": "Por qué la respuesta es C",
      "referencia": "Art. 14 CE",
      "bloque": "Bloque I",
      "tema": "Tema 3. La Constitución"
    }
  ]
}
```

- `correcta` es la posición empezando en 0 (0 = primera opción).
- `explicacion`, `referencia`, `bloque` y `tema` son opcionales.
- `ajustes` (opcional) son los valores por defecto para todos: penalización, simulacro (`simNombre`, `simPreguntas`,
  `simMinutos`, `simCorte`), `examDate` (`"2027-03-01"`) y `dailyGoal`. Cada uno puede cambiarlos en ⚙️ Ajustes en su
  dispositivo. Con GitHub conectado se guardan desde la app (⚙️ Ajustes → "Guardar mis ajustes como predeterminados").

## Funciones para estudiar

- **Práctica / Examen / Simulacro** con temporizador, penalización configurable (−1/2, −1/3, −1/4, −1/5 u otra) y nota sobre 10.
  El simulacro dice APTO / NO APTO según la nota de corte.
- **🤔 Dudosas:** márcalas al responder; al final te dice si te compensó arriesgar con tu penalización.
- **🧠 Repaso inteligente** (repetición espaciada): las falladas vuelven pronto y las acertadas cada 1, 3, 7, 16 y 35 días.
- **Progreso:** nota media, racha, calendario de actividad, evolución de la nota, acierto en dudosas y dominio por bloque y tema.
- **Objetivos:** cuenta atrás al examen y objetivo diario de preguntas.
- **Bienestar:** pomodoro configurable y recordatorio de agua cada 20 min.
- **💾 Copia de seguridad:** exporta e importa todo el progreso (⚙️ Ajustes).

## Usarla

- **En el ordenador:** doble clic en `index.html` y carga el JSON (arrastrar, seleccionar o pegar).
- **En el móvil / como app instalable:** súbela a GitHub Pages (abajo).

Todo lo tuyo (estadísticas, historial, marcadas ★, test a medias, cambios del editor) se guarda en el navegador.
Cada navegador/dispositivo tiene su propio progreso.

## Personalizar

Botón **🎨 Tema** en el inicio: color (6 temas + fondo a medida), foto de fondo (ninguna, el gatito o una tuya) e intensidad.
Por defecto: rosa con el gatito. Cada dispositivo guarda su propio tema.

Foto del gatito (`gato.jpg`): [Kitten sleeping](https://commons.wikimedia.org/wiki/File:Kitten_sleeping.jpg), Wikimedia Commons / Pixabay, licencia CC0 (dominio público).

## Publicar gratis en GitHub Pages

1. Crea un repositorio en GitHub (puede ser público o, con GitHub Pro, privado).
2. Sube todos los archivos de esta carpeta (botón *Add file → Upload files*).
3. *Settings → Pages → Build and deployment → Branch: main / (root) → Save*.
4. En un par de minutos estará en `https://TU_USUARIO.github.io/NOMBRE_REPO/`.
5. En el móvil, ábrela y elige *Añadir a pantalla de inicio* / *Instalar app*.

**Editar las preguntas desde la app guardando en GitHub:** en el Editor, sección **☁️ Guardar en GitHub**, pega un token
*fine-grained* con acceso solo a este repositorio y permiso **Contents: Read and write**. Desde entonces cada pregunta que
añadas, edites o borres se guarda directamente en `preguntas.json` (un commit por cambio). El token se queda solo en ese dispositivo.

Sin token, también puedes actualizar a mano: edítalas en la app → **Descargar JSON** → sube ese `preguntas.json` al repositorio
sustituyendo el anterior. La app carga siempre la última versión del servidor, salvo que hayas cargado
otro archivo o editado en la app (en ese caso aparece el botón "Volver a usar preguntas.json del servidor").
