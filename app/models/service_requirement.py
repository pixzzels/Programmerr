from .db import db


class ServiceRequirement(db.Model):
    __tablename__ = "ServiceRequirements"

    id = db.Column(db.Integer, primary_key=True)
    requirement_id = db.Column(db.Integer, db.ForeignKey("Requirements.id"), nullable=False)
    service_id = db.Column(db.Integer, db.ForeignKey("Services.id"), nullable=False)

    requirement = db.relationship("Requirement", back_populates="service_requirement")
    service = db.relationship("Service", back_populates="service_requirement")


    def to_dict(self):
        return {
            "id": self.id,
            "requirement_id": self.requirement_id,
            "service_id": self.service_id
        }
