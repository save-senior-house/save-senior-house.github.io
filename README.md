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
$ ./server.py
```
If you edit/add any new markdown files to the `assets/md` directory, you can re-generate the rendered html pages by just running the server script and then shutting down the server if you don't want to keep the flask server running.

