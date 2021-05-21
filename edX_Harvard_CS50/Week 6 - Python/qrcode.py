import qrcode

image=qrcode.make("https://jeongyeji.files.wordpress.com/2016/08/kakaotalk_20160808_154355487.jpg")
image.save("qr.png","PNG")