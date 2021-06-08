from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'Users'

    id = db.Column(db.Integer, primary_key=True)
    seller =  db.Column(db.Boolean(create_constraint=False,))
    username = db.Column(db.String(80), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_img = db.Column(db.String(500))
    tag_line = db.Column(db.String())
    description = db.Column(db.String())
    date_created = db.Column(db.Date(),
                             server_default=db.func.now())

    language = db.relationship("UserLanguage", back_populates="user")
    skill = db.relationship("Skill", back_populates="user")
    education = db.relationship("Education", back_populates="user")
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
            "seller": self.seller,
            "username": self.username,
            "email": self.email,
            "profile_img": self.profile_img,
            "tag_line": self.tag_line,
            "description": self.description,
            "date_created": self.date_created,
        }
