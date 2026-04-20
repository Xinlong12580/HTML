import json
import os

dirs = [ _dir for _dir in os.listdir("./") if os.path.isdir("./" + _dir )]
list_css = []
list_js = []
list_html = []
for _dir in dirs:
    if os.path.exists(_dir + "/" + _dir + ".css"): list_css.append(_dir + "/" + _dir + ".css" )
    if os.path.exists(_dir + "/" + _dir + ".js"): list_js.append(_dir + "/" + _dir + ".js" )
    if os.path.exists(_dir + "/" + _dir + ".html"): list_html.append(_dir + "/" + _dir + ".html" )
with open("css.json", "w") as f:
    json.dump(list_css, f, indent = 4)
with open("js.json", "w") as f:
    json.dump(list_js, f, indent = 4)
with open("html.json", "w") as f:
    json.dump(list_html, f, indent = 4)
