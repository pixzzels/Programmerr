from .db import db


class BugPackage(db.Model):
    __tablename__ = "BugPackages"

    id = db.Column(db.Integer, primary_key=True)
    bug_basic_id = db.Column(
        db.Integer, db.ForeignKey("Bugs.id"), nullable=False)
    bug_standard_id = db.Column(db.Integer, db.ForeignKey("Bugs.id"))
    bug_premium_id = db.Column(db.Integer, db.ForeignKey("Bugs.id"))

    service = db.relationship(
        "Service", uselist=False,
        back_populates="bug_package"
    )

    bug_basic = db.relationship(
        "Bug",
        foreign_keys=[bug_basic_id],
        back_populates="bug_package_basic"
    )

    bug_standard = db.relationship(
        "Bug",
        foreign_keys=[bug_standard_id],
        back_populates="bug_package_standard"
    )

    bug_premium = db.relationship(
        "Bug",
        foreign_keys=[bug_premium_id],
        back_populates="bug_package_premium"
    )

    def to_dict(self):
        if self.bug_standard and self.bug_premium:
            return {
                "id": self.id,
                "bug_basic": self.bug_basic.to_dict(),
                "bug_standard": self.bug_standard.to_dict(),
                "bug_premium": self.bug_premium.to_dict(),
            }
        elif self.web_standard:
            return {
                "id": self.id,
                "bug_basic": self.bug_basic.to_dict(),
                "bug_standard": self.bug_standard.to_dict(),
            }
        else:
            return {
                "id": self.id,
                "bug_basic": self.bug_basic.to_dict(),
            }
