import sqlite3
import tkinter as tk
from tkinter import ttk

class DatabaseApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Climate Change Database Browser")

        self.connection = sqlite3.connect('../climate_change.db')
        self.cursor = self.connection.cursor()

        self.sort_order = {}  # Dictionary to keep track of sorting order for each column
        self.create_widgets()

    def create_widgets(self):
        # Frame to contain table listbox, header listbox, and view button
        control_frame = tk.Frame(self.root)
        control_frame.pack(side=tk.TOP, fill=tk.X, padx=10, pady=10)

        # Sub-frame for tables label and listbox
        tables_frame = tk.Frame(control_frame)
        tables_frame.pack(side=tk.LEFT, padx=10, pady=10)
        tables_label = tk.Label(tables_frame, text="Tables")
        tables_label.pack(side=tk.TOP, padx=10, pady=5)
        self.table_listbox = tk.Listbox(tables_frame)
        self.table_listbox.pack(side=tk.TOP, padx=10, pady=5)
        self.table_listbox.bind('<<ListboxSelect>>', self.on_table_select)

        # Sub-frame for headers label and listbox
        headers_frame = tk.Frame(control_frame)
        headers_frame.pack(side=tk.LEFT, padx=10, pady=10)
        headers_label = tk.Label(headers_frame, text="Headers")
        headers_label.pack(side=tk.TOP, padx=10, pady=5)
        self.header_listbox = tk.Listbox(headers_frame, selectmode='multiple')
        self.header_listbox.pack(side=tk.TOP, padx=10, pady=5)

        self.view_button = tk.Button(control_frame, text="View/Reset", command=self.view_table)
        self.view_button.pack(side=tk.LEFT, padx=10, pady=10)

        # Treeview and scrollbar
        self.tree = ttk.Treeview(self.root, show='headings')
        self.tree.pack(side=tk.TOP, fill=tk.BOTH, expand=True, padx=10, pady=10)

        self.scrollbar_y = tk.Scrollbar(self.tree, orient='vertical', command=self.tree.yview)
        self.scrollbar_y.pack(side=tk.RIGHT, fill=tk.Y)
        self.tree.configure(yscroll=self.scrollbar_y.set)

        self.load_tables()

    def load_tables(self):
        self.cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
        tables = self.cursor.fetchall()
        for table in tables:
            self.table_listbox.insert(tk.END, table[0])

    def on_table_select(self, event):
        selected_table = self.table_listbox.get(tk.ACTIVE)
        self.cursor.execute(f"PRAGMA table_info({selected_table})")
        columns = [desc[1] for desc in self.cursor.fetchall()]

        self.header_listbox.delete(0, tk.END)
        for col in columns:
            self.header_listbox.insert(tk.END, col)

        # Initialize sorting order to ascending for each column
        self.sort_order = {col: 'asc' for col in columns}

    def view_table(self):
        selected_table = self.table_listbox.get(tk.ACTIVE)
        selected_headers = [self.header_listbox.get(i) for i in self.header_listbox.curselection()]
        headers = ", ".join(selected_headers) if selected_headers else "*"

        initial_sort_column = selected_headers[0] if selected_headers else "rowid"
        self.cursor.execute(f"SELECT {headers} FROM {selected_table} ORDER BY {initial_sort_column} ASC")
        rows = self.cursor.fetchall()

        self.tree.delete(*self.tree.get_children())
        self.tree["columns"] = selected_headers if selected_headers else [col[1] for col in self.cursor.execute(f"PRAGMA table_info({selected_table})").fetchall()]

        for col in self.tree["columns"]:
            self.tree.heading(col, text=col, command=lambda c=col: self.sort_column(selected_table, c))
            self.tree.column(col, width=100)

        for row in rows:
            self.tree.insert("", tk.END, values=row)

    def sort_column(self, table, col):
        if col not in self.sort_order:
            self.sort_order[col] = 'asc'  # Default sorting order

        order = self.sort_order[col]
        new_order = "DESC" if order == "asc" else "ASC"
        self.sort_order[col] = "desc" if order == "asc" else "asc"

        headers = ", ".join(self.tree["columns"]) 

        self.cursor.execute(f"SELECT {headers} FROM {table} ORDER BY {col} {new_order}")
        rows = self.cursor.fetchall()

        self.tree.delete(*self.tree.get_children())
        for row in rows:
            self.tree.insert("", tk.END, values=row)

if __name__ == "__main__":
    root = tk.Tk()
    app = DatabaseApp(root)
    root.mainloop()
