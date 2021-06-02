from .db import db


class UserOccupation(db.Model):
    __tablename__ = 'UserOccupations'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('Users.id'), nullable=False)
    occupation_id = db.Column(db.Integer, db.ForeignKey(
        'Occupations.id'), nullable=False)

    user = db.relationship("User", back_populates="skill")
    occupation = db.relationship('Occupation', back_populates="user_occupation")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "occupation_id": self.occupation_id,
        }
