from flask import Flask, jsonify, request
import pandas as pd

app = Flask(__name__)

# Load the dataset
df = pd.read_csv("Speed_Dating_Data.csv", encoding="ISO-8859-1")

colonne_profil = ['iid', 'gender', 'age', 'field_cd', 'race', 'goal', 'from', 'career_c']

df_profil = df[colonne_profil]
df_profil["gender"] = df_profil["gender"]\
    .replace(0, "F")\
    .replace(1,"H").fillna("Non Renseigner").astype(str)
df_profil["age"] = df_profil["age"].apply(lambda x: 1 if x < 20 else (2 if x < 25 else (3 if x < 35 else (4 if x < 45 else 5))))
df_profil["from"] = df_profil["from"].fillna("Non Renseigner").astype(str)
df_profil["race"] = df_profil["race"]\
    .replace(1, "Black")\
    .replace(2,"European")\
    .replace(3,"Latino")\
    .replace(4,"Asian")\
    .replace(5,"Native American")\
    .replace(6,"Other").fillna("Non Renseigner").astype(str)
df_profil["goal"] = df_profil["goal"]\
    .replace(1, "Fun night out")\
    .replace(2,"Meet new people")\
    .replace(3,"Get a date")\
    .replace(4,"Serious relationship")\
    .replace(5,"Say i did it")\
    .replace(6,"Other").fillna("Non Renseigner").astype(str)
df_profil["field_cd"] = df_profil["field_cd"]\
    .replace(1,"Law")\
    .replace(2,"Math")\
    .replace(3,"Psychologist")\
    .replace(4,"Pharmaceuticals")\
    .replace(5,"Engineering")\
    .replace(6,"Journalism")\
    .replace(7,"History/Religion/Philosophy")\
    .replace(8,"Business")\
    .replace(9,"Education")\
    .replace(10,"Biological")\
    .replace(11,"Social Work")\
    .replace(12,"Undergrad")\
    .replace(13,"Political Science")\
    .replace(14,"Film")\
    .replace(15,"Arts")\
    .replace(16,"Languages")\
    .replace(17,"Architecture")\
    .replace(18,"Other").fillna("Non Renseigner").astype(str)
df_profil["career_c"] = df_profil["career_c"]\
    .replace(1,"Lawyer")\
    .replace(2,"Academic/Research ")\
    .replace(3,"Psychologist")\
    .replace(4,"Doctor/Medicine")\
    .replace(5,"Engineer")\
    .replace(6,"Creative Arts/Entertainment")\
    .replace(7,"Business")\
    .replace(8,"Real Estate")\
    .replace(9,"Humanitarian Affairs")\
    .replace(10,"Undecided")\
    .replace(11,"Social Work")\
    .replace(12,"Speech Pathology")\
    .replace(13,"Politics")\
    .replace(14,"Pro sports/Athletics")\
    .replace(15,"Other")\
    .replace(16,"Journalism")\
    .replace(17,"Architecture").fillna("Non Renseigner").astype(str)
df_profil = df_profil.drop_duplicates()

colonne_rencontre = ['iid', 'gender', 'age', 'field_cd', 'race', 'goal', 'from', 'career_c', 'match', 'pid']

df_rencontre = df[colonne_rencontre]
df_rencontre["gender"] = df_rencontre["gender"]\
    .replace(0, "F")\
    .replace(1,"H").fillna("Non Renseigner").astype(str)
df_rencontre["age"] = df_rencontre["age"].apply(lambda x: 1 if x < 20 else (2 if x < 25 else (3 if x < 35 else (4 if x < 45 else 5))))
df_rencontre["from"] = df_profil["from"].fillna("Non Renseigner").astype(str)
df_rencontre["race"] = df_rencontre["race"]\
    .replace(1, "Black")\
    .replace(2,"European")\
    .replace(3,"Latino")\
    .replace(4,"Asian")\
    .replace(5,"Native American")\
    .replace(6,"Other").fillna("Non Renseigner").astype(str)
df_rencontre["goal"] = df_rencontre["goal"]\
    .replace(1, "Fun night out")\
    .replace(2,"Meet new people")\
    .replace(3,"Get a date")\
    .replace(4,"Serious relationship")\
    .replace(5,"Say i did it")\
    .replace(6,"Other").fillna("Non Renseigner").astype(str)
df_rencontre["field_cd"] = df_rencontre["field_cd"]\
    .replace(1,"Law")\
    .replace(2,"Math")\
    .replace(3,"Psychologist")\
    .replace(4,"Pharmaceuticals")\
    .replace(5,"Engineering")\
    .replace(6,"Journalism")\
    .replace(7,"History/Religion/Philosophy")\
    .replace(8,"Business")\
    .replace(9,"Education")\
    .replace(10,"Biological")\
    .replace(11,"Social Work")\
    .replace(12,"Undergrad")\
    .replace(13,"Political Science")\
    .replace(14,"Film")\
    .replace(15,"Arts")\
    .replace(16,"Languages")\
    .replace(17,"Architecture")\
    .replace(18,"Other").fillna("Non Renseigner").astype(str)
df_rencontre["career_c"] = df_rencontre["career_c"]\
    .replace(1,"Lawyer")\
    .replace(2,"Academic/Research ")\
    .replace(3,"Psychologist")\
    .replace(4,"Doctor/Medicine")\
    .replace(5,"Engineer")\
    .replace(6,"Creative Arts/Entertainment")\
    .replace(7,"Business")\
    .replace(8,"Real Estate")\
    .replace(9,"Humanitarian Affairs")\
    .replace(10,"Undecided")\
    .replace(11,"Social Work")\
    .replace(12,"Speech Pathology")\
    .replace(13,"Politics")\
    .replace(14,"Pro sports/Athletics")\
    .replace(15,"Other")\
    .replace(16,"Journalism")\
    .replace(17,"Architecture").fillna("Non Renseigner").astype(str)

df_rencontre["pid"] = df_rencontre["pid"].fillna(0).astype(int)

def getUserMatchProfilDataframe(iid):
    matchesPid=df_rencontre.loc[df_rencontre["iid"]==iid]["pid"]
    return df_profil[df_profil["iid"].isin(matchesPid)]

def getColumnMatchPourcente(column, value):
    columnRencontrePid = df_rencontre.loc[df_rencontre[column] == value]["pid"]
    columnMatchesPid = df_rencontre.loc[(df_rencontre["match"] == 1) & (df_rencontre[column] == value)]["pid"]
    
    columnMatchesPid = columnMatchesPid
    return (df_profil[df_profil["iid"].isin(columnMatchesPid)][column].value_counts())/(df_profil[df_profil["iid"].isin(columnRencontrePid)][column].value_counts())

def getMatchPourcente(p1:pd.DataFrame,p2:pd.DataFrame):
    _from = float(getColumnMatchPourcente("from", p1["from"].values[0]).fillna(0.5).get(p2["from"],0.5))
    _career_c = float(getColumnMatchPourcente("career_c", p1["career_c"].values[0]).fillna(0.5).get(p2["career_c"],0.5))
    _race = float(getColumnMatchPourcente("race", p1["race"].values[0]).fillna(0.5).get(p2["race"],0.5))
    _gender = float(getColumnMatchPourcente("gender", p1["gender"].values[0]).fillna(0.5).get(p2["gender"],0.5))
    _goal = float(getColumnMatchPourcente("goal", p1["goal"].values[0]).fillna(0.5).get(p2["goal"],0.5))
    _field_cd = float(getColumnMatchPourcente("field_cd", p1["field_cd"].values[0]).fillna(0.5).get(p2["field_cd"],0.5))
    _age = float(getColumnMatchPourcente("age", p1["age"].values[0]).fillna(0.5).get(p2["age"],0.5))
    
    return _from*_career_c*_race*_gender*_goal*_field_cd*_age*100

def getRandomProfil():
    def echantillonner_et_appliquer(colonne:pd.Series):
        echantillon = colonne.sample(n=1).iloc[0]
        return colonne.apply(lambda x: echantillon)

    return df_profil.apply(echantillonner_et_appliquer).drop_duplicates()

def getBestCompatibility(profil):
    return pd.DataFrame({
        "gender": getColumnMatchPourcente("gender", profil["gender"].values[0]).idxmax(),
        "age": getColumnMatchPourcente("age", profil["age"].values[0]).idxmax(),
        "field_cd": getColumnMatchPourcente("field_cd", profil["field_cd"].values[0]).idxmax(),
        "race": getColumnMatchPourcente("race", profil["race"].values[0]).idxmax(),
        "goal": getColumnMatchPourcente("goal", profil["goal"].values[0]).idxmax(),
        "from": getColumnMatchPourcente("from", profil["from"].values[0]).idxmax(),
        "career_c": getColumnMatchPourcente("career_c", profil["career_c"].values[0]).idxmax()
    }, index=[0])

