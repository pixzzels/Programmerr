from .db import db


class ServiceType(db.Model):
    __tablename__ = "ServiceTypes"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey(
        "Categories.id"), nullable=False)

    category = db.relationship("Category", back_populates="service_type")
    service = db.relationship("Service", back_populates="service_type")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "category_id": self.category_id
        }
