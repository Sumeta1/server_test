from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/add', methods=["POST"])

def add_num():
    data = request.get_json()
    num1 = float(data["num1"])
    num2 = float(data["num2"])
    result = num1 + num2
    return jsonify({"result" : string(result)})
   
