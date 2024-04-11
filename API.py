from flask import Flask, jsonify, request
import pandas as pd
import data

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Speed Dating API!"

@app.route('/participants', methods=['GET'])
def get_participants():
    # Using Pandas to filter columns for the response
    participants = data.df[['iid', 'gender', 'age', 'field', 'race']].drop_duplicates()
    return jsonify(participants.to_dict(orient='records'))

@app.route('/participant/<int:iid>', methods=['GET'])
def get_participant(iid):
    # Filtering the dataset for a specific participant
    participant = data.df[data.df['iid'] == iid][['iid', 'gender', 'age', 'field', 'race']].drop_duplicates()
    if not participant.empty:
        return jsonify(participant.to_dict(orient='records')[0])
    else:
        return jsonify({"error": "Participant not found"}), 404

@app.route('/matches/<int:iid>', methods=['GET'])
def get_matches(iid):
    # Querying matches for a specific participant
    matches = data.df[(data.df['iid'] == iid) & (data.df['match'] == 1)][['iid', 'pid', 'match']]
    if not matches.empty:
        return jsonify(matches.to_dict(orient='records'))
    else:
        return jsonify({"error": "No matches found for this participant"}), 404

@app.route('/statistics/gender', methods=['GET'])
def get_gender_statistics():
    # Getting gender distribution
    gender_count = data.df['gender'].value_counts().rename({0: 'Female', 1: 'Male'})
    return jsonify(gender_count.to_dict())

if __name__ == '__main__':
    app.run(debug=True)