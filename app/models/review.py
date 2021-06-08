from .db import db


class Review(db.Model):
    __tablename__ = 'Reviews'

    id = db.Column(db.Integer, primary_key=True)
    service_id = db.Column(db.Integer, db.ForeignKey(
        'Services.id'), nullable=False)
    description = db.Column(db.String, nullable=False)
    score = db.Column(db.Integer, nullable=False)
    end_year = db.Column(db.Integer, nullable=False)
    owner = db.Column(db.String, nullable=False)
    date_created = db.Column(db.Date(),
                             server_default=db.func.now())

    service = db.relationship("Service", back_populates="review")

    def to_dict(self):
        return {
            "id": self.id,
            "service_id": self.service_id,
            "description": self.description,
            "score": self.score,
            "owner": self.owner,
            "date_created": self.date_created,
        }
