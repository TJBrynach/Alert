from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
	return render_template("index.html")

@app.route("/new")
def new():
	return render_template("new.html")

@app.route("/retro")
def retro():
	return render_template("retro.html")

@app.route("/update")
def update():
	return render_template("update.html")

@app.route("/close")
def close():
	return render_template("close.html")

if __name__ == "__main__":
	app.run(debug=True, host='0.0.0.0', port=5000)