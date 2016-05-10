from flask.ext.assets import Environment, Bundle
import src
from src import forms, settings
import requests
import smtplib
from email.mime.text import MIMEText as text

def bundle_assets(app):
	assets = Environment(app)
	assets.url = app.static_url_path
	scss = Bundle('css/lib/normalize.css',
				  'css/lib/skeleton.css',
				  'css/lib/font-awesome.min.css',
				  'css/main.scss',
				  'css/about.scss',
				  'css/contact.scss',
				  'css/partials/modal.scss',
				  filters = 'pyscss', output = 'all.css')
	assets.register('scss_all', scss)

def email_submit(request):
	form_data = request.form

	msg = "From: "+form_data['name']+" <"+form_data['email']+">\n"+ \
		  "Reason: "+form_data['reason']+"\n"+ \
		  "------------\n"+ \
		  "Message:\n"+ \
		  form_data['message']
	message = text(msg)
	message['Subject'] = form_data['subject']
	message['From'] = settings.MAIL_ADDRESS
	message['To'] = settings.MAIL_ADDRESS
	message['Reply-to'] = form_data['email']
	
	if form.validate():
		s = smtplib.SMTP(settings.MAIL_SERVER, 587)
		s.ehlo()
		s.starttls()
		s.ehlo
		
		try:
			s.login(settings.MAIL_ADDRESS, MAIL_PASSWD)
			s.sendmail(message['From'], [message['To']], message.as_string())
			s.quit()
			return 'success'
		except:
			s.quit()
			return 'server_error'
	else:
		return 'input_error'