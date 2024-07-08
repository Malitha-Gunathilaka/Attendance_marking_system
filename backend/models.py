from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Student(db.Model):
    stu_id = db.Column(db.String, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    address = db.Column(db.String, nullable=False)
    phone_number = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=True)
    class_name = db.Column(db.String, nullable=False)

class Attendance(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    stu_id = db.Column(db.String, db.ForeignKey('student.stu_id'), nullable=False)
    date = db.Column(db.String, nullable=False)
    class_name = db.Column(db.String, nullable=False)
    status = db.Column(db.Boolean, nullable=False)
