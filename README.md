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

## Publicar gratis en GitHub Pages

1. Crea un repositorio en GitHub (puede ser público o, con GitHub Pro, privado).
2. Sube todos los archivos de esta carpeta (botón *Add file → Upload files*).
3. *Settings → Pages → Build and deployment → Branch: main / (root) → Save*.
4. En un par de minutos estará en `https://TU_USUARIO.github.io/NOMBRE_REPO/`.
5. En el móvil, ábrela y elige *Añadir a pantalla de inicio* / *Instalar app*.

Para actualizar preguntas: edítalas en la app → **Descargar JSON** → sube ese `preguntas.json` al repositorio
sustituyendo el anterior. La app carga siempre la última versión del servidor, salvo que hayas cargado
otro archivo o editado en la app (en ese caso aparece el botón "Volver a usar preguntas.json del servidor").
