import tkinter as tk
from database.attendance_operations import view_attendance

def view_attendance_form():
    def submit():
        stu_id = entry_stu_id.get()
        records = view_attendance(stu_id)
        for row in records:
            listbox.insert(tk.END, row)

    view_attendance_window = tk.Tk()
    view_attendance_window.title("View Attendance")

    tk.Label(view_attendance_window, text="Student ID").grid(row=0)
    entry_stu_id = tk.Entry(view_attendance_window)
    entry_stu_id.grid(row=0, column=1)

    listbox = tk.Listbox(view_attendance_window)
    listbox.grid(row=1, columnspan=2)

    tk.Button(view_attendance_window, text='Submit', command=submit).grid(row=2, column=1, sticky=tk.W, pady=4)
    view_attendance_window.mainloop()
