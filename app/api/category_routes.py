from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Category

category_routes = Blueprint('categories', __name__)


@category_routes.route('/')
def category():
    categories = Category.query.all()
    return jsonify([category.to_dict() for category in categories])
