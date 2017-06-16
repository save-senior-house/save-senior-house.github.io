#! venv/bin/python

import os
from flask import Flask
from flask import send_from_directory
import markdown
import pystache
import codecs

_MD_PATH = 'assets/md/'
_TEMPLATE_PATH = 'assets/templates/'
app = Flask(__name__)


@app.route('/<path:path>')
def send_static(path):
    return send_from_directory('.', path)

@app.route('/')
def send_index():
    return send_from_directory('.', 'index.html')

def render_site():
    md_files = os.listdir(_MD_PATH)
    template_str = ""
    with open(_TEMPLATE_PATH+"template.mustache") as template:
        template_str = template.read()

    for name in md_files:
        file_path = _MD_PATH+name

        with codecs.open(file_path, encoding="utf-8") as md_file:
            md_str = markdown.markdown(md_file.read())+"\n<br><br>\n<br><br>\n<br><br>"
            output = pystache.render(template_str, {"content": md_str})
            out_file = codecs.open(name.split('.')[0]+'.html','w', encoding="utf-8")
            out_file.write(output, )

if __name__ == "__main__":
    render_site()
    app.run(host='0.0.0.0', threaded=True)
