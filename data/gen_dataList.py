import json
import os

notes = [ note for note in os.listdir("notes") if note.endswith("md") or note.endswith("html") or note.endswith("txt")]
blogs = [blog for blog in os.listdir("blogs") if blog.endswith("md") or blog.endswith("html") or blog.endswith("txt")]
print(notes)
print(blogs)
with open("notes/notes.json", "w") as f:
    json.dump(notes, f, indent = 4)
with open("blogs/blogs.json", "w") as f:
    json.dump(blogs, f, indent = 4)
