from flask import Flask,request
from flask_cors import CORS
from flask_socketio import SocketIO

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app,cors_allowed_origins="*")


@app.route("/")
def index():
    return "Websocket server is running!"

@socketio.on("notification")
def notification(data):
    print("Notification is received",data)
    socketio.emit("listen this notification",data)
if __name__ == '__main__':
    socketio.run(app,debug=True) 