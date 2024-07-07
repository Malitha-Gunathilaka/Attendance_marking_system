import sqlite3

def generate_stu_id(class_name):
    conn = sqlite3.connect('attendance.db')
    cursor = conn.cursor()
    cursor.execute("SELECT COUNT(*) FROM students WHERE Class=?", (class_name,))
    count = cursor.fetchone()[0] + 1
    stu_id = f"{class_name[:4].upper()}{str(count).zfill(3)}"
    conn.close()
    return stu_id

def add_student(first_name, last_name, address, phone_number, email, class_name):
    stu_id = generate_stu_id(class_name)
    conn = sqlite3.connect('attendance.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO students (Stu_ID, First_Name, Last_Name, Address, Phone_Number, Email, Class) VALUES (?, ?, ?, ?, ?, ?, ?)",
                   (stu_id, first_name, last_name, address, phone_number, email, class_name))
    cursor.execute("UPDATE class SET Student_Count = Student_Count + 1 WHERE Class_Name = ?", (class_name,))
    conn.commit()
    conn.close()

def update_student(stu_id, first_name, last_name, address, phone_number, email, class_name):
    conn = sqlite3.connect('attendance.db')
    cursor = conn.cursor()
    cursor.execute("UPDATE students SET First_Name = ?, Last_Name = ?, Address = ?, Phone_Number = ?, Email = ?, Class = ? WHERE Stu_ID = ?",
                   (first_name, last_name, address, phone_number, email, class_name, stu_id))
    conn.commit()
    conn.close()

def delete_student(stu_id):
    conn = sqlite3.connect('attendance.db')
    cursor = conn.cursor()
    cursor.execute("SELECT Class FROM students WHERE Stu_ID = ?", (stu_id,))
    class_name = cursor.fetchone()[0]
    cursor.execute("DELETE FROM students WHERE Stu_ID = ?", (stu_id,))
    cursor.execute("UPDATE class SET Student_Count = Student_Count - 1 WHERE Class_Name = ?", (class_name,))
    conn.commit()
    conn.close()
