from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Service, ServiceLanguage

service_routes = Blueprint('services', __name__)


@service_routes.route('/')
def all_services():
    services = Service.query.all()
    return jsonify([service.to_dict() for service in services])


@service_routes.route('/<int:id>')
def one_service(id):
    service = Service.query.get(id)
    return service.to_dict()


@service_routes.route('/programming-lang')
def programming_languages():
    services = ServiceLanguage.query.all()
    return jsonify([service.to_dict() for service in services])
