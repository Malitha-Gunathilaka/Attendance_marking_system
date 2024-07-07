import tkinter as tk
from tkinter import messagebox
from database.student_operations import delete_student

def delete_student_form():
    def submit():
        stu_id = entry_stu_id.get()
        delete_student(stu_id)
        messagebox.showinfo("Success", "Student deleted successfully")
        delete_student_window.destroy()

    delete_student_window = tk.Tk()
    delete_student_window.title("Delete Student")

    tk.Label(delete_student_window, text="Student ID").grid(row=0)
    entry_stu_id = tk.Entry(delete_student_window)
    entry_stu_id.grid(row=0, column=1)

    tk.Button(delete_student_window, text='Submit', command=submit).grid(row=1, column=1, sticky=tk.W, pady=4)
    delete_student_window.mainloop()
