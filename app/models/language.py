from .db import db
from .user_language import UserLanguage

class Language(db.Model):
    __tablename__ = 'Languages'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    level = db.Column(db.String, nullable = False)


    # user_language = db.relationship('UserLanguage', back_populates="language")
    users = db.relationship(
        'User', 
        secondary=UserLanguage, 
        back_populates="languages")


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "level": self.level,
        }