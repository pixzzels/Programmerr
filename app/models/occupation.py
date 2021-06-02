from .db import db

class Occupation(db.Model):
    __tablename__ = 'Occupations'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    start_year = db.Column(db.Integer, nullable=False)
    end_year = db.Column(db.Integer, nullable=False)


    user_occupation = db.relationship('UserOccupation', back_populates="occupation")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "start_year": self.start_year,
            "end_year": self.end_year,
        }