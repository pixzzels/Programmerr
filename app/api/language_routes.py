from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Language, db

language_routes = Blueprint('languages', __name__)


@language_routes.route('/')
@login_required
def languages():
    languages = Language.query.all()
    print([language.to_dict() for language in languages])
    return jsonify([language.to_dict() for language in languages])
    