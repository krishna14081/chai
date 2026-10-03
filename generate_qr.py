# pip install "qrcode[pil]"
import qrcode

VPA = "kmishra4102-1@okhdfcbank"
NAME = "Krishna"

link = f"upi://pay?pa={VPA}&pn={NAME}&cu=INR"  # no amount on purpose
qrcode.make(link, box_size=12, border=2).save("assets/chai_qr.png")
print("saved assets/chai_qr.png")
