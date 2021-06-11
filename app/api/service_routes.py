from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Service, ServiceLanguage, db, Web, WebPackage

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


@service_routes.route('/user/edit/<int:serviceId>')
def user_service_edit(serviceId):
    service = Service.query.get(serviceId)
    # print("FLAAG", [service.dict_overview() for service in services])
    if service.web_package_id:
        return service.to_dict()
    else:
        return service.dict_overview()


@service_routes.route('/update/overview/<int:serviceId>', methods=["PUT"])
@login_required
def update_service_overview(serviceId):
    service = Service.query.get(serviceId)

    service.title = request.json["title"]
    service.category_id = request.json["category_id"]
    service.service_language_id = request.json["service_language_id"]

    db.session.add(service)
    db.session.commit()

    return service.dict_overview()


@service_routes.route('/update/basic/<int:serviceId>', methods=["POST"])
@login_required
def update_basic_package(serviceId):

    service = Service.query.get(serviceId)

    if service.web_package_id is None:
        web = Web(**request.json)
        # print("FLAAGs", web.id)

        db.session.add(web)
        db.session.commit()

        basicId = (web.id)

        webPackage = WebPackage(web_basic_id=basicId)
        db.session.add(webPackage)
        db.session.commit()

        webPackageId = webPackage.id

        service.web_package_id = webPackageId

        db.session.commit()

        return service.to_dict()

    webPackage = WebPackage.query.get(service.web_package_id)
    webBasic = Web.query.get(webPackage.web_basic_id)

    webBasic.type = request.json["type"]
    webBasic.title = request.json["title"]
    webBasic.description = request.json["description"]
    webBasic.delivery_time = request.json["delivery_time"]
    webBasic.pages = request.json["pages"]
    webBasic.design_custom = request.json["design_custom"]
    webBasic.content_upload = request.json["content_upload"]
    webBasic.responsive_design = request.json["responsive_design"]
    webBasic.source_code = request.json["source_code"]
    webBasic.revisions = request.json["revisions"]
    webBasic.price = request.json["price"]

    db.session.add(webBasic)
    db.session.commit()
    return service.to_dict()


@service_routes.route('/update/standard/<int:serviceId>', methods=["POST"])
@login_required
def update_standard_package(serviceId):

    service = Service.query.get(serviceId)
    webPackage = WebPackage.query.get(service.web_package_id)

    if webPackage.web_standard_id is None:
        web = Web(**request.json)
        # print("FLAAGs", web.id)

        db.session.add(web)
        db.session.commit()

        standardId = (web.id)

        webPackage.web_standard_id = (standardId)
        db.session.add(webPackage)
        db.session.commit()

        return service.to_dict()

    webStandard = Web.query.get(webPackage.web_standard_id)

    webStandard.type = request.json["type"]
    webStandard.title = request.json["title"]
    webStandard.description = request.json["description"]
    webStandard.delivery_time = request.json["delivery_time"]
    webStandard.pages = request.json["pages"]
    webStandard.design_custom = request.json["design_custom"]
    webStandard.content_upload = request.json["content_upload"]
    webStandard.responsive_design = request.json["responsive_design"]
    webStandard.source_code = request.json["source_code"]
    webStandard.revisions = request.json["revisions"]
    webStandard.price = request.json["price"]

    db.session.add(webStandard)
    db.session.commit()
    return service.to_dict()


@service_routes.route('/update/premium/<int:serviceId>', methods=["POST"])
@login_required
def update_premium_package(serviceId):

    service = Service.query.get(serviceId)
    webPackage = WebPackage.query.get(service.web_package_id)

    if webPackage.web_premium_id is None:
        web = Web(**request.json)
        # print("FLAAGs", web.id)

        db.session.add(web)
        db.session.commit()

        premiumId = (web.id)

        webPackage.web_premium_id = (premiumId)
        db.session.add(webPackage)
        db.session.commit()

        return service.to_dict()

    webPremium = Web.query.get(webPackage.web_premium_id)

    webPremium.type = request.json["type"]
    webPremium.title = request.json["title"]
    webPremium.description = request.json["description"]
    webPremium.delivery_time = request.json["delivery_time"]
    webPremium.pages = request.json["pages"]
    webPremium.design_custom = request.json["design_custom"]
    webPremium.content_upload = request.json["content_upload"]
    webPremium.responsive_design = request.json["responsive_design"]
    webPremium.source_code = request.json["source_code"]
    webPremium.revisions = request.json["revisions"]
    webPremium.price = request.json["price"]

    db.session.add(webPremium)
    db.session.commit()
    return service.to_dict()
