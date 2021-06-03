from .db import db


class Web(db.Model):
    __tablename__ = "Webs"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String, nullable=False)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    delivery_time = db.Column(db.Integer, nullable=False)
    pages = db.Column(db.Integer, nullable=False)
    design = db.Column(db.Boolean(), nullable=False)
    content_upload = db.Column(db.Boolean(), nullable=False)
    source_code = db.Column(db.Boolean(), nullable=False)
    revisions = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)

    web_package = db.relationship("WebPackage", back_populates="web")

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
