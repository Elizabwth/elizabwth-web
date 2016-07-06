from flask import Flask, render_template, request, redirect, url_for
from flask.ext.wtf.csrf import CsrfProtect
import src
from src import utils, forms

app = Flask(__name__)
app.secret_key = 'KPwdT3zJ2QUge3Xc'
app.debug = True

utils.bundle_assets(app)

CsrfProtect(app)

# Root (Home)
@app.route('/')
@app.route('/about')
def about():
	return render_template('pages/about.html')

@app.route('/work')
def work():
	return render_template('pages/work.html')

@app.route('/team')
def team():
	return render_template('pages/team.html')

@app.route('/contact')
def contact():
	contact_form = forms.ContactForm()
	return render_template('pages/contact.html',
						   contact_form = contact_form)

@app.route('/contact/submit', methods=['POST'])
def contact_submit():
	utils.send_email(request)

if __name__ == '__main__':
	app.run(host='0.0.0.0')
