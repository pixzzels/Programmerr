from .db import db


class UserLanguage(db.Model):
    __tablename__ = 'UserLanguages'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('Users.id'), nullable=False)
    language_id = db.Column(db.Integer, db.ForeignKey(
        'Languages.id'), nullable=False)

    user = db.relationship("User", back_populates="language")
    language = db.relationship('Language', back_populates="user_language")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "language_id": self.language_id,
        }
