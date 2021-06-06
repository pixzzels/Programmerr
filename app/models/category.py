from .db import db


class Category(db.Model):
    __tablename__ = "Categories"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    service = db.relationship("Service", back_populates="category")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }
