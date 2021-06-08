from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, UserLanguage, Skill, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    users = User.query.get(id)
    return users.to_dict()


@user_routes.route('/tagline/<int:userId>', methods=["PUT"])
@login_required
def update_user_tagline(userId):
    user = User.query.get(userId)

    user.tag_line = request.json["tag_line"]

    db.session.add(user)
    db.session.commit()
    return user.to_dict()


@user_routes.route('/description/<int:userId>', methods=["PUT"])
@login_required
def update_user_description(userId):
    user = User.query.get(userId)

    user.description = request.json["description"]

    db.session.add(user)
    db.session.commit()
    return user.to_dict()


@user_routes.route('/language/<int:userId>')
@login_required
def load_user_language(userId):
    languages = UserLanguage.query.filter(UserLanguage.user_id == userId).all()

    return jsonify([language.to_dict() for language in languages])


@user_routes.route('/language', methods=["POST"])
@login_required
def add_user_language():
    language = UserLanguage(**request.json)

    db.session.add(language)
    db.session.commit()
    return language.to_dict()


@user_routes.route('/language/delete/<int:id>', methods=["DELETE"])
@login_required
def delete_user_language(id):
    userLanguage = UserLanguage.query.get(id)

    db.session.delete(userLanguage)
    db.session.commit()
    return userLanguage.to_dict()


@user_routes.route('/skill', methods=["POST"])
@login_required
def add_user_skill():
    skill = Skill(**request.json)

    db.session.add(skill)
    db.session.commit()
    return skill.to_dict()


@user_routes.route('/skill/<int:userId>')
@login_required
def load_user_skill(userId):
    skills = Skill.query.filter(Skill.user_id == userId).all()

    return jsonify([skill.to_dict() for skill in skills])