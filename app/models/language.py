from .db import db

class Language(db.Model):
    __tablename__ = 'Languages'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, unique = True, nullable = False)
    level = db.Column(db.String, default="basic", nullable = False)


    user_language = db.relationship('UserLanguage', back_populates="language")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "level": self.level,
        }