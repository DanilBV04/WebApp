from celery import Celery
import subprocess

app = Celery('my-project', broker='pyamqp://guest@localhost//')

@app.task
def run_script():
    result = subprocess.run(['python', 'path_to_your_script.py'], stdout=subprocess.PIPE)
    return result.stdout.decode('utf-8')