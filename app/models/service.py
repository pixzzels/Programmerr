from .db import db


class Service(db.Model):
    __tablename__ = "Services"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    listing_img = db.Column(db.String)
    price = db.Column(db.Float, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("Users.id"), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey(
        "Categories.id"), nullable=False)
    service_type_id = db.Column(db.Integer, db.ForeignKey("ServiceTypes.id"))
    web_metadata_id = db.Column(db.Integer, db.ForeignKey("WebMegadatas.id"))
    web_package_id = db.Column(db.Integer, db.ForeignKey("WebPackages.id"))
    time_created = db.Column(db.DateTime(timezone=True),
                             server_default=db.func.now())

    user = db.relationship("User", back_populates="service")
    category = db.relationship("Category", back_populates="service")
    service_type = db.relationship("ServiceType", back_populates="service")
    web_megadata = db.relationship("WebMegadata", back_populates="service")
    web_package = db.relationship("WebPackage", back_populates="service")
    service_requirement = db.relationship(
        "ServiceRequirement", back_populates="service")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "listing_img": self.listing_img,
            "price": self.price,
            "user_id": self.user_id,
            "category_id": self.category_id,
            "service_type_id": self.service_type_id,
            "web_metadata_id": self.web_metadata_id,
            "web_package_id": self.web_package_id,
            "time_created": self.time_created
        }
