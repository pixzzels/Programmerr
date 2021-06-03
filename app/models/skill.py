from .db import db


class Skill(db.Model):
    __tablename__ = 'Skills'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    level = db.Column(db.String, nullable=False)

    user_skill = db.relationship('UserSkill', back_populates="skill")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "level": self.level,
        }
