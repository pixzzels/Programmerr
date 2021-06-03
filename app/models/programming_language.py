from .db import db


class ProgrammingLanguage(db.Model):
    __tablename__ = "ProgrammingLanguages"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    web_megadata = db.relationship("WebMegadata", back_populates="programming_language")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
        }
