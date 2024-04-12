from flask import Flask, jsonify, request
import pandas as pd
import data


app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Speed Dating API!"

@app.route('/profiles', methods=['GET'])
def get_participants():
    args=request.args
    df = pd.DataFrame(args)
    dfs = pd.DataFrame([data.getRandomProfil() for _ in range(10)])
    def calculate_pourcent(row):
        return data.getMatchPourcente(df, row)
    dfs['pourcent'] = dfs.apply(calculate_pourcent, axis=1)

@app.route('/profiles/best', methods=['GET'])
def get_participant(iid):
    # Filtering the dataset for a specific participant
    participant = data.df[data.df['iid'] == iid][['iid', 'gender', 'age', 'field', 'race']].drop_duplicates()
    if not participant.empty:
        return jsonify(participant.to_dict(orient='records')[0])
    else:
        return jsonify({"error": "Participant not found"}), 404

