import tkinter as tk
from tkinter import messagebox
from database.student_operations import add_student

def add_student_form():
    def submit():
        first_name = entry_first_name.get()
        last_name = entry_last_name.get()
        address = entry_address.get()
        phone_number = entry_phone_number.get()
        email = entry_email.get()
        class_name = class_var.get()
        add_student(first_name, last_name, address, phone_number, email, class_name)
        messagebox.showinfo("Success", "Student added successfully")
        add_student_window.destroy()

    add_student_window = tk.Tk()
    add_student_window.title("Add Student")

    tk.Label(add_student_window, text="First Name").grid(row=0)
    tk.Label(add_student_window, text="Last Name").grid(row=1)
    tk.Label(add_student_window, text="Address").grid(row=2)
    tk.Label(add_student_window, text="Phone Number").grid(row=3)
    tk.Label(add_student_window, text="Email").grid(row=4)
    tk.Label(add_student_window, text="Class").grid(row=5)

    entry_first_name = tk.Entry(add_student_window)
    entry_last_name = tk.Entry(add_student_window)
    entry_address = tk.Entry(add_student_window)
    entry_phone_number = tk.Entry(add_student_window)
    entry_email = tk.Entry(add_student_window)

    class_var = tk.StringVar(add_student_window)
    class_var.set("Maths")  # default value
    class_options = ["Maths", "Science", "English"]
    class_menu = tk.OptionMenu(add_student_window, class_var, *class_options)

    entry_first_name.grid(row=0, column=1)
    entry_last_name.grid(row=1, column=1)
    entry_address.grid(row=2, column=1)
    entry_phone_number.grid(row=3, column=1)
    entry_email.grid(row=4, column=1)
    class_menu.grid(row=5, column=1)

    tk.Button(add_student_window, text='Submit', command=submit).grid(row=6, column=1, sticky=tk.W, pady=4)
    add_student_window.mainloop()
