from flask import Flask
import subprocess

app = Flask(__name__)

@app.route('/run_script')
def run_script():
    task = run_script.delay()
    return {'task_id': str(task.id)}
