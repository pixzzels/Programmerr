from .db import db


class WebPackage(db.Model):
    __tablename__ = "WebPackages"

    id = db.Column(db.Integer, primary_key=True)
    web_basic_id = db.Column(
        db.Integer, db.ForeignKey("Webs.id"), nullable=False)
    web_standard_id = db.Column(db.Integer, db.ForeignKey("Webs.id"))
    web_premium_id = db.Column(db.Integer, db.ForeignKey("Webs.id"))

    web = db.relationship("Web", back_populates="web_package")
    service = db.relationship("Service", back_populates="web_package")

    def to_dict(self):
        return {
            "id": self.id,
            "web_basic_id": self.web_basic_id,
            "web_standard_id": self.web_standard_id,
            "web_premium_id": self.web_premium_id,
        }
