from flask import Flask, render_template, request, redirect, url_for
import src
from src import utils

app = Flask(__name__)
app.secret_key = 'KPwdT3zJ2QUge3Xc'
#app.debug = True

utils.bundle_assets(app)

# Root (Home)
@app.route('/')
def index():
	return render_template('pages/index.html')

if __name__ == '__main__':
	app.run()
