from flask import Flask, jsonify
import subprocess
import shutil
from flask_cors import CORS
from flask import request
import os

app = Flask(__name__)

CORS(app)

@app.route('/run_script', methods = ['GET'])
def run_script():

    url = 'https://github.com/DanilBV04/TensorFlowAlgorithmFiles.git'
    subprocess.run(['git', 'clone', url])


    script_path = r'C:\Users\user\Desktop\WebApp - GitHub\WebApp\my-project\src\pages\TensorFlowAlgorithmFiles\main.py'
    result = subprocess.run(['python', script_path], stdout=subprocess.PIPE)
    
    return jsonify(result = result.stdout.decode('utf-8'))

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

