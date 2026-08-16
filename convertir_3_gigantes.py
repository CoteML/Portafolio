from PIL import Image
from pathlib import Path

Image.MAX_IMAGE_PIXELS = None

imagenes = [
    Path("assets/img/pilares/ds1-desktop.jpg"),
    Path("assets/img/pilares/inv-desktop.jpg"),
    Path("assets/img/jbs/home-antes.jpg"),
]

MAX_DIMENSION = 4000

for path in imagenes:

    print(f"\n🔄 Procesando: {path}")

    try:
        with Image.open(path) as img:

            ancho, alto = img.size

            print(f"   Tamaño original: {ancho}×{alto}")

            escala = min(
                MAX_DIMENSION / ancho,
                MAX_DIMENSION / alto,
                1
            )

            nuevo_ancho = int(ancho * escala)
            nuevo_alto = int(alto * escala)

            print(
                f"   Redimensionando a: "
                f"{nuevo_ancho}×{nuevo_alto}"
            )

            img = img.resize(
                (nuevo_ancho, nuevo_alto),
                Image.Resampling.LANCZOS
            )

            output = path.with_suffix(".webp")

            if img.mode != "RGB":
                img = img.convert("RGB")

            img.save(
                output,
                "WEBP",
                quality=85,
                method=6
            )

            print(f"   ✅ Creada: {output}")

    except Exception as e:
        print(f"   ❌ Error: {e}")

print("\n🎉 TERMINADO")
