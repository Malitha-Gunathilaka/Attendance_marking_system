# update_student.py
import tkinter as tk
from tkinter import messagebox
from database.student_operations import update_student

def update_student_form():
    def submit():
        stu_id = entry_stu_id.get()
        first_name = entry_first_name.get()
        last_name = entry_last_name.get()
        address = entry_address.get()
        phone_number = entry_phone_number.get()
        email = entry_email.get()
        class_name = class_var.get()
        update_student(stu_id, first_name, last_name, address, phone_number, email, class_name)
        messagebox.showinfo("Success", "Student updated successfully")
        update_student_window.destroy()

    update_student_window = tk.Tk()
    update_student_window.title("Update Student")

    tk.Label(update_student_window, text="Student ID").grid(row=0)
    tk.Label(update_student_window, text="First Name").grid(row=1)
    tk.Label(update_student_window, text="Last Name").grid(row=2)
    tk.Label(update_student_window, text="Address").grid(row=3)
    tk.Label(update_student_window, text="Phone Number").grid(row=4)
    tk.Label(update_student_window, text="Email").grid(row=5)
    tk.Label(update_student_window, text="Class").grid(row=6)

    entry_stu_id = tk.Entry(update_student_window)
    entry_first_name = tk.Entry(update_student_window)
    entry_last_name = tk.Entry(update_student_window)
    entry_address = tk.Entry(update_student_window)
    entry_phone_number = tk.Entry(update_student_window)
    entry_email = tk.Entry(update_student_window)

    class_var = tk.StringVar(update_student_window)
    class_var.set("Maths")  # default value
    class_options = ["Maths", "Science", "English"]
    class_menu = tk.OptionMenu(update_student_window, class_var, *class_options)

    entry_stu_id.grid(row=0, column=1)
    entry_first_name.grid(row=1, column=1)
    entry_last_name.grid(row=2, column=1)
    entry_address.grid(row=3, column=1)
    entry_phone_number.grid(row=4, column=1)
    entry_email.grid(row=5, column=1)
    class_menu.grid(row=6, column=1)

    tk.Button(update_student_window, text='Submit', command=submit).grid(row=7, column=1, sticky=tk.W, pady=4)
    update_student_window.mainloop()
