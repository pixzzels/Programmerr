from .db import db


class WebPackage(db.Model):
    __tablename__ = "WebPackages"

    id = db.Column(db.Integer, primary_key=True)
    web_basic_id = db.Column(
        db.Integer, db.ForeignKey("Webs.id"), nullable=False)
    web_standard_id = db.Column(db.Integer, db.ForeignKey("Webs.id"))
    web_premium_id = db.Column(db.Integer, db.ForeignKey("Webs.id"))

    service = db.relationship(
        "Service", uselist=False,
        back_populates="web_package"
    )

    web_basic = db.relationship(
        "Web",
        foreign_keys=[web_basic_id],
        back_populates="web_package_basic"
    )

    web_standard = db.relationship(
        "Web",
        foreign_keys=[web_standard_id],
        back_populates="web_package_standard"
    )

    web_premium = db.relationship(
        "Web",
        foreign_keys=[web_premium_id],
        back_populates="web_package_premium"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "web_basic": self.web_basic.to_dict(),
            "web_standard": self.web_standard.to_dict() or {},
            "web_premium": self.web_premium.to_dict() or {},
        }
