from flask import current_app
from flask.ext.wtf import Form
from wtforms import StringField, SelectField, TextAreaField, validators
from wtforms.fields.html5 import EmailField

_reasons = [
	('work', 'Work'),
	('general_inq', 'General Inquiry'),
]

class ContactForm(Form):
	name = StringField('Name', [validators.required()])
	email = StringField('Email', [validators.required(), validators.Email()])
	subject = StringField('Subject', [validators.required()])
	reason = SelectField('Reason for contacting', choices = _reasons)
	message = TextAreaField('Message', [validators.required()])
