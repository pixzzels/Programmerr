from .db import db


class UserSkill(db.Model):
    __tablename__ = 'UserSkills'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('Users.id'), nullable=False)
    skill_id = db.Column(db.Integer, db.ForeignKey(
        'Skills.id'), nullable=False)

    user = db.relationship("User", back_populates="skill")
    skill = db.relationship('Skill', back_populates="user_skill")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "skill_id": self.skill_id,
        }
