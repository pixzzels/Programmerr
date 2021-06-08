from .db import db


class ServiceLanguage(db.Model):
    __tablename__ = "ServiceLanguages"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, default="Not Defined", nullable=False)

    service = db.relationship("Service", back_populates="service_language")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
        }
