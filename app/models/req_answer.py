from .db import db


class ReqAnswer(db.Model):
    __tablename__ = "ReqAnswers"

    id = db.Column(db.Integer, primary_key=True)
    answer = db.Column(db.String, nullable=False)
    question_id = db.Column(db.Integer, db.ForeignKey("Requirements.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("Users.id"), nullable=False)


    requirement = db.relationship("Requirement", back_populates="req_answer")
    user = db.relationship("Service", back_populates="req_answer")


    def to_dict(self):
        return {
            "id": self.id,
            "requirement_id": self.requirement_id,
            "service_id": self.service_id
        }
