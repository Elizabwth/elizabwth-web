from flask import Flask, render_template, request, redirect, url_for
import src
from src import utils

app = Flask(__name__)
app.secret_key = 'KPwdT3zJ2QUge3Xc'
app.debug = True

utils.bundle_assets(app)

# Root (Home)
@app.route('/')
@app.route('/about')
def about():
	return render_template('pages/about.html')

@app.route('/work')
def work():
	return render_template('pages/work.html')

@app.route('/contact')
def contact():
	return render_template('pages/contact.html')

if __name__ == '__main__':
	app.run()
