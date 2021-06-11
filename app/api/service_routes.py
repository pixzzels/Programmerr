from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Service, ServiceLanguage, db

service_routes = Blueprint('services', __name__)


@service_routes.route('/')
def all_services():
    services = Service.query.filter(Service.publish == True).all()
    return jsonify([service.to_dict() for service in services])


@service_routes.route('/<int:id>')
def one_service(id):
    service = Service.query.get(id)
    return service.to_dict()


@service_routes.route('/programming-lang')
def programming_languages():
    services = ServiceLanguage.query.all()
    return jsonify([service.to_dict() for service in services])


@service_routes.route('/add/overview', methods=["POST"])
def add_new_service_overview():
    new_service = Service(**request.json)
    db.session.add(new_service)
    db.session.commit()
    return new_service.dict_overview()



@service_routes.route('/user/<int:id>')
def user_services(id):
    services = Service.query.filter(Service.user_id == id).all()
    # print("FLAAG", [service.dict_overview() for service in services])
    return jsonify([service.dict_overview() for service in services])


@service_routes.route('/update/overview/<int:serviceId>', methods=["PUT"])
@login_required
def update_service_overview(serviceId):
    service = Service.query.get(serviceId)

    service.title = request.json["title"]
    service.titcategory_idle = request.json["category_id"]
    service.service_language_id = request.json["service_language_id"]


    db.session.add(service)
    db.session.commit()
    return service.dict_overview()