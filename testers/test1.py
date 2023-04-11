from flask import Flask, jsonify, request

app = Flask(__name__, static_folder='static')

# Initialize the stored value to an empty string
stored_value = ""

@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/get_value", methods=["GET"])
def get_value():
    return jsonify({"value": stored_value})

@app.route("/save_value", methods=["GET"])
def save_value():
    global stored_value
    stored_value = request.form.get("value")
    return jsonify({"success": True})

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
