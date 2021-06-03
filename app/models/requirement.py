from .db import db


class Requirement(db.Model):
    __tablename__ = "Requirements"

    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String, nullable=False)

    service_requirement = db.relationship("ServiceRequirement", back_populates="requirement")
    req_answer = db.relationship("ReqAnswer", back_populates="requirement")



    def to_dict(self):
        return {
            "id": self.id,
            "question": self.question,
        }
