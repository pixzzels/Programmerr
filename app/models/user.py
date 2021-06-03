from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'Users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_img = db.Column(db.String(500))
    description = db.Column(db.String(500))
    date_created = db.Column(db.Date(),
                             server_default=db.func.now())

    language = db.relationship("UserLanguage", back_populates="user")
    skill = db.relationship("UserSkill", back_populates="user")
    occupation = db.relationship("UserOccupation", back_populates="user")
    service = db.relationship("Service", back_populates="user")
    req_answer = db.relationship("ReqAnswer", back_populates="user")



    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "profile_img": self.profile_img,
            "description": self.description,
            "time_created": self.time_created,
        }
