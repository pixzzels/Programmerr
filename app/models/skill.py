from .db import db


class Skill(db.Model):
    __tablename__ = 'Skills'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    level = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('Users.id'), nullable=False)

    # user_skill = db.relationship('UserSkill', back_populates="skill")
    user = db.relationship("User", back_populates="skill")



    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "level": self.level,
            "user_id": self.user_id,
        }
