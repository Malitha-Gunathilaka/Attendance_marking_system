from flask import Flask, request, jsonify, current_app
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func
import pymysql

pymysql.install_as_MySQLdb()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://username:password@localhost/attendance_system'
db = SQLAlchemy(app)

class Student(db.Model):
    __tablename__ = 'students'
    stu_id = db.Column(db.String(10), primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(100), nullable=False)
    phone_number = db.Column(db.String(15), nullable=False)
    email = db.Column(db.String(50))
    class_name = db.Column(db.String(10), nullable=False)

class Attendance(db.Model):
    __tablename__ = 'attendance'
    id = db.Column(db.Integer, primary_key=True)
    stu_id = db.Column(db.String(10), db.ForeignKey('students.stu_id'), nullable=False)
    date = db.Column(db.Date, nullable=False)
    class_name = db.Column(db.String(10), nullable=False)
    status = db.Column(db.Boolean, nullable=False)

@app.route('/students', methods=['POST'])
def add_student():
    data = request.json
    new_student = Student(
        stu_id=data['stu_id'],
        first_name=data['first_name'],
        last_name=data['last_name'],
        address=data['address'],
        phone_number=data['phone_number'],
        email=data['email'],
        class_name=data['class_name']
    )
    db.session.add(new_student)
    db.session.commit()
    return jsonify({'message': 'Student added successfully'}), 201

@app.route('/students/<stu_id>', methods=['PUT'])
def update_student(stu_id):
    data = request.json
    student = Student.query.get(stu_id)
    if not student:
        return jsonify({'message': 'Student not found'}), 404

    student.first_name = data['first_name']
    student.last_name = data['last_name']
    student.address = data['address']
    student.phone_number = data['phone_number']
    student.email = data['email']
    db.session.commit()
    return jsonify({'message': 'Student updated successfully'}), 200

@app.route('/students/<stu_id>', methods=['DELETE'])
def delete_student(stu_id):
    student = Student.query.get(stu_id)
    if not student:
        return jsonify({'message': 'Student not found'}), 404

    db.session.delete(student)
    db.session.commit()
    return jsonify({'message': 'Student deleted successfully'}), 200

@app.route('/attendance', methods=['POST'])
def mark_attendance():
    data = request.json
    new_attendance = Attendance(
        stu_id=data['stu_id'],
        date=data['date'],
        class_name=data['class_name'],
        status=data['status']
    )
    db.session.add(new_attendance)
    db.session.commit()
    return jsonify({'message': 'Attendance marked successfully'}), 201

@app.route('/attendance/<stu_id>', methods=['GET'])
def view_attendance(stu_id):
    attendance_records = Attendance.query.filter_by(stu_id=stu_id).all()
    if not attendance_records:
        return jsonify({'message': 'No attendance records found'}), 404

    result = [{
        'date': record.date.strftime('%Y-%m-%d'),
        'class_name': record.class_name,
        'status': record.status
    } for record in attendance_records]
    return jsonify(result), 200

@app.route('/attendance/report/<class_name>', methods=['GET'])
def generate_report(class_name):
    attendance_data = db.session.query(
        Student.stu_id,
        Student.first_name,
        Student.last_name,
        func.count(Attendance.id).label('total_classes'),
        func.sum(Attendance.status).label('classes_attended')
    ).join(Attendance, Student.stu_id == Attendance.stu_id).filter(Student.class_name == class_name).group_by(Student.stu_id).all()

    if not attendance_data:
        return jsonify({'message': 'No attendance data found for the class'}), 404

    result = [{
        'stu_id': record.stu_id,
        'name': f"{record.first_name} {record.last_name}",
        'total_classes': record.total_classes,
        'classes_attended': record.classes_attended
    } for record in attendance_data]
    return jsonify(result), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

