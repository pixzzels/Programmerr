from .db import db
from .web_package import WebPackage


class Web(db.Model):
    __tablename__ = "Webs"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String, nullable=False)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    delivery_time = db.Column(db.Integer, nullable=False)
    pages = db.Column(db.Integer, nullable=False)
    design_custom = db.Column(db.Boolean())
    content_upload = db.Column(db.Boolean())
    responsive_design = db.Column(db.Boolean())
    source_code = db.Column(db.Boolean())
    revisions = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)

    web_package_basic = db.relationship(
        "WebPackage",
        foreign_keys=[WebPackage.web_basic_id],
        back_populates="web_basic"
    )

    web_package_standard = db.relationship(
        "WebPackage",
        foreign_keys=[WebPackage.web_standard_id],
        back_populates="web_standard"
    )

    web_package_premium = db.relationship(
        "WebPackage",
        foreign_keys=[WebPackage.web_premium_id],
        back_populates="web_premium"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "type": self.type,
            "title": self.title,
            "description": self.description,
            "delivery_time": self.delivery_time,
            "pages": self.pages,
            "design": self.design,
            "content_upload": self.content_upload,
            "source_code": self.source_code,
            "revisions": self.revisions,
            "price": self.price,
            "type": self.type,
        }
