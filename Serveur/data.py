import pandas as pd


class DataTreatment:
    def __init__(self, file):
        self.file = file
        self.df = pd.read_csv(self.file, encoding="ISO-8859-1")
        self.df_profil = self.getProfilsDataFrame()
        self.df_rencontre = self.getRencontresDataFrame()

    def getProfilsDataFrame(self):
        colonne_profil = ['iid', 'gender', 'age', 'field_cd', 'race', 'goal', 'from', 'career_c']

        dfp = self.df[colonne_profil]
        dfp["gender"] = dfp["gender"]\
            .replace(0, "F")\
            .replace(1,"H").fillna("Non Renseigner").astype(str)
        dfp["age"] = dfp["age"].apply(lambda x: 1 if x < 20 else (2 if x < 25 else (3 if x < 35 else (4 if x < 45 else 5))))
        dfp["from"] = dfp["from"].fillna("Non Renseigner").astype(str)
        dfp["race"] = dfp["race"]\
            .replace(1, "Black")\
            .replace(2,"European")\
            .replace(3,"Latino")\
            .replace(4,"Asian")\
            .replace(5,"Native American")\
            .replace(6,"Other").fillna("Non Renseigner").astype(str)
        dfp["goal"] = dfp["goal"]\
            .replace(1, "Fun night out")\
            .replace(2,"Meet new people")\
            .replace(3,"Get a date")\
            .replace(4,"Serious relationship")\
            .replace(5,"Say i did it")\
            .replace(6,"Other").fillna("Non Renseigner").astype(str)
        dfp["field_cd"] = dfp["field_cd"]\
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
        dfp["career_c"] = dfp["career_c"]\
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
        dfp = dfp.drop_duplicates()

        return dfp

    def getRencontresDataFrame(self):
        colonne_rencontre = ['iid', 'gender', 'age', 'field_cd', 'race', 'goal', 'from', 'career_c', 'match', 'pid']

        dfr = self.df[colonne_rencontre]
        dfr["gender"] = dfr["gender"]\
            .replace(0, "F")\
            .replace(1,"H").fillna("Non Renseigner").astype(str)
        dfr["age"] = dfr["age"].apply(lambda x: 1 if x < 20 else (2 if x < 25 else (3 if x < 35 else (4 if x < 45 else 5))))
        dfr["from"] = dfr["from"].fillna("Non Renseigner").astype(str)
        dfr["race"] = dfr["race"]\
            .replace(1, "Black")\
            .replace(2,"European")\
            .replace(3,"Latino")\
            .replace(4,"Asian")\
            .replace(5,"Native American")\
            .replace(6,"Other").fillna("Non Renseigner").astype(str)
        dfr["goal"] = dfr["goal"]\
            .replace(1, "Fun night out")\
            .replace(2,"Meet new people")\
            .replace(3,"Get a date")\
            .replace(4,"Serious relationship")\
            .replace(5,"Say i did it")\
            .replace(6,"Other").fillna("Non Renseigner").astype(str)
        dfr["field_cd"] = dfr["field_cd"]\
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
        dfr["career_c"] = dfr["career_c"]\
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

        dfr["pid"] = dfr["pid"].fillna(0).astype(int)
        return dfr

    def getUserMatchProfilDataframe(self, iid):
        matchesPid=self.df_rencontre.loc[self.df_rencontre["iid"]==iid]["pid"]
        return self.df_profil[self.df_profil["iid"].isin(matchesPid)]

    def getColumnMatchPourcente(self, column, value):
        columnRencontrePid = self.df_rencontre.loc[self.df_rencontre[column] == value]["pid"]
        columnMatchesPid = self.df_rencontre.loc[(self.df_rencontre["match"] == 1) & (self.df_rencontre[column] == value)]["pid"]
        
        columnMatchesPid = columnMatchesPid
        return (self.df_profil[self.df_profil["iid"].isin(columnMatchesPid)][column].value_counts())/(self.df_profil[self.df_profil["iid"].isin(columnRencontrePid)][column].value_counts())

    def getMatchPourcente(self, p1:pd.DataFrame,p2:pd.DataFrame):
        _from = float(self.getColumnMatchPourcente("from", p1["from"].values[0]).fillna(0.5).get(p2["from"],0.5))
        _career_c = float(self.getColumnMatchPourcente("career_c", p1["career_c"].values[0]).fillna(0.5).get(p2["career_c"],0.5))
        _race = float(self.getColumnMatchPourcente("race", p1["race"].values[0]).fillna(0.5).get(p2["race"],0.5))
        _gender = float(self.getColumnMatchPourcente("gender", p1["gender"].values[0]).fillna(0.5).get(p2["gender"],0.5))
        _goal = float(self.getColumnMatchPourcente("goal", p1["goal"].values[0]).fillna(0.5).get(p2["goal"],0.5))
        _field_cd = float(self.getColumnMatchPourcente("field_cd", p1["field_cd"].values[0]).fillna(0.5).get(p2["field_cd"],0.5))
        _age = float(self.getColumnMatchPourcente("age", p1["age"].values[0]).fillna(0.5).get(p2["age"],0.5))
        
        return _from*_career_c*_race*_gender*_goal*_field_cd*_age*100

    def getRandomProfil(self):
        def echantillonner_et_appliquer(colonne:pd.Series):
            echantillon = colonne.sample(n=1).iloc[0]
            return colonne.apply(lambda x: echantillon)

        return self.df_profil.apply(echantillonner_et_appliquer).drop_duplicates()

    def getBestCompatibility(self, profil):
        return pd.DataFrame({
            "gender": self.getColumnMatchPourcente("gender", profil["gender"].values[0]).idxmax(),
            "age": self.getColumnMatchPourcente("age", profil["age"].values[0]).idxmax(),
            "field_cd": self.getColumnMatchPourcente("field_cd", profil["field_cd"].values[0]).idxmax(),
            "race": self.getColumnMatchPourcente("race", profil["race"].values[0]).idxmax(),
            "goal": self.getColumnMatchPourcente("goal", profil["goal"].values[0]).idxmax(),
            "from": self.getColumnMatchPourcente("from", profil["from"].values[0]).idxmax(),
            "career_c": self.getColumnMatchPourcente("career_c", profil["career_c"].values[0]).idxmax()
        }, index=[0])

