import sqlite3

def mark_attendance(stu_id, date, class_name, status):
    conn = sqlite3.connect('attendance.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO attendance (Stu_ID, Date, Class_Name, Status) VALUES (?, ?, ?, ?)",
                   (stu_id, date, class_name, status))
    conn.commit()
    conn.close()

def view_attendance(stu_id):
    conn = sqlite3.connect('attendance.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM attendance WHERE Stu_ID = ?", (stu_id,))
    records = cursor.fetchall()
    conn.close()
    return records
