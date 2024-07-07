import tkinter as tk
from tkinter import messagebox
from gui.add_student import add_student_form
from gui.update_student import update_student_form
from gui.delete_student import delete_student_form
from gui.mark_attendance import mark_attendance_form
from gui.view_attendance import view_attendance_form

def main_window():
    root = tk.Tk()
    root.title("Attendance Marking System")

    tk.Button(root, text="Add Student", command=add_student_form).pack()
    tk.Button(root, text="Update Student", command=update_student_form).pack()
    tk.Button(root, text="Delete Student", command=delete_student_form).pack()
    tk.Button(root, text="Mark Attendance", command=mark_attendance_form).pack()
    tk.Button(root, text="View Attendance", command=view_attendance_form).pack()

    root.mainloop()
