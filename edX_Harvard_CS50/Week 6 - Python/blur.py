from PIL import Image, ImageFilter

before=Image.open("bridge.bmp")
after=before.filter(ImageFilter.BLUR)
after.save("out.bmp")