from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Service

service_routes = Blueprint('services', __name__)


@service_routes.route('/')
def all_services():
    services = Service.query.all()
    return jsonify([service.to_dict() for service in services])
