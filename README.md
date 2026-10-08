# Test de preguntas

App de tests tipo test en el navegador: un solo `index.html`, sin servidor ni base de datos.

## Formato de `preguntas.json`

```json
{
  "titulo": "Mi test",
  "preguntas": [
    {
      "pregunta": "Texto de la pregunta",
      "opciones": ["A", "B", "C", "D"],
      "correcta": 2,
      "explicacion": "Por qué la respuesta es C",
      "tema": "Opcional"
    }
  ]
}
```

`correcta` es la posición empezando en 0 (0 = primera opción).

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
