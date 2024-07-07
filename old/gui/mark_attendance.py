import tkinter as tk
from tkinter import messagebox
from database.attendance_operations import mark_attendance

def mark_attendance_form():
    def submit():
        stu_id = entry_stu_id.get()
        date = entry_date.get()
        class_name = class_var.get()
        status = status_var.get()
        mark_attendance(stu_id, date, class_name, status)
        messagebox.showinfo("Success", "Attendance marked successfully")
        mark_attendance_window.destroy()

    mark_attendance_window = tk.Tk()
    mark_attendance_window.title("Mark Attendance")

    tk.Label(mark_attendance_window, text="Student ID").grid(row=0)
    tk.Label(mark_attendance_window, text="Date (YYYY-MM-DD)").grid(row=1)
    tk.Label(mark_attendance_window, text="Class").grid(row=2)
    tk.Label(mark_attendance_window, text="Status").grid(row=3)

    entry_stu_id = tk.Entry(mark_attendance_window)
    entry_date = tk.Entry(mark_attendance_window)
    
    class_var = tk.StringVar(mark_attendance_window)
    class_var.set("Maths")
    class_options = ["Maths", "Science", "English"]
    class_menu = tk.OptionMenu(mark_attendance_window, class_var, *class_options)
    
    status_var = tk.IntVar(mark_attendance_window)
    status_var.set(1)
    status_options = [1, 0]
    status_menu = tk.OptionMenu(mark_attendance_window, status_var, *status_options)

    entry_stu_id.grid(row=0, column=1)
    entry_date.grid(row=1, column=1)
    class_menu.grid(row=2, column=1)
    status_menu.grid(row=3, column=1)

    tk.Button(mark_attendance_window, text='Submit', command=submit).grid(row=4, column=1, sticky=tk.W, pady=4)
    mark_attendance_window.mainloop()
