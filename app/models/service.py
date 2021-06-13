from .db import db


class Service(db.Model):
    __tablename__ = "Services"

    id = db.Column(db.Integer, primary_key=True)
    publish = db.Column(db.Boolean())
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    listing_img = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey("Users.id"), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey(
        "Categories.id"), nullable=False)
    service_language_id = db.Column(
        db.Integer, db.ForeignKey("ServiceLanguages.id"))
    web_package_id = db.Column(db.Integer, db.ForeignKey("WebPackages.id"))
    time_created = db.Column(db.DateTime(timezone=True),
                             server_default=db.func.now())

    user = db.relationship("User", back_populates="service")
    category = db.relationship("Category", back_populates="service")
    service_language = db.relationship(
        "ServiceLanguage", back_populates="service")
    web_package = db.relationship("WebPackage", back_populates="service")
    service_requirement = db.relationship(
        "ServiceRequirement", back_populates="service")
    reviews = db.relationship("Review", back_populates="service")

    def to_dict(self):
        if self.web_package_id:
            return {
                "id": self.id,
                "publish": self.publish,
                "title": self.title,
                "description": self.description,
                "listing_img": self.listing_img,
                "user_id": self.user_id,
                "category_id": self.category_id,
                "service_language_id": self.service_language_id,
                "web_package_id": self.web_package_id,
                "time_created": self.time_created,
                "user": self.user.to_dict(),
                "reviews": [review.to_dict() for review in self.reviews],
                "web_package": self.web_package.to_dict(),
                "service_language": self.service_language.to_dict()
            }
        else:
            return {
                "id": self.id,
                "publish": self.publish,
                "title": self.title,
                "description": self.description,
                "listing_img": self.listing_img,
                "user_id": self.user_id,
                "category_id": self.category_id,
                "service_language_id": self.service_language_id,
                "time_created": self.time_created,
                "user": self.user.to_dict(),
                "reviews": [review.to_dict() for review in self.reviews],
                "service_language": self.service_language.to_dict()
            }

    def dict_overview(self):
        return {
            "id": self.id,
            "title": self.title,
            "user_id": self.user_id,
            "category_id": self.category_id,
            "service_language_id": self.service_language_id,
            "time_created": self.time_created,
            "user": self.user.to_dict(),
        }