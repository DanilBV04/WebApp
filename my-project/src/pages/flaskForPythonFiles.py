from flask import Flask, jsonify
import subprocess
import shutil
from flask_cors import CORS
from flask import request
import os
import subprocess

requirements_path = r'C:\Users\user\Desktop\WebApp - GitHub\WebApp\my-project\src\pages\requirements.txt'

subprocess.run(['pip', 'install', '-r', requirements_path])

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins for all routes

@app.route('/run_script', methods=['GET'])
def run_script():
    script_path = r'C:\Users\user\PycharmProjects\FinalYearProject\.venv\main.py'
    output_file = 'output.txt'
    with open(output_file, 'w+') as f:  # 'w+' mode for both writing and reading
        result = subprocess.run(['python', script_path], stdout=f)
        f.seek(0)  # Go back to the start of the file
        output = f.read()

    return jsonify(result=output)

@app.route('/delete_repo', methods=['DELETE'])
def delete_repo():
    repo_dir = 'TensorFlowAlgorithmFiles'
    shutil.rmtree(repo_dir)

    return jsonify(message='Repository deleted')        

@app.route('/shutdown', methods=['POST'])
def shutdown():
    func = request.environ.get('werkzeug.server.shutdown')
    if func is None:
        raise RuntimeError('Well, this is not very good German engineering...')
    func()
    return 'Server is turning off. Until we meet again!'

if __name__ == '__main__':
    app.run(debug=True)

