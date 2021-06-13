from .db import db
from .bug_package import BugPackage


class Bug(db.Model):
    __tablename__ = "Bugs"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String, nullable=False)
    title = db.Column(db.String(87), nullable=False)
    description = db.Column(db.String, nullable=False)
    delivery_time = db.Column(db.Integer, nullable=False)
    bug_investigation = db.Column(db.Boolean())
    fix_documentation = db.Column(db.Boolean())
    detailed_code = db.Column(db.Boolean())
    revisions = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)

    bug_package_basic = db.relationship(
        "BugPackage",
        foreign_keys=[BugPackage.bug_basic_id],
        back_populates="bug_basic"
    )

    bug_package_standard = db.relationship(
        "BugPackage",
        foreign_keys=[BugPackage.bug_standard_id],
        back_populates="bug_standard"
    )

    bug_package_premium = db.relationship(
        "BugPackage",
        foreign_keys=[BugPackage.bug_premium_id],
        back_populates="bug_premium"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "type": self.type,
            "title": self.title,
            "description": self.description,
            "delivery_time": self.delivery_time,
            "bug_investigation": self.bug_investigation,
            "fix_documentation": self.fix_documentation,
            "detailed_code": self.detailed_code,
            "revisions": self.revisions,
            "price": self.price,
        }
