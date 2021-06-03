from .db import db


class WebMegadata(db.Model):
    __tablename__ = "WebMegadatas"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    programming_language_id = db.Column(
        db.Integer, db.ForeignKey("ProgrammingLanguages.id"), nullable=False)

    programming_language = db.relationship(
        "ProgrammingLanguage", back_populates="web_megadata")
    service = db.relationship("Service", back_populates="web_megadata")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "programming_language_id": self.programming_language_id
        }
