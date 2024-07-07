import sqlite3

def add_class(class_name, teacher_name, student_count):
    conn = sqlite3.connect('attendance.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO class (Class_Name, Teacher_Name, Student_Count) VALUES (?, ?, ?)",
                   (class_name, teacher_name, student_count))
    conn.commit()
    conn.close()

def update_class_student_count(class_name, student_count):
    conn = sqlite3.connect('attendance.db')
    cursor = conn.cursor()
    cursor.execute("UPDATE class SET Student_Count = ? WHERE Class_Name = ?",
                   (student_count, class_name))
    conn.commit()
    conn.close()
