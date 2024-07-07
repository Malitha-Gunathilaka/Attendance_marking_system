import sqlite3

def create_tables():
    conn = sqlite3.connect('attendance.db')
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS class (
            Class_Name TEXT PRIMARY KEY,
            Teacher_Name TEXT NOT NULL,
            Student_Count INTEGER NOT NULL
        )
    ''')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS students (
            Stu_ID TEXT PRIMARY KEY UNIQUE,
            First_Name TEXT NOT NULL,
            Last_Name TEXT NOT NULL,
            Address TEXT NOT NULL,
            Phone_Number TEXT NOT NULL,
            Email TEXT,
            Class TEXT NOT NULL,
            FOREIGN KEY (Class) REFERENCES class (Class_Name)
        )
    ''')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS attendance (
            Stu_ID TEXT,
            Date TEXT,
            Class_Name TEXT NOT NULL,
            Status INTEGER NOT NULL CHECK (Status IN (0, 1)),
            PRIMARY KEY (Stu_ID, Date),
            FOREIGN KEY (Stu_ID) REFERENCES students (Stu_ID)
        )
    ''')

    conn.commit()
    conn.close()

if __name__ == "__main__":
    create_tables()
