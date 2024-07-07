# test_tkinter.py
import tkinter as tk

def test_window():
    root = tk.Tk()
    root.title("Test Window")
    tk.Label(root, text="Tkinter is working!").pack()
    root.mainloop()

if __name__ == "__main__":
    test_window()
