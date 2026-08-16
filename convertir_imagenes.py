from PIL import Image
from pathlib import Path

root = Path("assets/img")
extensiones = [".jpg", ".jpeg", ".png"]

# Máximo de ancho/alto para web
MAX_DIMENSION = 4000

files = [
    p for p in root.rglob("*")
    if p.suffix.lower() in extensiones
]

print(f"Encontradas: {len(files)} imágenes\n")

convertidas = 0
existentes = 0
errores = 0

for path in files:

    # Nombre de salida
    output = path.with_suffix(".webp")

    # Si ya existe, no la volvemos a procesar
    if output.exists():
        print(f"⏭️ Ya existe: {output}")
        existentes += 1
        continue

    try:
        # Abrimos la imagen
        with Image.open(path) as img:

            ancho, alto = img.size

            print(f"🔄 Procesando: {path} ({ancho}×{alto})")

            # Reducir imágenes gigantes manteniendo proporción
            if ancho > MAX_DIMENSION or alto > MAX_DIMENSION:

                escala = min(
                    MAX_DIMENSION / ancho,
                    MAX_DIMENSION / alto
                )

                nuevo_ancho = int(ancho * escala)
                nuevo_alto = int(alto * escala)

                img = img.resize(
                    (nuevo_ancho, nuevo_alto),
                    Image.Resampling.LANCZOS
                )

                print(
                    f"   ↳ Redimensionada a "
                    f"{nuevo_ancho}×{nuevo_alto}"
                )

            # Guardar como WebP
            img.save(
                output,
                "WEBP",
                quality=85,
                method=6
            )

            print(f"✅ WebP: {output}\n")

            convertidas += 1

    except Exception as e:
        print(f"❌ Error: {path}")
        print(f"   {e}\n")
        errores += 1


print("=" * 50)
print(f"🎉 Convertidas a WebP: {convertidas}")
print(f"⏭️ Ya existentes: {existentes}")
print(f"❌ Con error: {errores}")
print("=" * 50)

