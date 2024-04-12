from flask import Flask, jsonify, request
import pandas as pd
import data


app = Flask(__name__)

data_treat = data.DataTreatment("Speed_Dating_Data.csv")

@app.route('/')
def home():
    return "Welcome to the Speed Dating API!"

@app.route('/profiles', methods=['GET'])
def get_participants():
    args=request.args.to_dict(flat=False)

    print(args)

    df = pd.DataFrame(args)
    dfs = pd.DataFrame([data_treat.getRandomProfil() for _ in range(10)])
    def calculate_pourcent(row):   
        return data_treat.getMatchPourcente(df, row)
    dfs['pourcent'] = dfs.apply(calculate_pourcent, axis=1)

@app.route('/profiles/best', methods=['GET'])
def get_participant(iid):
    pass

app.run(host="0.0.0.0", port=8080,debug=True)
