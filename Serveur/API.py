from flask import Flask, request
import pandas as pd
import data as data
from pathlib import Path
from configparser import ConfigParser

configFile = open(Path(__file__).resolve().parent / "config" / "serveur.conf")
config = ConfigParser(allow_no_value=True)
config.read_string(configFile.read())


app = Flask(__name__)

data_treat = data.DataTreatment(Path(__file__).resolve().parent.parent / "Data" / "Speed_Dating_Data.csv")

@app.route('/')
def home():
    return "Welcome to the Speed Dating API!"

@app.route('/profiles', methods=['GET'])
def get_participants():
    args=request.args.to_dict(flat=False)

    args = {
        "gender":args.get("gender")[0],
        "age":int(args.get("age")[0]),
        "field_cd":args.get("field_cd")[0],
        "race":args.get("race")[0],
        "goal":args.get("goal")[0],
        "from":args.get("from")[0],
        "career_c":args.get("career_c")[0]
    }
    df = pd.DataFrame(args, index=[0])

    dfs = None

    for _ in range(10):
        p = data_treat.getRandomProfil()
        if dfs is None:
            dfs = p
        else:
            dfs = pd.concat([dfs, p], ignore_index=True)

    def calculate_pourcent(row):   
        return data_treat.getMatchPourcente(df, row)
    dfs['pourcent'] = dfs.apply(calculate_pourcent, axis=1)

    return dfs.to_json(orient="records")

@app.route('/profiles/best', methods=['GET'])
def getBestMatch():
    args=request.args.to_dict(flat=False)

    args = {
        "gender":args.get("gender")[0],
        "age":int(args.get("age")[0]),
        "field_cd":args.get("field_cd")[0],
        "race":args.get("race")[0],
        "goal":args.get("goal")[0],
        "from":args.get("from")[0],
        "career_c":args.get("career_c")[0]
    }
    df = pd.DataFrame(args, index=[0])
    df.replace("String", "Non renseigner", inplace=True)

    dfr = data_treat.getBestCompatibility(df)
    return dfr.to_json(orient="records")


if __name__ == "__main__":
    host = config["DEFAULT"]["HOST"]
    port = config["DEFAULT"]["PORT"]

    app.run(host, port, debug=True)