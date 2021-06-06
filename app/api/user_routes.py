from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/tagline/<int:userId>', methods=["PUT"])
@login_required
def update_tagline(userId):
    user = User.query.get(userId)

    user.tag_line = request.json["tag_line"]

    db.session.add(user)
    db.session.commit()
    return user.to_dict()
