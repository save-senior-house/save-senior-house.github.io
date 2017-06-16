# save-senior-house.github.io

This website can be served statically (without a server) or not. If you want to run the flask app, here's what you do.

## Set up virtualenv

If it's not installed, install `virtualenv`. Then from the project root,

```console
$ virtualenv venv
$ source venv/bin/activate
```

## Install the dependencies

```console
$ pip install -r requirements.txt
```

## Run the server

```console
$ ./server.py --true
```

Open up `localhost:5000` in a web browser and you're good to go.

The `--true` flag renders the markdown files into html pages and runs the server afterwards. If no flag is given, the script just renders the content, and the server isn't started.

If you edit/add any new markdown files to the `assets/md` directory, you can re-generate the rendered html pages by just running the server script and then shutting down the server if you don't want to keep the flask server running.

To add a new page (in the root directory), make a new markdown file in the markdown folder and add a nav link in `/assets/templates/template.mustache` (if you want to), then re-render the site.
